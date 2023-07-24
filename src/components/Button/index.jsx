import PropTypes from 'prop-types'
import style from './styles.module.scss'

Button.proptypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  role: PropTypes.oneOf([
    "view",
    "save",
    "update",
    "delete"
  ]),
  type: PropTypes.string
}

function Button({ onClick, children, role = "view", type }) {
  return (
    <button
      className={`${style.wrapper} ${style[role]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
export default Button