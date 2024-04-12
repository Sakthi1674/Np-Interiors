import React, { useState } from 'react';
import './YourComponent.css';

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState(null);
  const [message, setMessage] = useState('');

  const handleFeedbackChange = (value) => {
    setFeedback(value);

    // Add your logic for displaying a message based on the selected feedback
    const messages = ['Not happy?', 'We will do better!', 'Thanks for your feedback!', 'Glad you liked it!', 'You love it!'];
    setMessage(messages[value]);
  };

  return (
    <div className="Application">
      <h1 className='Cat'>Was this page helpful?</h1>
      <p className='Cat'>Let us know how we did</p>

      <div className="Temp">
        {[0, 1, 2, 3, 4].map((value) => (
          <div className="item" key={value}>
            <label htmlFor={value}>
              <input
                className="radio"
                type="radio"
                name="feedback"
                id={value}
                value={value}
                checked={feedback === value}
                onChange={() => handleFeedbackChange(value)}
              />
              <span role="img" aria-label={`Emoji ${value}`}>
                {['🤬', '🙁', '😶', '😁', '😍'][value]}
              </span>
            </label>
          </div>
        ))}
      </div>

      {feedback !== null && (
        <div className="Card">
          <div className="CardHeader">Feedback Message</div>
          <div className="CardContent">
            <p>{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackComponent;
