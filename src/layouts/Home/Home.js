import gamestackTexture2Large from 'assets/firstpage.jpg';
import gamestackTexture2Placeholder from 'assets/firstpage.jpg';
import gamestackTexture2 from 'assets/firstpage.jpg';
import gamestackTextureLarge from 'assets/launchpage.jpg';
import gamestackTexturePlaceholder from 'assets/launchpage.jpg';
import gamestackTexture from 'assets/launchpage.jpg';
import sliceTextureLarge from 'assets/ecommersfirstpage.jpg';
import sliceTexturePlaceholder from 'assets/ecommersfirstpage.jpg';
import sliceTexture from 'assets/ecommersfirstpage.jpg';
import sprTextureLarge from 'assets/imagehosting.png';
import sprTexturePlaceholder from 'assets/imagehosting.png';
import sprTexture from 'assets/imagehosting.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['AppDeveloper', 'Designer', 'WebDeveloper', 'Programmer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="FullStack + AppDeveloper"
        description="Design portfolio of Yash Gupta — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Image Hosting Site (MERN Stack)"
        description="Design and Developed An Image Hosting Site, A basic CRUD based Web App"
        buttonText="View Project"
        buttonLink="https://github.com/YashGupta018"
        model={{
          type: 'laptop',
          alt: 'Image Hosting Site',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Diceee (Swift iOS)"
        description="It was basically an App to Roll the Dice in Random Order"
        buttonText="View Project"
        buttonLink="https://github.com/YashGupta018/Diceee"
        model={{
          type: 'phone',
          alt: 'Diceee App',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="E-Commerce Website (MERN Stack)"
        description="Design and Developed a E-Commerce Site which is Scalable and Future Proof"
        buttonText="View Project"
        buttonLink="https://github.com/YashGupta018"
        model={{
          type: 'laptop',
          alt: 'E-Commerce Site',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
