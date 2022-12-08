const nodemailer = require('nodemailer');

const CLIENT_ID = "543089614031-k5p00ll42m4eg4kf878dr01nih193a24.apps.googleusercontent.com"

const CLIENT_SECRET = "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"


export async function sendEmail() {
    try {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'reichjamesm@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                accessToken: "ya29.a0AeTM1idMh23uDVVQ98RlixO0PMCEXCZCzfHLaaJpAVuJB0_lqv_6wPhV6DyoYNpdqOnGdnyT2_aghdjgSBQwuYBhO8WK1A59hjuzCQfFLqQz-vIMev233xlVWfrBSpG_ZL_tJ-ivW78rYtQ_Un_z2wimxPngaCgYKAQASARMSFQHWtWOmC5DdvALG2I1hz_nOrG0Oag0163"
            }
        });

        const mailOptions = {
            from: "reichjamesm@gmail.com",
            to:  "reichjamesm@gmail.com",
            subject: "This is a test email",
            text: "This is the body of the message",
            html: "<h1>Less than 10% Remaining</h1>"
        }

        const result = await transport.sendMail(mailOptions)

        return result

    } catch (error) {
        return error
    }
}



    

