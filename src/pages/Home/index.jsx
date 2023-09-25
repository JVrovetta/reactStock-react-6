import DataDisplay from "../../components/DataDisplay"
import Table from "../../components/Table"
import RecentTR from "./RecentTR"
import RunningOutTR from "./RunningOutTR"
import ItemsContext from "../../contexts/ItemsContext"
import { useContext } from "react"
import styles from "./styles.module.scss"

function Home() {
  const { items } = useContext(ItemsContext)
  let inventory = 0
  const recent = []
  const runningOut = []

  items.forEach(item => {
    inventory += item.amount
    const dateDiference = (Date.now() - item.createdAt.dateValue) / 86400000
    dateDiference <= 5 && recent.push(item)
    item.amount < 10 && runningOut.push(item)
  });

  return (
    <section className={styles.wrapper}>
      <h1>Dashboard</h1>
      <div className={styles.row1}>
        <DataDisplay title={"Diversidade de itens"} data={items.length} />
        <DataDisplay title={"Inventário total"} data={inventory} />
        <DataDisplay title={"Itens recentes"} data={recent.length} />
        <DataDisplay title={"Itens acabando"} data={runningOut.length} />
      </div>
      <div className={styles.row2}>
        <div className={styles.tab1}>
          <Table th={["Itens Recentes", "Ações"]}>
            {recent.map(item => <RecentTR key={item.id} item={item} />)}
          </Table>
        </div>
        <div className={styles.tab2}>
          <Table th={["Itens Acabando", "Qtd.", "Ações"]}>
            {runningOut.map(item => <RunningOutTR key={item.id} item={item} />)}
          </Table>
        </div>
      </div>
    </section >
  )
}
export default Home