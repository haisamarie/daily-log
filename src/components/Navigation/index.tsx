import styles from './styles.module.css'

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
            <ul className={styles.navigation}>
                {items.map((item, index) => (
                    <li key={index} className={styles.navigationItem}>
                        <a href={item.src}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Navigation;