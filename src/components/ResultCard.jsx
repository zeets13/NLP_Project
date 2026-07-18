import BotBubble from "./BotBubble";

export default function ResultCard() {

    return (

        <BotBubble>

            <h2 className="text-red-600 font-bold text-xl">

                 Hate Speech Detected

            </h2>

            <div className="mt-3 space-y-2">

                <p>

                    <span className="font-semibold ">

                        Prediction:

                    </span>

                    Hateful

                </p>

                <p>

                    <span className="font-semibold">

                        Confidence:

                    </span>

                    98.2%

                </p>

                <p>

                    <span className="font-semibold">

                        Severity:

                    </span>

                    High

                </p>

                <p>

                    <span className="font-semibold">

                        Categories:

                    </span>

                    Abuse • Threat

                </p>

                <div>

                    <p className="font-semibold">

                        Suggested Alternative

                    </p>

                    <p className="italic text-white font-semibold mt-2">

                        "I strongly disagree with your opinion."

                    </p>

                </div>

            </div>

        </BotBubble>

    );

}