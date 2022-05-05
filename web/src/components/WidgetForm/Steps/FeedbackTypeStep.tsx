import {FeedbackType, feedbackTypes} from "..";
import {CloseButton} from "../../CloseButton";

interface FeedbackTypeProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep(props: FeedbackTypeProps) {
    return(
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            onClick={() => {
                                props.onFeedbackTypeChanged(key as FeedbackType)
                            }}
                            className="bg-amber-400 rounded-lg py-5 w-24 items-center flex-1 flex flex-col border-4 border-transparent hover:border-amber-600 focus:border-amber-600 focus:outline-none"
                        >
                            <img
                                src={value.image.source}
                                alt={value.image.alt}
                                className="max-h-10"
                            />
                            <span className="font-bold">{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}