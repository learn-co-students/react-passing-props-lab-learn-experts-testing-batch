const React = require('react');
const { Component } = require('react');

const FruitBasket = require('./FruitBasket');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fruit: [],
      filters: [],
      selectedFilter: null
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.fetchFruit = this.fetchFruit.bind(this);
    this.fetchFilters = this.fetchFruit.bind(this);

  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
    console.log(this.state.filters)
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit() {
      fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  render() {
    return (
      <FruitBasket
        handleFilterChange={this.handleFilterChange}
        selectedFilter={this.state.selectedFilter}
        filters={this.state.filters}
        fruit={this.state.fruit}/>
    );
  }

}

module.exports = App;
