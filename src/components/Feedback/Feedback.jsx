

export default function Feedback({good, bad, neutral}) {
    const totalFeedback = good + bad + neutral;
    return (
        <div>
            {(totalFeedback) === 0 ?
                (<p>Not yet</p>) :
                (<div>
                    <p>Good: {good}</p>
                    <p>Bad: {bad}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Total: {totalFeedback}</p>
                    <p>Positive: { Math.round((good / totalFeedback) * 100)}%</p>
                </div>)
            }
        </div>
    )
}