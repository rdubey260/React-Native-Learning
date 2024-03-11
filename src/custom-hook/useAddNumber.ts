import { useState } from 'react';

const useAddnumber = () => {
  const [sum, setSum] = useState(0);

  const add = () => {
    setSum(sum + 1);
  };

  return [sum, add];
};

export default useAddnumber;
