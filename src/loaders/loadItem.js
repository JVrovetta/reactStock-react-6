import StockItem from "../entities/stockItem"

function loadItem({ params }) {
  const items = JSON.parse(localStorage.getItem("react-stock")).map(item => new StockItem(item))
  const item = items.find(i => i.id === +params.itemID)
  return item
}

export default loadItem