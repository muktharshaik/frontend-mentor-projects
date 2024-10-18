import styles from './NavBar.module.scss';

/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  return (
    <header className={styles['navContainer']}>
      <nav className={styles['wraper']}>
        <h1>Homely Delights!</h1>
      </nav>
    </header>
  );
}

export default NavBar;
