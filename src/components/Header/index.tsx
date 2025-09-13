import Navigation from "@/components/Navigation";

const Header = () => {
  return (
    <header>
       <Navigation
        items={[
          { src: "/", label: "Home" },
          { src: "/list", label: "List" },
          { src: "/contact", label: "Contact" },
        ]}
      />
    </header>
  );
};

export default Header;
