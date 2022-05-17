import {SubmitFeedbackUseCase} from "./SubmitFeedbackUseCase";

/*
    Aqui são realizados testes de funcionalidades para funções de dentro de nossa aplicação.
    Não vabe aos testes verificar o funcionamento da plataforma de envio de emails, ou a in-
    teridade do bando de dados, e sim nos dar certeza de que as modificações implementadas
    não quebram o código.

    'describe': cria uma "suite de testes", onde diversos testes unitários são armazenados.

    'spies': forma de saber se alguma função foi chamada. Não é necessário verificar o fun-
        cionamento de serviços externos, mas da pra verificar se eles estão sendo chamados
        correntamente.
 */

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
);

describe('Submit Feedback', ()=> {

    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Ta funfando?',
            screenshot: 'data:image/png;base64,odskgoiej9325ujwief'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Ta funfando?',
            screenshot: 'data:image/png;base64,odskgoiej9325ujwief'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback without a comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,odskgoiej9325ujwief'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback with a image in the wrong format', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Ta funfando?',
            screenshot: '!hsad8ij0Jas9dj9n'
        })).rejects.toThrow()
    })
})
