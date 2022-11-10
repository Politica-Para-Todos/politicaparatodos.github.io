import React from "react";
import { HomeParty } from "../../dtos/party-dto";
import RoundAvatar from "./round-avatar";

interface AvatarListProp {
  theme: string
  parties: HomeParty[]
}

const AvatarList = (props: AvatarListProp) => {
  const { theme, parties } = props;

  return (
    <div className={`avatar-list-container avatar-list-container avatar-list-container--${theme}`}>
      {
        parties.map(party => (
          <RoundAvatar key={party.acronym} {...party} />
        ))
      }
    </div >
  )
}

export default AvatarList;
