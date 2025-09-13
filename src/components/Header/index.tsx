import Navigation from '@/components/Navigation';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation
        items={[
          { src: '/', label: 'Home' },
          { src: '/list', label: 'List' },
          { src: '/contact', label: 'Contact' },
        ]}
      />
    </header>
  );
};

export default Header;
