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
    this.onChangeOrder = this.onChangeOrder.bind(this)
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

  onChangeOrder(event) {
    if (event.newIndex === event.oldIndex) return

    const newLegendItems = this.state.legendItems
    const itemToMove = newLegendItems.splice(event.oldIndex, 1)
    newLegendItems.splice(event.newIndex, 0, itemToMove[0])

    this.setState({
      legendItems: newLegendItems,
    })
  }

  setLegendItems(items) {
    // filter timeline
    const filteredItems = items.filter((item) => item.type !== 'timeline')

    const itemsForState = filteredItems.map((item) => {
      item.visibility = true
      item.collapse = false

      return (
        item
      )
    })

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
      <div className="App w-full min-h-screen p-5 bg-gray-680">
        {this.state.legendItems.length > 0 &&
          <Legend
            items={this.state.legendItems}
            onChangeVisibility={this.onChangeVisibility}
            onChangeCollapse={this.onChangeCollapse}
            onChangeOrder={this.onChangeOrder}
          />
        }
      </div>
    )
  }
}

export default App