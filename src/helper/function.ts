const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];

  for (let i = 0; i < newArray.length; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }
  
  return newArray;
};

export { shuffleArray };
