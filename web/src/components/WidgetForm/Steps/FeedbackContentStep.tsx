import {CloseButton} from "../../CloseButton";
import {FeedbackType, feedbackTypes} from "../index";
import {ArrowLeft} from "phosphor-react";
import {ScreenshotButton} from "../ScreenshotButton";
import {FormEvent, useState} from "react";

interface FeedbackContentProps {
    feedbackType: FeedbackType,
    onFeedbackRestartRequested: () => void,
    onFeedbackSent: () => void
}

export function FeedbackContentStep(props: FeedbackContentProps) {

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState("")

    const feedbackTypeInfo = feedbackTypes[props.feedbackType]

    function handleSubmitFeedback(event: FormEvent) {

        event.preventDefault()

        if(comment !== ''){
            console.log(comment)
            console.log(screenshot)
        }

        props.onFeedbackSent()
    }

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

            <form
                className="my-4 w-full"
                onSubmit={event => handleSubmitFeedback(event)}
            >
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-500 text-zinc-800 bg-amber-100 border-2 focus:border-amber-400 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshot={setScreenshot}
                    />
                    <button
                        type="submit"
                        disabled={comment.length === 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-100 focus:ring-brand-500 transition-colors text-zinc-100 font-bold disabled:opacity-70 disabled:hover:bg-brand-500"
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}