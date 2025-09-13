import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Profile from '@/components/Profile';
import Button from '@/components/Button';
import styles from './style.module.css';

const Home = () => {
  return (
    <>
      <Hero />
      <Main>
        <Button type="button">Click Me</Button>
      </Main>
      <Profile
        name="鞠"
        description="Web Designer → Frontend Engineer"
        imageUrl="/images/girl.png"
        sns={[
          { platform: 'Zenn', url: 'https://zenn.dev/mari_tt' },
          { platform: 'GitHub', url: 'https://github.com/haisamarie' },
        ]}
      />
    </>
  );
};
export default Home;
