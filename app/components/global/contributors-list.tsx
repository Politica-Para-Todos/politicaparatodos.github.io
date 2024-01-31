import { useEffect, useState } from "react";
import { shuffleList } from "../../src/utils/contributors";

const ContributorsList = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{shuffleList().join(", ")}.</>;
};

export default ContributorsList;
