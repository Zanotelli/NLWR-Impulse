import {FeedbacksRepository} from "../repositories/FeedbacksRepository";
import {MailAdapter} from "../services/mail/MailAdapter";

interface SubmitFeedbackUseCaseRequest {
    type: string,
    comment: string,
    screenshot?: string
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ){}


    async execute(request: SubmitFeedbackUseCaseRequest) {
        const {type, comment, screenshot} = request

        if (!type) {
            throw new Error('Um tipo de feedback é obrigatório.')
        }

        if (!comment) {
            throw new Error('Um comentário de feedback é obrigatório.')
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Formato da imagem inválido.')
        }

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `<img src={${screenshot}} alt="imagem" />`,
                `</div>`,
            ].join('\n')
        })
    }
}