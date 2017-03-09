const React = require('react');

const FilteredFruitList = function(props){
    const list = !props.filter ? props.fruit :
      props.fruit.filter(i => i.fruit_type == props.filter);

    return (
      <ul className="fruit-list">
        {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
      </ul>
    );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: []
}

module.exports = FilteredFruitList;
