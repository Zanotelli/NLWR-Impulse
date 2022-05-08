import express from "express";
import {prisma} from "./prisma";
import nodemailer from "nodemailer";
import {SubmitFeedbackUseCase} from "./use-cases/SubmitFeedbackUseCase";
import {PrismaFeedbackRepository} from "./repositories/prisma/PrismaFeedbackRepository";

export const controller = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9b392c672e9ccc",
        pass: "8dbe68f662b5fb"
    }
});

controller.post('/feedbacks', async (req, res) => {

    const {type, comment, screenshot} = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase( prismaFeedbackRepository )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    // await transport.sendMail({
    //     from: 'Equipe Zan <zan@zanotelli.com>',
    //     to: 'Gabriel Zanotelli <gabriel.czbr@gmail.com>',
    //     subject: 'Novo feedback',
    //     html: [
    //         `<div style="font-family: sans-serif; font-size: 16px">`,
    //         `<p>Tipo do feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         `<img src={${screenshot}} alt="imagem" />`,
    //         `</div>`,
    //     ].join('\n')
    // })

    return res.status(201).send()
})




controller.get('/hithere', (req, res) => {
    return res.send('General Kenobi')
})