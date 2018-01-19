import React from 'react';

class SearchResults extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h4>{this.props.board}</h4>
          <ul>
            {this.props.posts.map((post, index) => {
              <li key={i}>
                {post.data.title}
              </li>
            })}
          </ul>
      </div>
    )
  }
}

export default SearchResults;
