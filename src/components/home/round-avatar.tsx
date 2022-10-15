import React from "react";
import dynamic from "next/dynamic";
import { Party } from "./parties";

const Avatar = dynamic(import('antd/es/avatar'), { ssr: false });

const RoundAvatar = (party: Party) => {
  const logoUrl = `party-logos/${party.logo}`;

  return (
    <a className="avatar-list-item" href={party.website}>
      <div className="avatar-list-item__content">
        <Avatar size={120} src={logoUrl} icon="user" />
        <h3 className="avatar-list-item__content-title">{party.acronym}</h3>
        <h4 className="avatar-list-item__content-subtitle">{party.name}</h4>
      </div>
    </a>
  )
}

export default RoundAvatar;
