import dynamic from "next/dynamic";
import Link from "next/link";
import { HomePageParty } from "../../src/retriever/dtos/party-dto";
import { acronymConversion, Conversion } from "../../src/utils/manipuation";

const Avatar = dynamic(import("antd/es/avatar"), { ssr: false });

interface RoundAvatarProps {
  party: HomePageParty
}

const RoundAvatar = ({ party }: RoundAvatarProps) => {
  const { name, acronym, logoUrl } = party;

  return (
    <Link className="avatar-list-item" href={`/partido/${acronymConversion(acronym, Conversion.TO_URL)}`}>
      <div className="avatar-list-item__content">
        <Avatar size={120} src={logoUrl} icon="user" />
        <h3 className="avatar-list-item__content-title">{acronym}</h3>
        <h4 className="avatar-list-item__content-subtitle">{name}</h4>
      </div>
    </Link>
  )
}

export default RoundAvatar;
