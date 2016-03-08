'use strict';

module.exports = {
    socket: function socket(client, models) {
        return function (data) {
            models.User.find({
                where: data
            }).then(function (r) {
                if (r) {
                    client.emit('loginResponse', {
                        message: 'welcome ' + data.username
                    });
                } else {
                    client.emit('loginResponse', {
                        message: 'Sorry! no user has found'
                    });
                }
            }, function (e) {
                client.emit('Error', {
                    success: 1,
                    message: 'Sorry! no user has found'
                });
            });
        };
    },
    HTTP: function HTTP(req, res, next) {
        return req.onerror('non ', res);
        // const username  = req.body.username;
        // const password  =  req.body.password;
        // const picks = ["username","password"];
        // const checker =  [];

        // req.models.User.find({

        // })
        res.send(200);
    }
};