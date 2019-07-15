module.exports = {

    isLoggedIn(req, res, next) {
        console.log("helper_auth isLoggedIn")
        if (req.isAuthenticated()) {
            return next();
        } else {
            // return res.redirect('../client/components/SignIn');
            return res.redirect('/signin');
        }
    },

    isNotLoggedIn(req, res, next) {
        console.log("helper_auth isNotLoggedIn")
        if (!req.isAuthenticated()) {
            console.log("!req.isAuthenticated()")
            return next();
        } else {
            console.log("else")
            return res.redirect('/')
        }
    }
    
}