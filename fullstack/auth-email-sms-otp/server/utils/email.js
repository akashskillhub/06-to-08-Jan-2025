const nodemailer = require("nodemailer")

const sendEmail = ({ to, subject, message }) => new Promise(async (resolve, reject) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.EMAIL, pass: process.env.PASS }
        })
        await transport.sendMail({ to, subject, text: message })
        resolve()
    } catch (error) {
        reject()
    }
})

module.exports = sendEmail