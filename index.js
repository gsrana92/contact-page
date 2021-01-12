const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', () => {
    resizeBy.send('welcome to my form')
})

app.post('/api/forma', (req, res)=>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth:{
            user: 'email',
            pass: 'password'
        }
    });

    let mailOptions={
        from: data.email,
        to: 'yourEmail@gmail.com',
        subject: `Message from ${data.firstName} ${data.lastName}`,
        html:`
        <h3>Informations</h3>
        <ul>
        <li>FirstName: ${data.firstName}</li>
        <li>LastName: ${data.lastName}</li>
        <li>Email: ${data.email}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
        
        `
    };
    smtpTransport.sendMail(mailOptions, (error, response)=>{
        if(error){
            res.send(error)
        }else{
            res.send('Success')
        }

    })

    smtpTransport.close();
})

const PORT = process.env.PORT||3001;
app.listen(PORT, () => {
    console.log(`server starting at port ${PORT}`);
})