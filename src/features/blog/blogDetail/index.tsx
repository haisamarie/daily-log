import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Button from '@/components/Button';

const BlogDetail = () => {
  return (
    <>
      <Hero title="blog title" imageUrl="/images/pc.jpg" />
      <Main>
        <Button type="button">もっと見る</Button>
      </Main>
    </>
  );
};
export default BlogDetail;
