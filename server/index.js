// Require dependencies
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import nodemailer from 'nodemailer';

import config from './config.js';
import textCtrl from './textCtrl.js';
import emailCtrl from './emailCtrl.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

// Email Endpoints
app.post('/email', emailCtrl.sendEmail);

// Texting Endpoints
app.post('/text', textCtrl.sendText);

// App Listen
app.listen(config.port, () => {
    console.log('listening on port ', config.port);
});
