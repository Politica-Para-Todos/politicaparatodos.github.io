import Image from "next/image";
import footer_logo from "../../public/vertical_logo.jpg";
import header_logo from "../../public/horizontal_logo.svg";

export const HeaderLogo = () =>
  <Image
    src={`/${header_logo.src}`}
    width="200"
    height="41"
    alt="Header Logo"
    className="header_logo"
  />

export const FooterLogo = () =>
  <Image
    src={`/${footer_logo.src}`}
    width="240px"
    height="100%"
    alt="Footer Logo"
    className="footer_logo"
  />
