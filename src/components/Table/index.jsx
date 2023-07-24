import PropTypes from 'prop-types';
import styles from "./styles.module.scss"

Table.propTypes = {
  children: PropTypes.node.isRequired,
  th: PropTypes.array.isRequired
}

function Table({ children, th }) {
  return (
    <table className={styles.wrapper}>
      <thead>
        <tr>
          {th.map((th, index) => <th key={index}>{th}</th>)}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}
export default Table