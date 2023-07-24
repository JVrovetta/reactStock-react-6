import PropTypes from 'prop-types';
import styles from "./styles.module.scss"

DataDisplay.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}

function DataDisplay({ title, data }) {

  if (!(title)) {
    return (
      <div className={styles.wrapper}>
        <div>{data}</div>
      </div>
    )
  }

  return (
    <div className={`${styles.wrapper} ${styles.title}`}>
      <h4>{title}</h4>
      <div>{data}</div>
    </div>
  )
}
export default DataDisplay