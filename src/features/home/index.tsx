import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Profile from '@/components/Profile';
import Card from '@/components/Card';
import { getAllPosts } from '@/utils/data/post';

const Home = () => {
  const posts = getAllPosts(['slug', 'title', 'date']);
  console.log(posts);
  return (
    <>
      <Hero description="キャッチアップした技術的な内容をアップしていきます。" />
      <Main>
        <Card items={posts} />
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
