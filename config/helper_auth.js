module.exports = {

    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            return res.redirect('../client/components/SignIn');
        }
    },

    isNotLoggedIn(req, res, next) {
        console.log("helper_auth isNotLoggedIn")
        if (!req.isAuthenticated()) {
            return next();
        } else {
            return res.redirect('/')
        }
    }
    
}