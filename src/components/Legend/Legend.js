import { SortableContainer } from 'react-sortable-hoc'

import LegendItem from '../LegendItem/LegendItem'

const SortableList = SortableContainer(({items, onChangeVisibility, onChangeCollapse}) => {
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
      onSortEnd={props.onChangeOrder}
    />
  )
}

export default Legend
