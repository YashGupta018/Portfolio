import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>{`Yash Gupta`}</span>
      <span>
        <br></br>
        <br></br>
      </span>
      <span>{`Contact No : +91 7869731969`}</span>
      <span>
        <br></br>
        <br></br>
      </span>
      <span>{`Email Id : ygupta2001@gmail.com`}</span>
    </Text>
  </footer>
);
