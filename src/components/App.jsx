import { useState } from 'react';


import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";


export default function App() {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedback = {
    good: 1,
    neutral: 0,
    bad: 0,
    setGood(feed) {
      this.good = feed;
    },
    setBad(feed) {
      this.bad = feed;
    },
    setNeutral(feed) {
      this.neutral = feed;
    }
  }

  const updateFeedback = feedbackType => {
    // Тут використовуй сеттер, щоб оновити стан
    switch (feedbackType) {
      case 'good':
        setGood(prev => prev + 1);
        feedback.setGood(good);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        feedback.setBad(bad);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        feedback.setBad(neutral);
        break;
    
      default:
        break;
    }
}

  return (
    <main>
      <Description />

      <Options
        feeds = {updateFeedback}
      />

      <Feedback
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </main>
  );
}
