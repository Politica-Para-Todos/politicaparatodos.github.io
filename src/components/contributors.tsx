import { shuffleList, contributors } from "../utils/contributors";

const ContributorsList = () => (
  <p>Quem esteve envolvido no projecto: {
    shuffleList(contributors).join(", ")
  }
  </p>
)

export default ContributorsList;
