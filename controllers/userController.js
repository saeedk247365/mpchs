const User = require('../model/userSchema');
const Notification = require('../model/notificationSchema');
const bcrypt = require('bcryptjs');
const req = require('express/lib/request');
const { update } = require('../model/userSchema');


const register_post = async (req, res) => {
    const { fname: fname, email, password, cpassword } = req.body;
    if (!fname || !email || !password || !cpassword) {
        res.render("registration.ejs", {
            errorMessage: 'Plz Filled Properly'
        });
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            res.render("registration.ejs", {
                errorMessage: 'This email already registered'
            });
        } else if (password != cpassword) {

            res.render("registration.ejs", {
                errorMessage: 'Password not Matched'
            });
            
        }
        else {
            const user = new User({ fname: fname, email: email, password: password, cpassword: cpassword });
            const userRegistered = user.save();
            if (userRegistered) {
                res.redirect('/login');
            } else {
                res.render("registration.ejs", {
                    errorMessage: 'Registration Failed'
                });
            }
        }

    } catch (error) {
        console.log(error);
    }


}


const login_postt = async (req, res) => {

    const { email, password } = req.body;

    try {

        if (!email || !password) {
            res.render("login.ejs", {
                errorMessage: 'Invalid Credential'
            });
            
            //res.json({ error: 'Invalid cradential ' });
        }
        const userlogin = await User.findOne({ email: email });

        if (userlogin) {
            const passwordcheck = await bcrypt.compare(password, userlogin.password);
            if (!passwordcheck) {
              
                res.render("login.ejs", {
                    errorMessage: 'Invalid Credential!'
                });
                

            } else{
              
                
                    req.session.email = userlogin.email;
                    req.session.fname = userlogin.fname;   
                    req.session.password = userlogin.password;
                    console.log(req.session.email);
                    console.log(req.session.password);
                    if(req.session.email==='info@binarybarrier.com'  && req.session.password === '$2a$12$l6EIoKRrv3kAnO1OEkphIuBBr7jpG9Lzx9tIJZ8qr.SZ/UskrxDuy' )   {
                        res.redirect('/dashboard');
                    }else{
                        console.log(userlogin.email)
                        req.session.email = userlogin.email;
                        req.session.fname = userlogin.fname;   
                        res.redirect('/dashboardclient');
                    }
                   
                
              
            }


        } else {
            res.render("login.ejs", {
                errorMessage: 'Invalid Credential!'
            });
            
        }
    } catch (error) {
        console.log(error);
    }
}

//Add Notification
const addnotification_postt=async (req,res) => {
 const {title,body,link} = req.body;
 const notification = new Notification({ title: title, body: body, link:link });
 const addnotification = notification.save();
 if(addnotification){
     res.redirect('/notification')
 }else{
     res.redirect('/dashboard');
 }
}

//edit Notification
const editnotification_postt= (req,res) => {
   
    const notification =Notification.findByIdAndUpdate(req.body.id,
        {
            title: req.body.title,
            body: req.body.body,
            link: req.body.link,
        });
        notification.exec(function(err,data){
if(err) throw err;
res.redirect("/notification/notification-show");
        });
   
    
}
    
   



   
const logout_get = (req,res) =>{
    req.session.destroy((err) => {
        if(err){
            console.log(err);
        }else{
            res.render("login.ejs", {
                errorMessage: 'Successfully Logout!'
            });
            
        }
    });
}
module.exports = {
    
    register_post,
    login_postt,
    logout_get,
    addnotification_postt,
    editnotification_postt
}