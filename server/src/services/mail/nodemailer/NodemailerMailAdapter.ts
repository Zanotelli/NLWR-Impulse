import {MailAdapter, SendMailData} from "../MailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9b392c672e9ccc",
        pass: "8dbe68f662b5fb"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Zan <zan@zanotelli.com>',
            to: 'Gabriel Zanotelli <gabriel.czbr@gmail.com>',
            subject,
            html: body,
        })
    }
}