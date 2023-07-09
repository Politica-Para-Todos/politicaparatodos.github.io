import dynamic from "next/dynamic";
import ADNLogo from '../../public/party-logos/adn_logo.png';
import AliancaLogo from '../../public/party-logos/Alianca.png';
import AliancaDemocraticaLogo from '../../public/party-logos/alianca_democratica.png';
import BlocoEsquerdaLogo from '../../public/party-logos/blocodeesquerda.jpg';
import CDSLogo from '../../public/party-logos/CDS.png';
import CDULogo from '../../public/party-logos/cdu.jpg';
import ChegaLogo from '../../public/party-logos/chega.png';
import ErgueTeLogo from '../../public/party-logos/ergue-te_logo.png';
import IniciativaLiberalLogo from '../../public/party-logos/Iniciativa_Liberal_logo.gif';
import JPPLogo from '../../public/party-logos/jpp_logo.png';
import LivreLogo from '../../public/party-logos/livre-logo.png';
import MadeiraPrimeiroLogo from '../../public/party-logos/madeira_primeiro.png';
import MASLogo from '../../public/party-logos/mas-logo.jpg';
import NosCidadaosLogo from '../../public/party-logos/Nos_Cidadaos_logo.jpg';
import PPMLogo from '../../public/party-logos/Partido_Popular_Monarquico_logo.png';
import PTLogo from '../../public/party-logos/partido_terra_logo.jpg';
import PTPLogo from '../../public/party-logos/Partido_Trabalhista_Portugues_logo.jpg';
import PCTPMRPPLogo from '../../public/party-logos/PCTPMRPP_LOGO.png';
import PANLogo from '../../public/party-logos/Pessoas-Animais-Natureza_logo.png';
import PSLogo from '../../public/party-logos/PS_logo.png';
import PSDLogo from '../../public/party-logos/psd-logo.jpg';
import RIRLogo from '../../public/party-logos/RIR_logo.jpg';
import VoltLogo from '../../public/party-logos/volt.png';
import { HomePageParty } from "../../src/retriever/dtos/party-dto";
import { acronymConversion, Conversion } from "../../src/utils/manipuation";

const Avatar = dynamic(import("antd/es/avatar"), { ssr: false });

interface RoundAvatarProps {
  party: HomePageParty
}

const RoundAvatar = ({ party }: RoundAvatarProps) => {
  const { name, acronym, logoFileName } = party;

  return (
    <a
      className="avatar-list-item"
      href={`/partido/${acronymConversion(acronym, Conversion.TO_URL)}`}
    >
      <div className="avatar-list-item__content">
        <Avatar size={120} src={renderPartyLogo(logoFileName)} icon="user" />
        <h3 className="avatar-list-item__content-title">{acronym}</h3>
        <h4 className="avatar-list-item__content-subtitle">{name}</h4>
      </div>
    </a>
  )
}

const renderPartyLogo = (fileName: string): string => {
  switch (fileName) {
    case 'adn_logo.png':
      return ADNLogo.src;
    case 'alianca_democratica.png':
      return AliancaDemocraticaLogo.src;
    case 'Alianca.png':
      return AliancaLogo.src;
    case 'blocodeesquerda.jpg':
      return BlocoEsquerdaLogo.src;
    case 'CDS.png':
      return CDSLogo.src;
    case 'cdu.jpg':
      return CDULogo.src;
    case 'chega.png':
      return ChegaLogo.src;
    case 'ergue-te_logo.png':
      return ErgueTeLogo.src;
    case 'Iniciativa_Liberal_logo.gif':
      return IniciativaLiberalLogo.src;
    case 'jpp_logo.png':
      return JPPLogo.src;
    case 'livre-logo.png':
      return LivreLogo.src;
    case 'madeira_primeiro.png':
      return MadeiraPrimeiroLogo.src;
    case 'mas-logo.jpg':
      return MASLogo.src;
    case 'Nos_Cidadaos_logo.jpg':
      return NosCidadaosLogo.src;
    case 'Partido_Popular_Monarquico_logo.png':
      return PPMLogo.src;
    case 'partido_terra_logo.jpg':
      return PTLogo.src;
    case 'Partido_Trabalhista_Portugues_logo.jpg':
      return PTPLogo.src;
    case 'PCTPMRPP_LOGO.png':
      return PCTPMRPPLogo.src;
    case 'Pessoas-Animais-Natureza_logo.png':
      return PANLogo.src;
    case 'PS_logo.png':
      return PSLogo.src;
    case 'psd-logo.jpg':
      return PSDLogo.src;
    case 'RIR_logo.jpg':
      return RIRLogo.src;
    case 'volt.png':
      return VoltLogo.src;
    default:
      throw Error(`${fileName} does not exist.`);
  }
}
export default RoundAvatar;
