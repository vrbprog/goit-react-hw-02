

export default function Feedback({feed}) {

    return (
        <div>
            {(feed.good + feed.bad + feed.neutral) === 0 ?
                (<p>Not yet</p>) :
                (<div>
                    <p>Good: {feed.good}</p>
                    <p>Bad: {feed.bad}</p>
                    <p>Neutral: {feed.neutral}</p>
                </div>)
            }
        </div>
    )
}