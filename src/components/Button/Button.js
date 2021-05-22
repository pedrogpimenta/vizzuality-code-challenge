import ReactTooltip from 'react-tooltip'

function Button(props) {
  return (
    <>
      <div
        className="Button"
        onClick={props.onClick}
        data-tip={props.dataTip}
        data-for={props.id}
      >
        {props.icon}
      </div>
      {props.dataTip &&
        <ReactTooltip
          id={props.id}
          effect="solid"
          className="Button__Tooltip"
        />
      }
    </>
  )
}

export default Button
