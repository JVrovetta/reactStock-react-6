import { Link, useLocation } from "react-router-dom"
import styles from "./styles.module.scss"

function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.wrapper}>
      <h2>React Stock</h2>
      <nav>
        <Link
          to={"/"}
          className={pathname === "/" && styles.active}
        >Início</Link>
        <Link
          to={"/items"}
          className={pathname.includes("/items") && styles.active}
        >Items</Link>
      </nav>
    </header>
  )
}

export default Header