import { useEffect, useState } from 'react';
import { useAuth } from '../../../lib/firebase-auth';

const ErrorWrap = () => {
  const [isVisible, setVisibilityState] = useState(false);
  const [message, setMessage] = useState('');

  const { errorMessage } = useAuth();

  const handleMessage = () => {
    setMessage(errorMessage);
    setVisibilityState(true);
  };
  const closeInfoBox = () => {
    setMessage('');
    setVisibilityState(false);
  };

  useEffect(handleMessage, []);

  console.log(errorMessage);

  return (
    <>
      {errorMessage && (
        <div className="flex justify-between items-center py-2 px-4 mb-3 w-full bg-bcg-primary rounded-[10px]">
          <p className="text-sm">{errorMessage}</p>
          <button onClick={closeInfoBox}>X</button>
        </div>
      )}
    </>
  );
};

export default ErrorWrap;
