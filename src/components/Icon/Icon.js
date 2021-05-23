// import LegendItem from '../LegendItem/LegendItem'

const icons = [
  {
    name: 'show',
    content: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.4261 2.01422L2.5 13.9403L1.08579 12.5261L2.74228 10.8696C1.60654 9.90038 0.664123 8.70981 0 7.52612C1.53263 4.79445 4.54737 2.02612 8 2.02612C9.02535 2.02612 10.0108 2.26908 10.9298 2.68208L13.0119 0.600006L14.4261 2.01422ZM9.55757 4.05434C9.08227 3.83854 8.55492 3.71843 8 3.71843C5.90956 3.71843 4.21053 5.42292 4.21053 7.52612C4.21053 8.07752 4.32731 8.60152 4.53731 9.07459L5.90247 7.70944C5.89735 7.64903 5.89474 7.58789 5.89474 7.52612C5.89474 6.35547 6.83245 5.41073 8 5.41073C8.06493 5.41073 8.12914 5.41365 8.19253 5.41937L9.55757 4.05434Z" fill="#393F44"/><path d="M16 7.52612C15.4856 6.60926 14.8052 5.68827 13.9972 4.86921L11.766 7.10041C11.7815 7.24017 11.7895 7.38221 11.7895 7.52612C11.7895 9.62932 10.0904 11.3338 8 11.3338C7.8506 11.3338 7.7032 11.3251 7.55827 11.3082L6.11317 12.7533C6.72218 12.929 7.35341 13.0261 8 13.0261C11.4611 13.0261 14.4674 10.2578 16 7.52612Z" fill="#393F44"/></svg>,
  },
  {
    name: 'hide',
    content: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.89474 7.5C5.89474 8.67065 6.83245 9.61538 8 9.61538C9.16755 9.61538 10.1053 8.67065 10.1053 7.5C10.1053 6.32935 9.16755 5.38462 8 5.38462C6.83245 5.38462 5.89474 6.32935 5.89474 7.5ZM16 7.5C14.4674 4.76833 11.4611 2 8 2C4.54737 2 1.53263 4.76833 0 7.5C1.53263 10.2317 4.54737 13 8 13C11.4611 13 14.4674 10.2317 16 7.5ZM8 3.69231C10.0904 3.69231 11.7895 5.3968 11.7895 7.5C11.7895 9.6032 10.0904 11.3077 8 11.3077C5.90956 11.3077 4.21053 9.6032 4.21053 7.5C4.21053 5.3968 5.90956 3.69231 8 3.69231Z" fill="#393F44"/></svg>,
  },
  {
    name: 'arrow-down',
    content: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.23715 9.19583L13 4L14.4743 5.35145L8.23715 12.1556L2 5.35145L3.47431 4L8.23715 9.19583Z" fill="#393F44"/></svg>,
  },
  {
    name: 'info',
    content: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM6 7H9V11H10V12H6V11H7V8H6V7ZM9 6V4H7V6H9Z" fill="#393F44"/></svg>,
  },
]

const renderIcon = (iconName) => {
  const thisIcon = icons.find((icon) => icon.name === iconName)
  
  if (!thisIcon) return null

  return (
    thisIcon.content
  )
}

function Icon(props) {
  const transform = props.transform || ''

  return (
    <div className={`Icon flex w-4 h-4 flex items-center justify-center transition-all transform ${transform && transform}`}>
      {renderIcon(props.icon)}
    </div>
  )
}

export default Icon