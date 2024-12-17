import { useState, useEffect } from 'react';


import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

export default function App() {

  const [feedback, setFeedback] = useState(() => {
    const savedFeed = window.localStorage.getItem("saved-feedback");
    if (savedFeed !== null) {
      return ((JSON.parse(savedFeed)).feedback);
    }

    return ({
      good: 0,
      bad: 0,
      neutral: 0
    });
  });


    useEffect(() => {
      window.localStorage.setItem("saved-feedback", JSON.stringify({ feedback }));
    }, [feedback]);


  const updateFeedback = feedbackType => {
    // Тут використовуй сеттер, щоб оновити стан
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
      case 'reset':
        setFeedback({
          good: 0,
          bad: 0,
          neutral: 0
		  });
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
        feedback = {feedback}
      />
    </main>
  );
}
