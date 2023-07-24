import PropTypes from "prop-types"
import Button from "../Button"
import ItemsContext from "../../contexts/ItemsContext"
import { CATEGORIES } from "../../entities/stockItem"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import styles from "./styles.module.scss"

ItemForm.propTypes = {
  itemToUpdate: PropTypes.object
}

function ItemForm({ itemToUpdate }) {

  const defaultItem = {
    name: "",
    amount: 0,
    price: 0,
    category: "",
    description: ""
  }

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
  const { addItem, updateItem } = useContext(ItemsContext)
  const navigate = useNavigate()

  const handleChange = (ev) => {
    setItem(curr => ({ ...curr, [ev.target.name]: ev.target.value }))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    try {
      if (itemToUpdate) {
        updateItem(itemToUpdate.id, item)
        navigate(`/items/${itemToUpdate.id}`)
      } else {
        addItem(item)
        navigate("/items")
      }
    } catch (error) {
      alert(`ERROR: ${error.message}`)
      console.log(error)
    }
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div>
        <div className={styles.row1}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={item.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="amount">Quantidade</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={item.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              name="price"
              id="price"
              value={item.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              value={item.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecione uma categoria...</option>
              {CATEGORIES.map(category => {
                return <option value={category}>{category}</option>
              })}
            </select>
          </div>
        </div>
        <div className={styles.row2}>
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={item.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <Button type={"submit"} role="save">Salvar</Button>
      </div>
    </form>
  )
}
export default ItemForm