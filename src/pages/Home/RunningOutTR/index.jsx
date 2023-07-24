import PropTypes from 'prop-types';
import Button from "../../../components/Button"
import { useNavigate } from "react-router-dom"

RunningOutTR.propTypes = {
  item: PropTypes.object.isRequired
}

function RunningOutTR({ item }) {
  const navigate = useNavigate()

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td><Button onClick={() => navigate(`/items/${item.id}`)}>Ver</Button></td>
    </tr>
  )
}
export default RunningOutTR