const express = require('express');
const router = express.Router();
const fs = require('fs');
const userController = require('../controllers/userController');
const User = require('../model/userSchema');
const Notification = require('../model/notificationSchema');
const { title } = require('process');
const path = require('path');
const ipaddr = require('ipaddr.js');
const { promises } = require('fs');
router.use(express.static(__dirname + '/public'));


//joining path of directory 
// const directoryPath = path.join(__dirname+'/assets/images/bg/im');

router.get('/images', async (req, res) => {
    try {
        const files = await promises.readdir('./public/assets/images/bg/im');
        // res.status(200).json(files);

        res.render('./about-us/media-room/test.ejs', { 'files': files });
    } catch (err) {
        res.status(500).json(err);
    }
});
// let files;
// try{
//     const response =  fetch("/imagess");
//     files =  response.json();
//     console.log(files)
// files is now an array of file names, do what you want with that (create <img> tags, etc.)
// } catch(err){
//     console.error(err)
// }



//home page notification with limit 
// router.get('/',  (req,res) =>{

//     Notification.find()
//     .sort({
//         createdAt:-1,
//     }).limit(9)
//     .then((result) =>{

//home page url
router.get('/', (req, res) => {

    Notification.find()
        .sort({
            createdAt: -1,
        })
        .then((result) => {
            // console.log(req.ip);
            // console.log(req.remoteAddress);
            //             var ip = req.headers['x-forwarded-for'] || req.remoteAddress;
            // if (ip.substr(0, 7) === "::ffff:") {
            //   ip = ip.substr(7)
            //   console.log(ip);
            // }
            // console.log(req.socket.remoteAddress);
            //   console.log(req.ip);



            let remoteAddress = req.ip;
            if (ipaddr.isValid(req.ip)) {
                remoteAddress = ipaddr.parse(req.ip);
                var address = remoteAddress.toString({ format: 'v4' });
                console.log(address);
            }
            //   ip = req.headers['x-forwarded-for'] ||
            //       req.remoteAddress ||
            //       req.socket.remoteAddress 

            // console.log(ip);
            res.render('index.ejs', { notification: result });
        });




});




router.get('/login', (req, res) => {

    res.render('login.ejs');

});
router.get('/ind', (req, res) => {

    res.render('ind.ejs');

});
//Projects Router

router.get('/our-team', (req, res) => {

    res.render('our_team.ejs');

});

router.get('/contact-us', (req, res) => {

    res.render('contact_us.ejs');

});

//Projects Router

router.get('/projects', (req, res) => {

    res.render('projects.ejs');

});
router.get('/gallery', (req, res) => {

    res.render('./about-us/media-room/picture_gallery.ejs');

});

//Projects Router end

//About-us Routers Start

router.get('/about-us/background', (req, res) => {

    res.render('./about-us/background.ejs');

});
router.get('/about-us/head-office', (req, res) => {

    res.render('./about-us/head_office.ejs');

});

router.get('/about-us/financial-highlights', (req, res) => {

    res.render('./about-us/financial_highlights.ejs');

});

router.get('/about-us/ISO-certificates', (req, res) => {

    res.render('./about-us/ISO_certificates.ejs');

});
router.get('/about-us/brouchers', (req, res) => {

    res.render('./about-us/media-room/broucher.ejs');

});
router.get('/about-us/brouchers/ros-brosh', (req, res) => {
    var data = fs.readFileSync('./public/pdf/ros-brosh.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/brouchers/B-17-Brochure', (req, res) => {
    var data = fs.readFileSync('./public/pdf/B-17 Brochure.pdf');
    res.contentType("application/pdf");
    res.send(data);


});



// router.get('/about-us/NOCs', (req,res) =>{

//     res.render('./about-us/media-room/NOC.ejs');

//     });
router.get('/about-us/press-release', (req, res) => {

    res.render('./about-us/media-room/press_release.ejs');

});


router.get('/about-us/newsletters', (req, res) => {


    res.render('./about-us/media-room/newsletters.ejs');

});


//newsletter pdf
router.get('/about-us/newsletters/News-Letter-august-2022', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/NewsLetterAugust2022.pdf');
    res.contentType("application/pdf");
    res.send(data);


});

router.get('/about-us/newsletters/News-Letter-2022', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Newsletter2022.pdf');
    res.contentType("application/pdf");
    res.send(data);


});

