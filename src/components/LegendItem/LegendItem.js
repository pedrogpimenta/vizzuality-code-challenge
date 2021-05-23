import { Collapse } from 'react-collapse'
import { SortableElement, SortableHandle } from 'react-sortable-hoc'

import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import LegendGradient from '../LegendGradient/LegendGradient'
import LegendChoropleth from '../LegendChoropleth/LegendChoropleth'
import LegendBasic from '../LegendBasic/LegendBasic'

const DragHandle = SortableHandle(() => (
  <div className="LegendItemDrag flex-none flex items-center mr-1">
    <Button 
      id={'visibility'}
      icon={<Icon icon={'drag'} />}
    />
  </div>
));

const LegendItem = SortableElement((props) => {
  const {
    id,
    name,
    type,
    items,
    visibility,
    collapse,
  } = props.content

  const {
    onChangeVisibility,
    onChangeCollapse,
    onChangeInfo,
  } = props

  const renderContent = (type) => {
    switch(type) {
      case 'gradient':
        return <LegendGradient items={items} />
      case 'choropleth':
        return <LegendChoropleth items={items} />
      case 'basic':
        return <LegendBasic items={items} />
      default:
        return null
    }
  }

  return (
    <div className="LegendItem bg-white border border-black border-opacity-10 border-b-0 last:border-b">
      <div className="LegendItemHeader flex pt-3.5 px-3 pb-3">
        <DragHandle />
        <div className="LegendItemTitle flex-auto block items-center text-sm text-gray-650 font-semibold truncate">
          {name}
        </div>
        <div className="LegendItemActions flex-none flex items-center gap-x-2 ml-1">
          <Button 
            id={'visibility'}
            icon={<Icon icon={visibility ? 'hide' : 'show'} />}
            dataTip={visibility ? 'Hide Layer' : 'Show Layer'}
            onClick={() => onChangeVisibility(id)}
          />
          <Button 
            id={'info'}
            icon={<Icon icon={'info'} />}
            dataTip={'Layer Info'}
            onClick={() => onChangeInfo(id)}
          />
          <Button 
            id={'collapse'}
            icon={<Icon
              icon={'arrow-down'}
              transform={collapse ? 'rotate-180' : ''}
            />}
            dataTip={collapse ? 'Expand' : 'Collapse'}
            onClick={() => onChangeCollapse(id)}
          />
        </div>
      </div>
      <Collapse isOpened={!collapse}>
      <div className={`LegendItemContent`}>
        {renderContent(type)}
      </div>
      </Collapse>
    </div>
  )
})

export default LegendItem
