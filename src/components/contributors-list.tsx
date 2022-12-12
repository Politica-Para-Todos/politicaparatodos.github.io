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

  return <>{shuffleList(contributors).join(", ")}.</>;
};

export default ContributorsList;
