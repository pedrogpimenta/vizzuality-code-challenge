function LegendChoropleth(props) {
  const renderChoropleth = () => {
    return props.items.map((item, index) => {
      return (
        <div className={`LegendChoropleth__item flex flex-col flex-auto text-center`}>
          <div
            className={`LegendChoropleth__gradient flex-none h-2`}
            style={{
              background: item.color,
            }}
          >
          </div>
          {item.name &&
            <div className={`LegendGradient__text py-1.5 text-xs text-gray-550`}>
              {item.name}
            </div>
          }
        </div>
      )
    })
  }

  return (
    <div className="LegendChoropleth flex px-3 pb-3">
      {renderChoropleth()}
    </div>
  )
}

export default LegendChoropleth
