import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.scss';

/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  return (
    <header className={styles['navContainer']}>
      <nav className={styles['wraper']}>
        <h1>Image Gallery!</h1>
        <SearchBar />
      </nav>
    </header>
  );
}

export default NavBar;
