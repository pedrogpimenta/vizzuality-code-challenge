import { SortableContainer } from 'react-sortable-hoc'

import LegendItem from '../LegendItem/LegendItem'

const SortableList = SortableContainer(({items, onChangeVisibility, onChangeCollapse, onChangeInfo}) => {
  return (
    <div className="Legend w-full max-w-lg">
      {items.map((item, index) => (
        <LegendItem
          key={`item-${item.id}`}
          index={index}
          item={item}
          content={item}
          onChangeVisibility={onChangeVisibility}
          onChangeCollapse={onChangeCollapse}
          onChangeInfo={onChangeInfo}
        />
      ))}
    </div>
  )
})

function Legend(props) {
  return (
    <SortableList
      axis='y'
      lockAxis='y'
      useDragHandle
      items={props.items}
      onChangeVisibility={props.onChangeVisibility}
      onChangeCollapse={props.onChangeCollapse}
      onChangeInfo={props.onChangeInfo}
      onSortEnd={props.onChangeOrder}
    />
  )
}

export default Legend
