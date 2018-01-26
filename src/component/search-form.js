import React from 'react';

 class RedditSearch extends React.Component{
   constructor(props){
     super(props);
     this.state = {board: '', limit: '',};
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
   }

   handleSubmit(event) {
     event.preventDefault();
     this.props.getBoard(this.state.board, this.state.limit);

   }
   handleChange(event) {
     event.preventDefault();
     if(event.target.id === 'boardName'){
       this.setState({board:event.target.value})
     } else{
       this.setState({limit:event.target.value})
     }
   }

   render() {
     return(
       <div>
        <form onSubmit={this.handleSubmit}>
          <h3> Enter board to lurk: </h3>
          <input type='text' id='boardName' onChange={this.handleChange} />
          <h3> Results per page: </h3>
          <input type='number' id='limit' onChange={this.handleChange} />
          <input type='submit' />
        </form>
       </div>
     )
   }
 }

 export default RedditSearch;
