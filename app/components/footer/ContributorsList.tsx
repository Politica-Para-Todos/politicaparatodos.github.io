import { shuffleList } from "../../utils/contributors";

const ContributorsList = () =>
  // const [hasMounted, setHasMounted] = useState(false);

  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);

  // if (!hasMounted) {
  //   return null;
  // }
  <>
    {shuffleList().join(", ")}.
  </>

export default ContributorsList;
