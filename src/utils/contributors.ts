import { CONTRIBUTORS } from "./constants";

export const shuffleList = () => {
  const shuffledList: string[] = CONTRIBUTORS;

  shuffledList.forEach((element: string, index: number) => {
    const random = Math.floor(Math.random() * (index + 1));
    [shuffledList[index], shuffledList[random]] = [
      shuffledList[random],
      shuffledList[index],
    ];
  });
  return shuffledList;
};