router.get('/about-us/newsletters/Multi-Newsletter-April-2016', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/f5c4eb09-b283-4d71-a795-e17b8c14468e_NL.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/Multi-newsletter-2017', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Multi_newsletter_2017.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/Multi-Newsletter-February-2019', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Multi_Newsletter_February_2019.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/Multi-Newsletter-october-2019', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Multi_Newsletter_october_2019.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/Multi-Newsletter-september-2019', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Multi_Newsletter_september_2019.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/Multi-Newsletter-November-2017', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Multi_Newsletter_November_2017.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/Multi-Newsletter-November-2018', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Multi_Newsletter_November_2018.pdf');
    res.contentType("application/pdf");
    res.send(data);


});

router.get('/about-us/newsletters/Multi-Newsletter-September-2017', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Multi_Newsletter_September_2017.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/News-Letter-2021', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/News_Letter_2021.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/Newsletter-November-2019', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Newsletter_November_2019.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/Newsletter-November-2020', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/Newsletter_November_2020.pdf');
    res.contentType("application/pdf");
    res.send(data);


});
router.get('/about-us/newsletters/NewsLetter-March16', (req, res) => {
    var data = fs.readFileSync('./public/pdf/newsletter/NewsLetter-March16.pdf');
    res.contentType("application/pdf");
    res.send(data);


});

//Gallery
// router.get('/about-us/islamabadGarden-Gallery', (req,res) =>{

//     res.render('./about-us/media-room/islamabadgallery.ejs');

