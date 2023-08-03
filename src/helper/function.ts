const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];

  for (let i = 0; i < newArray.length; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }
  
  return newArray;
};

const convertTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const minutesString = String(minutes).padStart(2, '0');
  const secondsString = String(remainingSeconds).padStart(2, '0');
  return `${minutesString}:${secondsString}`;
};

export { shuffleArray, convertTime };
