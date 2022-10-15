import React from "react";
import { Party } from "./parties";
import RoundAvatar from "./round-avatar";

interface AvatarListProp {
  theme: string
  parties: Party[]
}

const AvatarList = (props: AvatarListProp) => {
  const {theme, parties } = props;

  return (
    <div className={`avatar-list-container avatar-list-container avatar-list-container--${theme}`}>
      {
        parties.map((party: Party) => (
          <RoundAvatar key={party.acronym} {...party} />
        ))
      }
    </div >
  )
}

export default AvatarList;
