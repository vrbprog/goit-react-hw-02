
export default function Options() {

    const handleClickGood = () => {
        console.log("Good was clicked!!!");
    }

    const handleClickNeutral = () => {
        console.log("Neutral was clicked!!!");
    }

    const handleClickBad = () => {
        console.log("Bad was clicked!!!");
    }

    return (
        <div>
            <button onClick={handleClickGood}>Good</button>
            <button onClick={handleClickNeutral}>Neutral</button>
            <button onClick={handleClickBad}>Bad</button>
            <button>Reset</button>
        </div>
    )
}