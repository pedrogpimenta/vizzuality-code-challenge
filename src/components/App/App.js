import React from 'react'
import Legend from '../Legend/Legend'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      dataUrl: 'https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json',
      legendItems: [],
    }

    this.onChangeVisibility = this.onChangeVisibility.bind(this)
    this.onChangeCollapse = this.onChangeCollapse.bind(this)
  }

  onChangeVisibility(itemId) {
    const newLegendItems = this.state.legendItems.map((item) => {
      if (item.id === itemId) {
        item.visibility = !item.visibility
      }

      return item
    })

    this.setState({
      legendItems: newLegendItems,
    })
  }

  onChangeCollapse(itemId) {
    const newLegendItems = this.state.legendItems.map((item) => {
      if (item.id === itemId) {
        item.collapse = !item.collapse
      }

      return item
    })

    this.setState({
      legendItems: newLegendItems,
    })
  }

  setLegendItems(items) {
    // TODO: also build timeline?
    // filter timeline
    const filteredItems = items.filter((item) => item.type !== 'timeline')

    const itemsForState = filteredItems.map((item) => {
      item.visibility = true
      item.collapse = false

      return (
        item
      )
    })

    itemsForState[3] = {name:'iuygi uygiuy giuyg iuygiu ygiuyg iuygiu ygiuy giuyg iuyg ygiuyg iuygiuy giuyg'}

    this.setState({
      legendItems: itemsForState,
    })
  }

  componentDidMount() {
    fetch(this.state.dataUrl)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          // TODO: handle error
          console.log(`Oops! There as an error ${response.status}: ${response.statusText}`)
        }
      })
      .then((data) => {
        this.setLegendItems(data)
      })
      .catch((error) => {
        console.log('wat', error)
      })
  }

  render() {
    return (
      <div className="App w-screen h-screen p-10 bg-blue-100">
        {this.state.legendItems.length > 0 &&
          <Legend
            items={this.state.legendItems}
            onChangeVisibility={this.onChangeVisibility}
            onChangeCollapse={this.onChangeCollapse}
          />
        }
      </div>
    )
  }
}

export default App