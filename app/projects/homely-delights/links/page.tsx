import Links from '../components/Links/Links';
import styles from './links.module.scss';

type Props = {};

export default function SearchResults() {
  return <div className={styles['links-wrapper']}>
    <Links />
  </div>;
}
