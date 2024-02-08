import Image from "next/image";
import header_logo from "../../../public/horizontal_logo.svg";
import infographic_image from "../../../public/infographic.svg";
// import rows_people_image from "../../public/rows-people.svg";
import footer_logo from "../../../public/vertical_logo.jpg";
import voting_image from '../../../public/voting.svg';

import ADNLogo from '../../../public/party-logos/adn_logo.png';
import AliancaLogo from '../../../public/party-logos/Alianca.png';
import AliancaDemocraticaLogo from '../../../public/party-logos/alianca_democratica.png';
import BlocoEsquerdaLogo from '../../../public/party-logos/blocodeesquerda.jpg';
import CDSLogo from '../../../public/party-logos/CDS.png';
import CDULogo from '../../../public/party-logos/cdu.jpg';
import ChegaLogo from '../../../public/party-logos/chega.png';
import ErgueTeLogo from '../../../public/party-logos/ergue-te_logo.png';
import IniciativaLiberalLogo from '../../../public/party-logos/Iniciativa_Liberal_logo.gif';
import JPPLogo from '../../../public/party-logos/jpp_logo.png';
import LivreLogo from '../../../public/party-logos/livre-logo.png';
import MadeiraPrimeiroLogo from '../../../public/party-logos/madeira_primeiro.png';
import MASLogo from '../../../public/party-logos/mas-logo.jpg';
import NosCidadaosLogo from '../../../public/party-logos/Nos_Cidadaos_logo.jpg';
import PPMLogo from '../../../public/party-logos/Partido_Popular_Monarquico_logo.png';
import PTLogo from '../../../public/party-logos/partido_terra_logo.jpg';
import PTPLogo from '../../../public/party-logos/Partido_Trabalhista_Portugues_logo.jpg';
import PCTPMRPPLogo from '../../../public/party-logos/PCTPMRPP_LOGO.png';
import PANLogo from '../../../public/party-logos/Pessoas-Animais-Natureza_logo.png';
import PSLogo from '../../../public/party-logos/PS_logo.png';
import PSDLogo from '../../../public/party-logos/psd-logo.jpg';
import RIRLogo from '../../../public/party-logos/RIR_logo.jpg';
import VoltLogo from '../../../public/party-logos/volt.png';

export const PPTLogo = () =>
  <Image
    src={header_logo.src}
    width="200"
    height="41"
    alt="PPT Header Logo"
    className="header_logo"
  />

export const FooterLogo = () =>
  <Image
    src={footer_logo.src}
    width={240}
    height={100}
    alt="PPT Footer Logo"
    className="footer_logo"
  />

export const VotingImage = () =>
  <Image
    src={voting_image.src}
    width={150}
    height={150}
    alt="voting"
  />

export const InfographicImage = () =>
  <Image
    src={infographic_image.src}
    width={440}
    height={186}
    alt="infographic"
  />

// export const AboutUsHeaderImage = () =>
//   <Image
//     src={rows_people_image.src}
//     className="about-us__header-img"
//     layout="responsive"
//     width={1440}
//     height={351}
//     alt="people"
//   />

export const renderPartyLogo = (fileName: string): string => {
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
