const passport = require('passport');
require('../config/passport')(passport);

router.post('/', passport.authenticate('jwt', { session: false }), function(req, res){
    var token = getToken(req.headers);
    if(token){
        db.Stock.create(req.body, function(err, post){
            if(err) return next(err);
            res.json(post);
        });
    }else {
        return res.status(403).send({ success: false, msg: 'Unauthorized' });
    }
});

router.get('/', passport.authenticate('jwt', { session: false }), function(req, res) {
    var token = getToken(req.headers);
    if(token) {
        db.Stock.find(function (err, stocks){
            if(err) return next(err);
            res.json(db.Stock);
        });
    }else {
        return res.status(403).send({ success: false, msg: 'Unauthorized' });
    }
});

getToken = function(headers){
    if (headers && headers.authorization){
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        }else{
            return null;
        }
    }else {
        return null;
    }
};

module.exports = API;