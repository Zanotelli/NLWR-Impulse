import {ArrowLeft} from "phosphor-react";
import {CloseButton} from "../../CloseButton";
import Success from '../../../assets/success.svg'
import {FeedbackType} from "../index";

interface FeedbackSuccessProps {
    onFeedbackRestartRequested: () => void,
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessProps) {
    return(
        <>
            <header >
                <CloseButton/>
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img
                    src={Success}
                    alt="ícone de sucesso"
                    className="max-h-14"
                />
                <span className="text-xl mt-2">
                    Agradecemos seu feedback!
                </span>

                <button
                    type={"button"}
                    onClick={onFeedbackRestartRequested}
                    className="mt-4 p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-100 focus:ring-brand-500 transition-colors text-zinc-100 font-bold"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}