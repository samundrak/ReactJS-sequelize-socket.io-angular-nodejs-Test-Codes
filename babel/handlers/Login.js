module.exports = {
        socket: (client, models) => {
            return data => {
                models.User.find({
                    where: data
                })
                    .then(r => {
                        if (r) {
                            client.emit('loginResponse', {
                                message: `welcome ${ data.username }`
                            });
                        } else {
                            client.emit('loginResponse', {
                                message: `Sorry! no user has found`
                            });
                        }
                    }, e => {
                        client.emit('Error', {
                            success: 1,
                            message: `Sorry! no user has found`
                        });
                    })
            }
        },
        HTTP: (req, res, next) => {
            return req.onerror('non ',res)
            // const username  = req.body.username;
            // const password  =  req.body.password;
            // const picks = ["username","password"];
            // const checker =  [];


            // req.models.User.find({

            // })
            res.send(200);
        }
}