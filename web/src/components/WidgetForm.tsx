import {CloseButton} from "./CloseButton";


const feedbackTypes = {
    BUG: {
        title: "Problema"
    },
    IDEA: {
        title: "Ideia"
    },
    OTHER: {
        title: "Outro"
    }
}

export function WidgetForm() {

    return (
        <div className="bg-amber-100 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100w-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>

            <div className="flex py-8 gap-2 w-full">

            </div>

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-1" href="https://github.com/Zanotelli">Zan zan</a>
            </footer>
        </div>
    )
}