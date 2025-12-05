import Main from '@/components/Main';
import Card from '@/components/Card';
import { getPostData } from '@/utils/data/post';
import TopMvPng from '@/assets/images/hero.png';

const Home = async () => {
  const { posts } = getPostData();
  console.log('posts:', posts);
  console.log(TopMvPng);
  return (
    <>
      <Main>
        <Card items={posts} />
      </Main>
    </>
  );
};
export default Home;
