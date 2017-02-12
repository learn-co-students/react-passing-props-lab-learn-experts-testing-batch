const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filters: [],
      selectedFilter: null,
      fruit: []
    }
    this.fetchFilters = this.fetchFilters.bind(this)
    this.fetchFruit = this.fetchFruit.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
  }
  componentDidMount(){
    this.fetchFilters();
    this.fetchFruit();
  }
  updateFilter(e){
    this.setState({
      selectedFilter: e.target.value
    })
  }

  fetchFilters(){
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filts => this.setState({
        filters: filts
        }))
  }
  fetchFruit(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(frt => this.setState({
          fruit: frt
        }))
  }
  render(){
    return (
      <FruitBasket
        filters={this.state.filters}
        fruit={this.state.fruit}
        currentFilter={this.state.selectedFilter}
        updateFilterCallback={this.updateFilter}
        />
    );
  }
}

module.exports = App;
