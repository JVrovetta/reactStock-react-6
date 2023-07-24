import PropTypes from "prop-types"
import Button from "../../../components/Button"
import { useNavigate } from "react-router-dom"

RecentTR.propTypes = {
  item: PropTypes.object.isRequired
}

function RecentTR({ item }) {
  const navigate = useNavigate()

  return (
    <tr>
      <td>{item.name}</td>
      <td><Button onClick={() => navigate(`/items/${item.id}`)}>Ver</Button></td>
    </tr>
  )
}
export default RecentTR