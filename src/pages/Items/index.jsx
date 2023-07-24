import { useContext } from "react"
import Table from "../../components/Table"
import ItemsContext from "../../contexts/itemsContext"
import ItemTR from "./ItemTR"
import styles from "./styles.module.scss"

function Items() {
  const { items } = useContext(ItemsContext)

  return (
    <div className={styles.wrapper}>
      <Table th={["ID", "Nome", "Em Estoque", "Categoria", "Ações"]}>
        {items.map(item => <ItemTR key={item.id} item={item} />)}
      </Table>
    </div>
  )
}
export default Items