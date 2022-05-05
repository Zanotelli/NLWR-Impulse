import {CloseButton} from "../../CloseButton";
import {FeedbackType, feedbackTypes} from "../index";
import {ArrowLeft} from "phosphor-react";
import {ScreenshotButton} from "../ScreenshotButton";

interface FeedbackContentProps {
    feedbackType: FeedbackType,
    onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep(props: FeedbackContentProps) {

    const feedbackTypeInfo = feedbackTypes[props.feedbackType]

    return(
        <>
            <header >
                <button
                    onClick={props.onFeedbackRestartRequested}
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-800"
                    title="volta para aba de seleção de tipo"
                >
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="max-h-7" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton/>
            </header>

            <form className="my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-500 text-zinc-800 bg-amber-100 border-2 focus:border-amber-400 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton />
                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-100 focus:ring-brand-500 transition-colors text-zinc-100 font-bold"
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}