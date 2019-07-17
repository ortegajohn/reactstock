const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models')
const database = require('../db/database_connection');
const {
    encryptPassword,
    matchPassword
} = require('../config/helper_pass');
console.log("GOTHERE1")
passport.use('local.signin', new LocalStrategy({

    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true

}, async (req, username, password, done) => {
    
    console.log("GOTHERE2")
    const rows = await database.query("SELECT * FROM iStock_users WHERE username = ?", [username]);

    if (rows.length > 0) {

        const user = rows[0];
        const validPassword = await matchPassword(password, user.password);

        if (validPassword) {

            done(null, user, req.flash('success', 'Welcome user: ' + user.username));

        } else {

            done(null, false, req.flash('message', 'Incorrect password'));

        }

    } else {

        return done(null, false, req.flash('message', 'The username does not exists'));

    }

}));

passport.use('local.signup', new LocalStrategy({

    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true

}, async (req, username, password, done) => {
    console.log("GOTHERE3")

    const {
        firstname
    } = req.body;

    const {
        lastname
    } = req.body;

    const newUser = {
        username: username,
        password: password,
        first_name: firstname,
        last_name: lastname
    } 

    const check = async () =>{
        if(!firstname || !lastname || !username || !password){
            console.log({msg: 'Please enter all fields'});
       } else {
            if(password.length < 6) {
              console.log({ msg: 'Password must be at least 6 characters'});
             }else{
                    database.query("SELECT * FROM iStock_users WHERE username = ?", [username]).then((req, res) => {
                        //console.log('req: ', Object.keys(req));
                        //console.log('res: ', req[0].username);
                        console.log('req ', req.length);
                        if(!req.lenght > 0){
                            newUser.password = function operation(encryptPassword) {encryptPassword(password);}
                                console.log('yo!:', newUser.password)
                                database.query("INSERT INTO iStock_users SET ?", [newUser]).then(function(){
                                    newUser.id = result.insertId;
        
                                    console.log(newUser);
        
                                    return done(null, newUser, req.flash('success', 'Welcome user: ', newUser.username));
                                });
                        } else {
                            if(req[0].username) {
                                console.log({ msg: 'User already exists'});
                            } else {
                                console.log('password: ', password);
                                newUser.password = function operation(encryptPassword) {encryptPassword(password);}
                                console.log('yo!:', newUser.password)
                                database.query("INSERT INTO iStock_users SET ?", [newUser]).then(function(){
                                    newUser.id = result.insertId;
        
                                    console.log(newUser);
        
                                    return done(null, newUser, req.flash('success', 'Welcome user: ', newUser.username));
                                });
        
                                // newUser.id = result.insertId;
        
                                // console.log(newUser);
        
                                // return done(null, newUser, req.flash('success', 'Welcome user: ', newUser.username));
                            } 

                        }
                            
                            
                        
                    }) 
          
           
            
        }
    }
    }
        check();
    // newUser.password = await encryptPassword(password);

    // const result = await database.query("INSERT INTO iStock_users SET ?", [newUser]);

    // newUser.id = result.insertId;

    // console.log(newUser);

    // return done(null, newUser, req.flash('success', 'Welcome user: ', newUser.username));

}));

passport.serializeUser((user, done) => {

    done(null, user.id);

});

passport.deserializeUser(async (id, done) => {

    const rows = await database.query("SELECT * FROM iStock_users WHERE id = ?", [id]);
    done(null, rows[0]);

});