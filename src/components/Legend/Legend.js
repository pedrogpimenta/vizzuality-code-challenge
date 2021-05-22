import LegendItem from '../LegendItem/LegendItem'

function Legend(props) {
  return (
    // TODO: Replicate exact width?
    <div className="Legend w-full max-w-lg">
      {props.items.map((item) => 
        <LegendItem
          key={item.id}
          content={item}
          onChangeVisibility={props.onChangeVisibility}
          onChangeCollapse={props.onChangeCollapse}
        />
      )}
    </div>
  )
}

export default Legend
