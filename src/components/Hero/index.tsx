import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <h1>鞠の記録</h1>
      <Image src="/images/hero.png" alt="" width={1400} height={520} />
    </div>
  );
};
export default Hero;
