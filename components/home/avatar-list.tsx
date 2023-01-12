import { useEffect, useState } from "react";
import { HomeParty } from "../../src/dtos/party-dto";
import RoundAvatar from "./round-avatar";

interface AvatarListProp {
  theme: string;
  parties: HomeParty[];
}

const AvatarList = ({ theme, parties }: AvatarListProp) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div
      className={`avatar-list-container avatar-list-container avatar-list-container--${theme}`}
    >
      {parties.map((party) => (
        <RoundAvatar key={party.acronym} {...party} />
      ))}
    </div>
  );
};

export default AvatarList;
