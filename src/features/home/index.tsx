import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Profile from '@/components/Profile';
import Card from '@/components/Card';
import { getPostData } from '@/utils/data/post';
import TopMvPng from '@/assets/images/hero.png';

const Home = async () => {
  const { posts } = getPostData();
  console.log(TopMvPng);
  return (
    <>
      <Hero
        thumbnail={TopMvPng.src}
        subText="キャッチアップした技術的な内容をアップしていきます。"
      />
      <Main>
        <Card items={posts} />
      </Main>
      <Profile
        name="鞠"
        description="Web Designer → Frontend Engineer"
        sns={[
          { platform: 'Zenn', url: 'https://zenn.dev/mari_tt' },
          { platform: 'GitHub', url: 'https://github.com/haisamarie' },
        ]}
      />
    </>
  );
};
export default Home;
