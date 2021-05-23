function LegendBasic(props) {
  const renderBasic = () => {
    return props.items.map((item, index) => {
      return (
        <div key={index} className={`LegendBasic__item flex flex-auto items-center`}>
          <div
            className={`LegendBasic__gradient flex-none w-3 h-3 mr-1.5 rounded-full`}
            style={{
              background: item.color,
            }}
          >
          </div>
          {item.name &&
            <div className={`LegendBasic__text text-xs py-0.5 text-gray-550`}>
              {item.name}
            </div>
          }
        </div>
      )
    })
  }

  return (
    <div className="LegendBasic flex-col ml-5 px-3 pb-3">
      {renderBasic()}
    </div>
  )
}

export default LegendBasic
