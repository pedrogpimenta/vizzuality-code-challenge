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
            id={'visibility'}
            icon={<Icon icon={visibility ? 'hide' : 'show'} />}
            dataTip={visibility ? 'Hide Layer' : 'Show Layer'}
            onClick={() => onChangeVisibility(id)}
          />
          <Button 
            id={'info'}
            icon={<Icon icon={'info'} />}
            dataTip={'Layer Info'}
          />
          <Button 
            id={'collapse'}
            icon={<Icon
              icon={'arrow-down'}
              transform={collapse ? 'rotate-180' : ''}
            />}
            dataTip={collapse ? 'Collapse' : 'Expand'}
            onClick={() => onChangeCollapse(id)}
          />
        </div>
      </div>
      <div className="LegendItemContent"></div>
    </div>
  )
}

export default LegendItem
