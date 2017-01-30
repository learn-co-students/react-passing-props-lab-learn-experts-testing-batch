const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: []
    }
    this.fetchFilters = this.fetchFilters.bind(this)
    this.fetchFruit = this.fetchFruit.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
    componentWillMount() {
      this.fetchFilters();
      this.fetchFruit()
    }

    fetchFilters() {
      fetch('/api/fruit_types')
        .then(res => res.json())
        .then(filters => this.setState({filters: filters}));
    }

    fetchFruit(){
      fetch('/api/fruit')
        .then(res => res.json())
        .then(fruit => this.setState({fruit: fruit}));
    }

    handleFilterChange(e) {
      console.log('new filter: ', e.target.value);
      const filter = e.target.value === "all" ? null : e.target.value
      this.setState({ selectedFilter: filter });
    }
  render(){
    return (
      <FruitBasket
      updateFilterCallback={this.handleFilterChange} currentFilter={this.state.selectedFilter}
      fruit={this.state.fruit} filters={this.state.filters}/>
    );
  }
}

module.exports = App;
