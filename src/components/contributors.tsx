import { useEffect, useState } from "react";
import { shuffleList, contributors } from "../utils/contributors";

const ContributorsList = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <p>Quem esteve envolvido no projecto: {shuffleList(contributors).join(", ")}</p>
  )
}

export default ContributorsList;
