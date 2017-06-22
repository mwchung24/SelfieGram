import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      isSelected: false
    };
    this.selected = this.selected.bind(this);
    this.unselected = this.unselected.bind(this);
  }

  selected(e) {
  this.setState({isSelected: true});
  }

  unselected(e) {
    this.setState({isSelected: false});
  }

  render () {
    return (
      <section>
        <div className="search">
          <form>
            <label>

              <input placeholder="Search" className="searchbar" selected={this.focus}/>
            </label>
          </form>
        </div>
      </section>
    );

  }
}

// <i class="fa fa-search" aria-hidden="true"></i>



export default Search;
