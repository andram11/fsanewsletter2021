var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

const creds = require('./config');
const app = express()
var cors = require('cors');

const port = process.env.PORT || 8080;

// use it before all route definitions
app.use(cors({origin: '*'}));
app.use(express.json())
app.use('/', router)


app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

var transport = {
    host: 'smtp.office365.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
 

  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: email,
    to: 'andra.mertilos@intys.eu',  // Change to email address that you want to receive messages on
    subject: 'New idea submitted via the FSA IdeaBox',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
         status: 'success'
      })
  
      transporter.sendMail({
        from: "andra.mertilos@intys.eu",
        to: email,
        subject: "You have submitted your idea.",
        text: `Thank you for contacting the Intys FSA Practice!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
      }, function(error, info){
        if(error) {
          console.log(error);
        } else{
          console.log('Message sent: ' + info.response);
        }
      });
    }
  })

})
 


app.listen(port)
