const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter
        handleChange={props.updateFilter}
        filters={props.filters} />
      <FilteredFruitList
        fruit={props.fruit}
        filter={props.currentFilter} />
    </div>
  );

}

FruitBasket.defaultProps = {
  fruit: '',
  filters: [],
  currentFilter: undefined,
  updateFilterCallback: function() {}
}

module.exports = FruitBasket;
