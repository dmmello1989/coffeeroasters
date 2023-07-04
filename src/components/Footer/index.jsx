import { Menu } from "../Menu";

import Logo from "../../assets/shared/desktop/logo-white.svg";
import TwitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import FacebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import * as S from "./styles";

const SOCIALS = [
  {
    icon: FacebookIcon,
    name: "Facebook",
    link: "www.facebook.com/coffeeroasters"
  },
  {
    icon: TwitterIcon,
    name: "Twitter",
    link: "www.twitter.com/coffeeroasters"
  },
  {
    icon: InstagramIcon,
    name: "Instagram",
    link: "www.instagram.com/coffeeroasters"
  },
]

export const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Wrapper>
          <S.Logo src={Logo} alt="Coffeeroasters" />
          <Menu />
        </S.Wrapper>

        <S.Wrapper>
          <S.SocialList>
            {SOCIALS.map(item => (
              <S.SocialItem key={item.name} onClick={() => window.open(item.link)}>
                <S.SocialIcon src={item.icon} alt={item.name} />
              </S.SocialItem>
            ))}
          </S.SocialList>
        </S.Wrapper>
      </S.Container>
    </S.Footer>
  );
};