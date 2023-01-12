import { useEffect, useState } from "react";
import { contributors, shuffleList } from "../../src/utils/contributors";

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
