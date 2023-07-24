import { Link, Outlet, useLocation } from "react-router-dom"
import styles from "./styles.module.scss"

function ItemsLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <h1>Stock Items</h1>
      <nav className={styles.nav}>
        <Link
          to={"/items"}
          className={pathname === "/items" && styles.active}
        >Todos os Items</Link>
        <Link
          to={"/items/new"}
          className={pathname === "/items/new" && styles.active}
        >Novo Item</Link>
      </nav>
      <section className={styles.section}>
        <Outlet />
      </section>
    </>
  )
}
export default ItemsLayout