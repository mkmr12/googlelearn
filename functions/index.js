const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require("firebase-admin")
admin.initializeApp()
const nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'mukesh.lnwebworks@gmail.com',
        pass: 'welcome@1233'
    }
});
const mailOptions = {
    from: `softauthor1@gmail.com`,
    to: snap.data().email,
    subject: 'contact form message',
    html: `<h1>Order Confirmation</h1>
     <p> <b>Email: </b>${snap.data().email} </p>`
};
exports.sendEmail = functions.firestore
    .document('users/{orderId}')
    .onCreate((snap, context) => {

});