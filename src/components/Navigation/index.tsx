
type NavigationItem = {
  src: string;
  label: string;
};


type Navigation = {
   items: NavigationItem[];
}

const Navigation = ({ items }: Navigation) => {
    return (
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.src}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Navigation;