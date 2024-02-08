import { Avatar } from "antd";
import Link from "next/link";
import { acronymConversion, Conversion } from "../../utils/manipuation";
import { renderPartyLogo } from "../global/logos";
import { Party } from "./PartiesGrid";

interface PartyRoundAvatar {
  party: Party
}

const PartyRoundAvatar = ({ party }: PartyRoundAvatar) => {
  const { name, acronym, logoFileName } = party;

  return (
    <Link className="avatar-list-item" href={`/legislativas/partido/${acronymConversion(acronym, Conversion.TO_URL)}`}>
      <div className="avatar-list-item__content">
        <Avatar size={120} src={renderPartyLogo(logoFileName)} icon="user" />
        <h3 className="avatar-list-item__content-title">{acronym}</h3>
        <h4 className="avatar-list-item__content-subtitle">{name}</h4>
      </div>
    </Link>
  )
}

export default PartyRoundAvatar;
