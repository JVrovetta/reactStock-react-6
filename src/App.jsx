import { RouterProvider } from "react-router-dom"
import mainRouter from "./router/mainRouter"
import useItem from "./hooks/useItem"
import ItemsContext from "./contexts/itemsContext"

function App() {
  const items = useItem()

  return (
    <ItemsContext.Provider value={items}>
      <RouterProvider router={mainRouter} />
    </ItemsContext.Provider>
  )
}

export default App
