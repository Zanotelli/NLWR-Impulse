import {Camera} from "phosphor-react";
import html2canvas from "html2canvas";
import {useState} from "react";
import {Loading} from "../Loading";

export function ScreenshotButton () {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot() {

        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')


       setIsTakingScreenshot(false)
    }

    return(
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-700 rounded-md border-transparent text-zinc-100 hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-100 focus:ring-brand-500 transition-colors"
        >
            {isTakingScreenshot ?
                <Loading/>
                :
                <Camera className="w-6 h-6 "/>
            }
        </button>
    )
}