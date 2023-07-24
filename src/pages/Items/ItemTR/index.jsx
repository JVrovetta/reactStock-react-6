import PropTypes from 'prop-types';
import Button from "../../../components/Button"
import ItemsContext from "../../../contexts/itemsContext"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import styles from "./styles.module.scss"

ItemTR.propTypes = {
  item: PropTypes.object.isRequired
}

function ItemTR({ item }) {
  const { removeItem } = useContext(ItemsContext)
  const navigate = useNavigate()

  return (
    <tr className={styles.wrapper}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.amount} unid.</td>
      <td>{item.category}</td>
      <td>
        <Button onClick={() => navigate(`/items/${item.id}`)}>Ver</Button>
        <Button onClick={() => navigate(`/items/update/${item.id}`)} role="update">Atualizar</Button>
        <Button onClick={() => removeItem(item.id)} role="delete">Excluir</Button>
      </td>
    </tr>
  )
}
export default ItemTR