import {CloseButton} from "../CloseButton";

import BugImage from '../../assets/bug.svg'
import BrainImage from '../../assets/brain.svg'
import IdeaImage from '../../assets/idea.svg'
import {useState} from "react";
import {FeedbackTypeStep} from "./Steps/FeedbackTypeStep";
import {FeedbackContentStep} from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: BugImage,
            alt: "imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: IdeaImage,
            alt: "imagem de uma lâmpada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: BrainImage,
            alt: "imagem de um cérebro"
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

/*
    Object.entries(feedbackTypes) =>
        [
            ['BUG', {...}],
            ['IDEA', {...}],
            ['OTHER', {...}]
        ]
 */

export function Index() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)


    function handleRestartFeedback() {
        setFeedbackType(null)
    }

    return (
        <div className="bg-amber-100 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100w-2rem)] md:w-auto">


            { !feedbackType ?
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                :
                <FeedbackContentStep
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            }
            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-1" href="https://github.com/Zanotelli">Zan zan</a>
            </footer>
        </div>
    )
}