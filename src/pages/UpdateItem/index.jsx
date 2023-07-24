import { useLoaderData } from "react-router-dom"
import ItemForm from "../../components/ItemForm"
import styles from "./styles.module.scss"

function UpdateItem() {
  const item = useLoaderData()

  return (
    <div className={styles.wrapper}>
      <p>Atualizar Item - {item.name}</p>
      <ItemForm itemToUpdate={item} />
    </ div>
  )
}
export default UpdateItem