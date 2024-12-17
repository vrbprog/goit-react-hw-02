import { useState, useEffect } from 'react';

import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

export default function App() {

  const [feedback, setFeedback] = useState(() => {
    const savedFeed = window.localStorage.getItem("saved-feedback");
    if (savedFeed !== null) {
      return ((JSON.parse(savedFeed)).feedback);
    }

    return ({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

    useEffect(() => {
      window.localStorage.setItem("saved-feedback", JSON.stringify({ feedback }));
    }, [feedback]);

  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setFeedback({
          ...feedback,
          good: feedback.good + 1
		  });
        break;
      case 'bad':
        setFeedback({
          ...feedback,
          bad: feedback.bad + 1
		  });
        break;
      case 'neutral':
        setFeedback({
          ...feedback,
          neutral: feedback.neutral + 1
		  });
        break;
    
      default:
        break;
    }
    
}

const resetFeedback = () => {
    setFeedback({
          good: 0,
          bad: 0,
          neutral: 0
		});
}

  return (
    <main>
      <Description />

      <Options
        feeds = {updateFeedback}
        reset = {resetFeedback}
        total = {totalFeedback}
      />

      { totalFeedback > 0 ? 
      (<Feedback
        feedback = {feedback}
        total = {totalFeedback}
        positive = {positiveFeedback}
      />) : (
        <Notification />
      )}

    </main>
  );
}
