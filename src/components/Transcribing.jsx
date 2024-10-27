import React, { useState, useEffect } from 'react';
import { transcriptionMessages } from './utils/constants';

export const Transcribing = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const displayMessages = async () => {
      for (const message of transcriptionMessages) {
        setCurrentMessage(message);
        await sleep(2000); // Sleep for 1 second
      }
    };
    displayMessages();
  }, []);

  return (
    <div className="flex items-center gap-10 py-24 justify-center flex-col md:gap-14">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
        Trans<span className="text-blue-600">cribing</span>
      </h1>
      <p className="text-blue-400">{currentMessage}</p>
      <div className="loader w-10 sm:w-14 md:w-20"></div>
    </div>
  );
};