const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");




// send mail
router.post("/register",  (req, res) => {

    const { email,name,phone,date,time,pickupAdd,dropAdd,cabs } = req.body;
  

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "anfal.androapps@gmail.com",
                pass: "dzecaliuzcmbpvcw"
            }
        });

        const mailOptions = {
            from: "avaktapuriya33@gmail.com",
            to: email,
            subject: "Congratulation!",
            html: `you have successfully booked Ac Hatchblack
            <br><br><br><br>
            Thankyou, Team Avntika Tours`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    }
    
    catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }


    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "anfal.androapps@gmail.com",
                pass: "dzecaliuzcmbpvcw"
            }
        });
        // tankjyotish@gmail.com"
        const mailOptions = {
            from: "avaktapuriya33@gmail.com",
            to: "anfalvaktapurya91@gmail.com",
            subject: `${name} have booked ${cabs}`,
            html: `<h3>Booking Details</h3>
                    <p><span style="font-weight:bold;">Name:-</span> ${name}</p><br><p><span style="font-weight:bold;">Email:-</span> ${email}</p><br><p><span style="font-weight:bold;">Phone:-</span> ${phone}</p><br><p><span style="font-weight:bold;">Date:-</span> ${date}</p><br><p><span style="font-weight:bold;">Time:-</span> ${time}</p><br><p><span style="font-weight:bold;">Pick-up Address:-</span> ${pickupAdd}</p><br><p><span style="font-weight:bold;">Drop Address:-</span> ${dropAdd}</p>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    }
    
    catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


module.exports = router;