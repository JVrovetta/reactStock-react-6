import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../pages/RootLayout"
import Home from "../pages/Home"
import ItemsLayout from "../pages/ItemsLayout"
import Items from "../pages/Items"
import Item from "../pages/Item"
import CreateItem from "../pages/CreateItem"
import UpdateItem from "../pages/UpdateItem"
import loadItem from "../loaders/loadItem"

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          {
            index: true,
            element: <Items />
          },
          {
            path: "new",
            element: <CreateItem />
          },
          {
            path: "update/:itemID",
            element: <UpdateItem />,
            loader: loadItem
          },
          {
            path: ":itemID",
            element: <Item />,
            loader: loadItem
          }
        ]
      }
    ]
  }
])

export default mainRouter