//     });
router.get('/about-us/islamabadGarden-Gallery', async (req, res) => {
    try {
        const islamabadgarden = await promises.readdir('./public/assets/images/gallery/islamabadgarden');
        // res.status(200).json(files);

        res.render('./about-us/media-room/Islamabad_garden_gallery.ejs', { 'islamabadgarden': islamabadgarden });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/about-us/Islamabd-Orchards-Main', async (req, res) => {
    try {
        const islamabadorchard = await promises.readdir('./public/assets/images/gallery/islamabadorchard');
        // res.status(200).json(files);

        res.render('./about-us/media-room/Islamabd_Orchards_Main.ejs', { 'islamabadorchard': islamabadorchard });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/about-us/Main-Mpchs-Gallery', async (req, res) => {
    try {
        const mainpchs = await promises.readdir('./public/assets/images/gallery/mainmpchs');
        // res.status(200).json(files);

        res.render('./about-us/media-room/Main_Mpchs_Gallery.ejs', { 'mainpchs': mainpchs });
    } catch (err) {
        res.status(500).json(err);
    }

});


router.get('/about-us/Multi-Gardens', async (req, res) => {
    try {
        const multigarden = await promises.readdir('./public/assets/images/gallery/multigarden');
        // res.status(200).json(files);

        res.render('./about-us/media-room/Multi_Gardens.ejs', { 'multigarden': multigarden });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/about-us/Tele-Gardens', async (req, res) => {
    try {
        const talegarden = await promises.readdir('./public/assets/images/gallery/talegarden');
        // res.status(200).json(files);

        res.render('./about-us/media-room/Tele_Gardens.ejs', { 'talegarden': talegarden });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/about-us/multi-mansion', async (req, res) => {
    try {
        const meeting = await promises.readdir('./public/assets/images/gallery/multimension');
        // res.status(200).json(files);

        res.render('./about-us/media-room/multimension.ejs', { 'meeting': meeting });
    } catch (err) {
        res.status(500).json(err);
    }

});
router.get('/about-us/zoo-B-17-multigarden', async (req, res) => {
    try {
        const zoo = await promises.readdir('./public/assets/images/gallery/Zoo');
        // res.status(200).json(files);

        res.render('./about-us/media-room/zoo.ejs', { 'zoo': zoo });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/about-us/construction', (req, res) => {

    res.render('./about-us/servic/construction.ejs');

});
// router.get('/about-us/designs', (req,res) =>{

//     res.render('./about-us/servic/designs.ejs');

//     });
router.get('/about-us/customer-facilitation', (req, res) => {

    res.render('./about-us/servic/customer_facilitation.ejs');

});


//maps
router.get('/about-us/maps/Islamabad-Garden-E11', (req, res) => {

    res.render('./about-us/maps/islamabad_garden_e11.ejs');

});

router.get('/about-us/maps/Multi-Garden-B-17', (req, res) => {

    res.render('./about-us/maps/multi_garden_b17.ejs');

});
router.get('/about-us/maps/Tele-Garden-F-17', (req, res) => {

    res.render('./about-us/maps/tele_garden_f17.ejs');

});
router.get('/about-us/maps/Multi-Residencia-Orchards', (req, res) => {

    res.render('./about-us/maps/multi_residencia_orchards.ejs');

});

router.get('/login', (req, res) => {

    res.render('login.ejs');

});


router.get('/register', (req, res) => {

    res.render('registration.ejs');

});

router.get('/login', (req, res) => {

    if (req.session.email) {
        console.log('login function');


        res.redirect('/dashboard');
    } else {
        res.render('login.ejs');
    }
});


//get Dashboard
router.get('/dashboard', (req, res) => {

    if (req.session.email) {
        res.render('dashboard.ejs');
    } else {
        res.redirect('/login');
    }
});

//client dashboard
router.get('/dashboardclient', (req, res) => {

    if (req.session.email) {
        res.render('dashboardclient.ejs');
    } else {
        res.redirect('/login');
    }
});


//get Notification
router.get('/notification', (req, res) => {

    if (req.session.email) {
        res.render('notification.ejs');
    } else {
        res.redirect('/login');
    }

});

//Show Notification

router.get('/notification/notification-show', (req, res) => {

    if (req.session.email) {
        Notification.find()
            .sort({
                createdAt: -1,
            })
            .then((result) => {

                res.render('notificationshow.ejs', { notification: result });
            });


    } else {
        res.redirect('/login');
    }

});

//Show Notification client

router.get('/notification/more-detail', (req, res) => {


    Notification.find()
        .sort({
            createdAt: -1,
        })
        .then((result) => {

            res.render('./about-us/notificationclientview.ejs', { notification: result });
        });




});



//show only one notification
router.get('/notification/show/:id', async (req, res) => {

    if (req.session.email) {
        const id = req.params.id;
        const notificationshow = await Notification.findById(id);
        if (notificationshow) {
            res.render('detail_notification', { notificationshow: notificationshow })
        }

    } else {
        res.render("login", {
            errorMessage: 'You have to login first!'
        })
    }
});




//Delete notification
router.get('/notification/delete/:id', async (req, res) => {

    if (req.session.email) {
        const id = req.params.id;
        const notificationdelete = await Notification.findByIdAndDelete(id);
        if (notificationdelete) {
            res.redirect('/notification/notification-show')
        }

    } else {
        res.redirect("login", {
            errorMessage: 'You have to login first!'
        })
    }
});

//Update notification
router.get('/notification/edit/:id', async (req, res) => {

    if (req.session.email) {
        const id = req.params.id;
        const notificationedit = await Notification.findById(id);
        if (notificationedit) {
            res.render('edit_notification', { notificationedit: notificationedit })
        } else {
            res.redirect('/notification/notification-show')
        }

    } else {
        res.render("login", {
            errorMessage: 'You have to login first!'
        })
    }
});

router.get('/site-location-plane', async (req, res) => {
    try {
        const site = await promises.readdir('./public/pdf/site');
        // res.status(200).json(files);

        res.render('site_location', { 'site': site });
    } catch (err) {
        res.status(500).json(err);
    }

});



//register Post
router.post('/register', userController.register_post);


router.post('/login', userController.login_postt);
router.get('/logout', userController.logout_get);
router.post('/add-notification', userController.addnotification_postt);
//update notification post
router.post('/notification/update', userController.editnotification_postt);



















module.exports = router;