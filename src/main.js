import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

import RedditSearch from './component/search-form.js'
import SearchResults from './component/search-result-list.js'

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    board: '',
    posts: []
  }
  this.getBoard = this.getBoard.bind(this);
}

getBoard(board,limit) {

  let displayLimit = 10;
  if (limit) displayLimit = limit;

  superagent.get(`https://www.reddit.com/r/${board}.json?limit=${displayLimit}`)
    .then(results => {
      this.setState({posts:results.body.data.children});
      this.setState({board:board})
    })
    .catch(console.log)
}

  render(){
    return (
      <div>
        <h1>Reddit Search</h1>
        <RedditSearch getBoard={this.getBoard} />
        <SearchResults posts={this.state.posts} board={this.state.board}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
