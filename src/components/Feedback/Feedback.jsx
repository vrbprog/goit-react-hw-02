

export default function Feedback({feedback}) {
    const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
    return (
        <div>
            {(totalFeedback) === 0 ?
                (<p>Not yet</p>) :
                (<div>
                    <p>Good: {feedback.good}</p>
                    <p>Bad: {feedback.bad}</p>
                    <p>Neutral: {feedback.neutral}</p>
                    <p>Total: {totalFeedback}</p>
                    <p>Positive: { Math.round((feedback.good / totalFeedback) * 100)}%</p>
                </div>)
            }
        </div>
    )
}