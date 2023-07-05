import { LogoIcon } from "../icons/logo-icon";
import styles from './header.module.css';

export function Header() {
  return(
    <header className={styles.header} >
      <LogoIcon/>
    </header>
  )
}