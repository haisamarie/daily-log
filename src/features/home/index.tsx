import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Profile from '@/components/Profile';
import styles from './style.module.css';

const Home = () => {
  return (
    <>
      <Hero />
      <Main>ここにコンテンツが表示される</Main>
      <Profile />
    </>
  );
};
export default Home;
