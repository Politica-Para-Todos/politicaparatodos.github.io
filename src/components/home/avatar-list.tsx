import Link from "next/link";
import React from "react";
import { Party } from "../../dtos/party-dto";
import { HomePageParty } from "./parties";
import RoundAvatar from "./round-avatar";

interface AvatarListProp {
  theme: string
  parties: HomePageParty[]
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
