import Button from "../../components/Button"
import DataDisplay from "../../components/DataDisplay"
import ItemsContext from "../../contexts/ItemsContext"
import { useContext } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import styles from "./styles.module.scss"

function Item() {
  const item = useLoaderData()
  const { removeItem } = useContext(ItemsContext)
  const creation = item.getFCreatedAt()
  const update = item.getFUpdatedAt()

  const navigate = useNavigate()

  return (
    <section className={styles.wrapper}>
      <div className={styles.row1}>
        <h2>{item.name}</h2>
        <div>
          <Button onClick={() => { navigate(`/items/update/${item.id}`) }} role="update">Atualizar</Button>
          <Button onClick={() => {
            removeItem(item.id)
            navigate("/items")
          }} role="delete">Excluir</Button>
        </div>
      </div>
      <div className={styles.row2}>
        <DataDisplay data={`Categoria: ${item.category}`} />
        <DataDisplay data={`Quantidade em estoque: ${item.amount}`} />
        <DataDisplay data={`Preço: R$ ${item.price.toFixed(2)}`} />
      </div>
      <div className={styles.row3}>
        <p>{item.description}</p>
      </div>
      <div className={styles.row4}>
        <p>Cadastrado em: {creation}</p>
        {update && <p>Atualizado em: {update}</p>}
      </div>
    </section>
  )
}
export default Item