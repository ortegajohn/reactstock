module.exports = {

    isLoggedIn(req, res, next) {
        console.log("helper_auth isLoggedIn")
        if (req.isAuthenticated()) {
            return next();
        } else {
            // return res.redirect('../client/components/SignIn');
            return res.redirect('/');
        }
    },

    isNotLoggedIn(req, res, next) {
        // console.log("helper_auth req Object.keys", Object.keys(req))
        console.log("req.isAuthenticated()", req.isAuthenticated())
        console.log("req.isLoggedIn", req.isLoggedIn)
        // console.log("helper_auth res Object.keys",Object.keys( res))
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