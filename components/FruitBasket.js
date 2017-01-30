const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter handleChange={props.updateFilterCallback} filters={props.filters} />
        <FilteredFruitList
          filter={props.currentFilter} fruit={props.fruit} />
      </div>
    );
  }

  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: null
  }

module.exports = FruitBasket;
