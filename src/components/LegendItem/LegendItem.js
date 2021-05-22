import Icon from '../Icon/Icon'
import Button from '../Button/Button'

function LegendItem(props) {
  const {
    id,
    name,
    visibility,
    collapse,
  } = props.content

  const {
    onChangeVisibility,
    onChangeCollapse,
  } = props

  return (
    <div className="LegendItem bg-white">
      <div className="LegendItemHeader flex pt-3.5 px-3 pb-3">
        <div className="LegendItemDrag flex-none">
          a
        </div>
        <div className="LegendItemTitle flex-auto truncate">
          {name}
        </div>
        <div className="LegendItemActions flex-none flex items-center gap-x-2">
          <Button 
            icon={<Icon icon={visibility ? 'hide' : 'show'} />}
            tooltipText={visibility ? 'Hide Layer' : 'Show Layer'}
            onClick={() => onChangeVisibility(id)}
          />
          <Button 
            icon={<Icon icon={'info'} />}
            tooltipText={'Layer Info'}
          />
          <Button 
            icon={<Icon
              icon={'arrow-down'}
              transform={collapse ? 'rotate-180' : ''}
            />}
            tooltipText={collapse ? 'Hide Layer' : 'Show Layer'}
            onClick={() => onChangeCollapse(id)}
          />
        </div>
      </div>
      <div className="LegendItemContent"></div>
    </div>
  )
}

export default LegendItem
