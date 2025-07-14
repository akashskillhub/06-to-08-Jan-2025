const nodemailer = require("nodemailer")

const sendEmail = ({ to, subject, message }) => new Promise(async (resolve, reject) => {
    try {
        const transport = nodemailer.createTransport({
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
            service: "gmail"
        })

        await transport.sendMail({
            to,
            subject,
            text: message,
        })
        console.log("email send success")
        resolve(true)
    } catch (error) {
        console.log(error)
        reject(false)
    }
})

module.exports = sendEmail