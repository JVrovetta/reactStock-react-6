import { useState } from "react";
import StockItem from "../entities/stockItem";
import DateTime from "../entities/DateTime";

function useItem() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("react-stock")
    if (storedItems) {
      return JSON.parse(storedItems).map(item => new StockItem(item))
    }
    return []
  })

  const addItem = (item) => {
    const idGenerator = () => {
      const alreadyUsed = items.map(item => item.id)
      let newId
      do {
        newId = Math.floor(Math.random() * 1000000)
      } while (alreadyUsed.includes(newId));
      return newId
    }

    const newItem = new StockItem({ id: idGenerator(), ...item })

    setItems(curr => {
      const updatedItems = [...curr, newItem]
      localStorage.setItem("react-stock", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const updateItem = (id, item) => {
    setItems(curr => {
      const toUpdateIndex = curr.findIndex(item => item.id === id)
      const updatedItems = [...curr]
      Object.assign(curr[toUpdateIndex], new StockItem(item), { updatedAt: new DateTime() })
      localStorage.setItem("react-stock", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const removeItem = (id) => {
    if (confirm(`Confirmar exclusão do item ${id} ?`)) {
      setItems(curr => {
        const updatedItems = curr.filter(item => item.id !== id)
        localStorage.setItem("react-stock", JSON.stringify(updatedItems))
        return updatedItems
      })
    }
  }

  return { items, addItem, updateItem, removeItem }
}

export default useItem