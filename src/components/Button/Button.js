// import LegendItem from '../LegendItem/LegendItem'
import Icon from '../Icon/Icon'

function Button(props) {
  return (
    <div
      className="Button"
      onClick={props.onClick}
    >
      {props.icon}
    </div>
  )
}

export default Button
