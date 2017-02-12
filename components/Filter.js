const React = require('react');
const { Component } = require('react');

const Filter =({filters, handleChange}) =>{
    return (
      <select onChange={handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
}
Filter.defaultProps ={
  filters: [],
  handleChange: ()=>{}
}
module.exports = Filter;
