
export default function Options({feeds}) {

    return (
        <div>
            <button onClick={() => feeds("good")}>Good</button>
            <button onClick={() =>feeds("neutral")}>Neutral</button>
            <button onClick={() =>feeds("bad")}>Bad</button>
            <button onClick={() =>feeds("reset")}>Reset</button>
        </div>
    )
}