const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
    this.updateFilter = this.updateFilter.bind(this)
  }

  componentWillMount() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
    fetch('/api/fruit')
        .then(res => res.json())
        .then(fruit => this.setState({ fruit: fruit}));
  }

  updateFilter(e) {
    this.setState({currentFilter: e.target.value})
  }

  render() {
    return (
      <FruitBasket
        currentFilter={this.state.currentFilter}
        filters={this.state.filters}
        fruit={this.state.fruit}
        updateFilter={this.updateFilter} />
    );
  }
}

module.exports = App;
