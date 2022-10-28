import React from "react";
import dynamic from "next/dynamic";
import { HomePageParty } from "./parties";

const Avatar = dynamic(import('antd/es/avatar'), { ssr: false });

const RoundAvatar = (party: HomePageParty) => (
  <a className="avatar-list-item" href={`/partido/${party.acronym.toLowerCase()}`}>
    <div className="avatar-list-item__content">
      <Avatar size={120} src={`/party-logos/${party.logo}`} icon="user" />
      <h3 className="avatar-list-item__content-title">{party.acronym}</h3>
      <h4 className="avatar-list-item__content-subtitle">{party.name}</h4>
    </div>
  </a>
)

export default RoundAvatar;
