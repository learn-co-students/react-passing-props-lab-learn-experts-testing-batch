const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter
          handleChange={props.handleFilterChange}
          currentFilter={props.currentFilter}/>
        <FilteredFruitList
          filter={props.selectedFilter}
          fruit={props.fruit}/>
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  selectedFilter: null,
  currentFilter: null,
  updateFilterCallback: null
}

module.exports = FruitBasket;
