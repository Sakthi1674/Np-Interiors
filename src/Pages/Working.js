import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {Link} from 'react-router-dom'
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const CheckmarkIcon = styled.div`
  width: 150px; /* Adjust the width */
  height: 150px; /* Adjust the height */
  border-radius: 50%;
  background-color: #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 100px; /* Adjust the font-size */
  animation: ${scaleIn} 0.5s ease-in-out;
`;


const SuccessMessage = styled.h2`
  margin-top: 20px;
  font-size: 24px;
`;

const Working = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Simulate a delayed appearance of the success page after mounting
    const timeoutId = setTimeout(() => {
      setShowSuccess(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <SuccessContainer>
      {showSuccess && (
        <>
          <CheckmarkIcon>✔</CheckmarkIcon>
          <SuccessMessage>Success! Your Account Created with us.</SuccessMessage>
          <Link to='/Home'>Click here to proceed</Link>
        </>
      )}
    </SuccessContainer>
  );
};

export default Working;
