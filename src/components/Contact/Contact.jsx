import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import {footerData} from '../../mock/data.js';
import { SiDiscord ,SiTwitter,SiTelegram } from "react-icons/si";


const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="social-links">
          {footerData &&
            footerData.networks.map((network) => {
              const { id, name, url } = network;
              let icon= null;

              switch (name) {
                case "Discord":
                  icon = <SiDiscord style={{color: "white"}} />
                  break;

                case "Twitter":
                  icon = <SiTwitter style={{color: "white"}} />
                  break;

                case "Telegram":
                  icon = <SiTelegram style={{color: "white"}} />
                  break;
              
                default:
                  icon = null
                  break;
              }

              return (
                <a
                  key={id}
                  href={url || ''}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                
                  {icon}
                  {/* <i className={`fa fa-${name || 'refresh'} fa-inverse`} /> */}
                </a>
              );
            })}
        </div>
        <p className="footer__text" style={{color:"white"}}>
          © {new Date().getFullYear()} - MegaWorld
        </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
