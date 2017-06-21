import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section>
        <div className="search">
          <form>
            <label>

              <input placeholder="Search" className="searchbar" />
            </label>
          </form>
        </div>
      </section>
    );

  }
}

export default Search;
