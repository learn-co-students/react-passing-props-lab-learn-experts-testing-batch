const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      selectedFilter: null
    };

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.fetchFilters = this.fetchFilters.bind(this)
    this.fetchFruit = this.fetchFruit.bind(this)
  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
  }

  handleFilterChange(e) {
    this.setState({ selectedFilter: e.target.value });
  }


  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({fruit: fruit}))
  }


  render() {
    return (
      <FruitBasket
        handleFilterChange={this.handleFilterChange}
        sekectedFilter={this.state.selectedFilter}
        filters={this.state.filters}
        fruit={this.state.fruit}
      />
    );
  }
}

module.exports = App;
