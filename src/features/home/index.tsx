import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Profile from '@/components/Profile';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { getAllPosts } from '@/utils/data/post';

const Home = () => {
  const posts = getAllPosts(['slug', 'title', 'date']);
  return (
    <>
      <Hero />
      <Main>
        <Card items={posts} />
        <Button type="button">もっと見る</Button>
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
