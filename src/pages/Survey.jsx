import { useParams } from "react-router"

export default function Survey() {
    const { questionNumber } = useParams()
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
        </div>
    )
}