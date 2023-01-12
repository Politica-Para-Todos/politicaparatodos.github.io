import Image from "next/image";
import footer_logo from "../../public/vertical_logo.jpg";
import header_logo from "../../public/horizontal_logo.svg";
import voting_image from '../../public/voting.svg'
import infographic_image from "../../public/infographic.svg";
import rows_people_image from "../../public/rows-people.svg";

export const HeaderLogo = () =>
  <Image
    src={`/${header_logo.src}`}
    width="200"
    height="41"
    alt="PPT Header Logo"
    className="header_logo"
  />

export const FooterLogo = () =>
  <Image
    src={`/${footer_logo.src}`}
    width="240px"
    height="100%"
    alt="PPT Footer Logo"
    className="footer_logo"
  />

export const VotingImage = () =>
  <Image
    src={`/${voting_image.src}`}
    width={150}
    height={150}
    alt="voting"
  />

export const InfographicImage = () =>
  <Image
    src={`/${infographic_image.src}`}
    width={440}
    height={186}
    alt="infographic"
  />

export const AboutUsHeaderImage = () =>
  <Image
    src={`/${rows_people_image.src}`}
    className="about-us__header-img"
    layout="responsive"
    width={1440}
    height={351}
    alt="people"
  />
