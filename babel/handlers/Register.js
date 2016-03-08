module.exports = {
    socket(client, models) {
        return data => {
            models.User.find({
                where: {
                    username: data.username,
                    email: data.email
                }
            }).then(r => {
                if (r) {
                    client.emit('loginResponse', {
                        message: 'This username or email is already taken'
                    });
                    return;
                }

                models.User.create(data);
                client.emit('loginResponse', {
                    message: 'You are registered!'
                });
            })
        }
    }
}