import contributors from "../utils/contributors";

const shuffleList = (contributors: string[]) => {
  const shuffledList: string[] = contributors;  
  
  shuffledList.forEach((element: string, index: number) => {
    const random = Math.floor(Math.random() * (index + 1));
    [shuffledList[index], shuffledList[random]] = [shuffledList[random], shuffledList[index]];
  })
  return shuffledList;
}

const ContributorsList = () => (
  <p>Quem esteve envolvido no projecto: {
    shuffleList(contributors).join(", ")
  }
  </p>
)

export default ContributorsList;
