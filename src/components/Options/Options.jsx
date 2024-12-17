
export default function Options({feeds, reset, total}) {

    return (
        <div>
            <button onClick={() => feeds("good")}>Good</button>
            <button onClick={() =>feeds("neutral")}>Neutral</button>
            <button onClick={() =>feeds("bad")}>Bad</button>
            { total > 0 && <button onClick={() =>reset()}>Reset</button> }
        </div>
    )
}