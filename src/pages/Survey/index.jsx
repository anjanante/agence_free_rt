import { useParams } from "react-router"
import { Link } from "react-router-dom"

export default function Index() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber) ;
    const prevQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestion = questionNumberInt + 1;
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <Link to={`/survey/${prevQuestion}`}>Previous {prevQuestion}</Link>
            <h2>Question {questionNumber}</h2>
            { 
                questionNumberInt < 10 ? 
                (
                    <Link to={`/survey/${nextQuestion}`}>Next {nextQuestion}</Link>
                ) : (
                    <Link to="/results">Results</Link>
                )
            }
        </div>
    )
}