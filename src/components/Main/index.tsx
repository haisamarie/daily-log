import { ReactNode } from 'react';
import styles from './styles.module.css';

type MainProps = {
  children: ReactNode;
};
const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>;
};
export default Main;
