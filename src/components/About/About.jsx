import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Title from '../Title/Title';
import {aboutData} from '../../mock/data.js';
import project from '../../images/project.jpg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { title,img1,img2,img3,title1,title2,title3,desc1,desc2,desc3  } = aboutData;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

 const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const renderSlide = (title, desc, alt, img) => {
     return( 
     <Carousel.Item interval={10000}>
        <img
          className="slideImg"
          style={{width: "70%"}}
          src={img || project}
          alt={alt}
        />
        <Col>
          <h3 class = "slide-title">{title}</h3>
          <p class = "slide-desc">{desc}</p>
        </Col>
      </Carousel.Item>
     )
  }

  

  return (
    <section id="about">
      <Container>
        <Title title="Our Story" />
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {renderSlide(title1, desc1, "alt-first", null)}
          {renderSlide(title2, desc2, "alt-second", null)}
          {renderSlide(title1, desc2, "alt-third", null)}
        </Carousel>
        {/* <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default About;
