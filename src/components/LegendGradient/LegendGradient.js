// import Icon from '../Icon/Icon'
// import Button from '../Button/Button'

function LegendGradient(props) {
  // const renderGradient = () => {
  //   return props.items.map((item, index) => {
  //     if (index >= props.items.length - 1) return null

  //     return (
  //       <div className={`LegendGradient__item flex flex-col flex-auto text-center first:text-left las:text-right`}>
  //         <div
  //           className={`LegendGradient__gradient flex-none h-2`}
  //           style={{
  //             background: `linear-gradient(90deg, ${item.color} 0%, ${props.items[index + 1].color} 100%)`
  //           }}
  //         >
  //         </div>
  //         {item.name &&
  //           <div className={`LegendGradient__text text-xs py-1.5 text-gray-550 transform`}>
  //             {item.name}
  //           </div>
  //         }
  //       </div>
  //     )
  //   })
  // }

  const renderGradient = () => {
    const length = props.items.length
    const increment = 100 / (length - 1)
    
    let background = 'linear-gradient(90deg'
    for (let i in props.items) {
      background = `${background}, ${props.items[i].color} ${increment * i}%`
    }
    background = background + ')'

    return (
      <div
        className={`LegendGradient__gradient flex-none h-2 w-full`}
        style={{
          background: background,
        }}
      >
      </div>
    )
  }

  const renderText = () => {
    return (
      <div
        className={`LegendGradient__text flex w-full`}
      >
        {props.items.map((item) => {
          return <div className="flex-auto text-center py-1.5 text-xs text-gray-550 first:text-left last:text-right">{item.name}</div>
        })}
      </div>
    )
  }

  return (
    <div className="LegendGradient flex flex-col px-3 pb-3">
      {renderGradient()}
      {renderText()}
    </div>
  )
}

export default LegendGradient
