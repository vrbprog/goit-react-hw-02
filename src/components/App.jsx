import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";


export default function App() {

  const feedback = {
    good: 1,
    neutral: 0,
    bad: 0
  }
  

  return (
    <main>
      <Description />

      <Options />

      <Feedback 
        feed = {feedback}
      />
    </main>
  );
}
