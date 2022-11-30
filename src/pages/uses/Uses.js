import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Skills & Technologies"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectHeader
          title="Skills & Technologies"
          description="A list of Tools, Apps & Hardware I use on a Daily Basis to Code & Develop My Apps & Websites. I've Experience in various Technologies from Front-End To Back-End, I've Started My Journey from Basic Problem Solving Questions & Designing Basic App Designs to Now as a Full-Stack Developer"
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>DSA Problems & Designing Apps</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://code.visualstudio.com">VS Code</Link> is my
                    primary tool I used for Solving DSA Problems on a Regular Basis. I
                    Started Learning Programming Languages, Started Learning the concepts
                    of Data Structures & Algorithms.
                  </ListItem>
                  <ListItem>
                    At the start, On my Leisure Time, Just Because I Like Designing and It
                    Freshen-up My Mind, I use to Design Android Apps for using{' '}
                    <Link href="https://www.adobe.com/in/products/xd.html">AdobeXD</Link>{' '}
                    & <Link href="https://www.figma.com">Figma</Link>
                  </ListItem>
                  <ListItem>
                    Recently, I Started Developing Apps for iOS using Swift using{' '}
                    <Link href="https://developer.apple.com/xcode/">Xcode</Link> & I've a
                    Basic Knowledge of Android Studio, I've made few Apps in{' '}
                    <Link href="https://developer.android.com/studio?gclid=Cj0KCQiAm5ycBhCXARIsAPldzoVDyXkwxdTI6wledYwAKGbcBsEseKRyHEXlvBZ00FckQ7T-c1vBe6oaAmVrEALw_wcB&gclsrc=aw.ds">
                      Android Studio
                    </Link>
                    . Although Till now I haven't made any App using MVVM Model
                    Architechture.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Skills</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <div
                  style={{
                    display: 'flex',
                    gap: '25px',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: '250px',
                  }}
                >
                  <a href="https://www.w3schools.com/cpp/" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                      alt="C++"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://www.java.com/en/" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/java/java-original.svg"
                      alt="Java"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <img
                      src="https://raw.githubusercontent.com/YashGupta018/GitHub/main/logo-javascript.svg"
                      alt="JavaScript"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://developer.apple.com/swift/" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/YashGupta018/GitHub/main/swift-icon.svg"
                      alt="Swift"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://www.mongodb.com/" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/YashGupta018/GitHub/main/mongodb-icon.svg"
                      alt="MongoDB"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://expressjs.com/" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/YashGupta018/GitHub/main/expressjs-both-icon.svg"
                      alt="ExpressJS"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://reactjs.org/" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/react/react-original.svg"
                      alt="ReactJS"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://nodejs.org/" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/nodejs/nodejs-original.svg"
                      alt="NodeJS"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://developer.android.com" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/YashGupta018/GitHub/main/android-logomark.svg"
                      alt="Android"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a></a>
                  <a href="https://www.python.org" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/YashGupta018/GitHub/main/python-seeklogo.com.svg"
                      alt="Python"
                      width="40"
                      height="40"
                    />
                  </a>
                </div>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>Intel Core i5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>Intel Iris Plus Graphics 645 1536 MB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Memory</TableHeadCell>
                    <TableCell>SK Hynix 8GB DDR3 2133 MHz</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Motherboard</TableHeadCell>
                    <TableCell>Apple Inc (T2 Security Chip)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>2560x1600 Retina (24-Bit Colour)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Logitech MX Keys</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G213 Prodigy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 13″ (2019 Intel)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Sennheiser B405 SE</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Sennheiser B405 SE</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
