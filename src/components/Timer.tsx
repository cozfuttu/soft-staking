import React, { Dispatch, SetStateAction } from 'react'
import { useState, useEffect } from 'react';

const MAX_NFT_AMOUNT = 4

const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds((oldCount) => {
      return oldCount + 1
    }), 1000);

    return () => clearInterval(id)
  }, []);
}

export default useTimer;