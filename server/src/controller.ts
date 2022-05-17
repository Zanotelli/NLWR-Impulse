import express from "express";
import {prisma} from "./prisma";
import nodemailer from "nodemailer";
import {SubmitFeedbackUseCase} from "./use-cases/SubmitFeedbackUseCase";
import {PrismaFeedbackRepository} from "./repositories/prisma/PrismaFeedbackRepository";
import {NodemailerMailAdapter} from "./services/mail/nodemailer/NodemailerMailAdapter";

export const controller = express.Router()

controller.post('/feedbacks', async (req, res) => {

    const {type, comment, screenshot} = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send()
})


controller.get('/hithere', (req, res) => {
    return res.send('General Kenobi')
})