import React from 'react';
import './App.css';
// import unirest from 'unirest';
import Movie from "./Movie.jsx";
import Search from "./Search.jsx";
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        movies : [{
          Title: "iyin"
        }]
    };
}

componentDidMount() {
  // sendRequest = event => {
  //   event.preventDefault();
  //   const title ={
  //     judul:this.state.judul
  //   };
  axios({
    "method":"GET",
    "url":"https://movie-database-imdb-alternative.p.rapidapi.com/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
    "x-rapidapi-key":"3843ee5f3dmsha8db633c6e7834cp1b4bf4jsn42ac05fd3c83"
    },"params":{
    "page":"1",
    "r":"json",
    "s":"Hulk"
    }
    })
    .then(response =>{
      this.setState({
        movies:response.Search
      })
      
      // const porto = res.data;
      //   this.setState({ porto });
  //     const movies = response.movie;
  // this.setState({movies});
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  // }
}
  
//  sendRequest = (title) => {
//   //  const unirest = require("unirest");
//    const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
//    req.query({
//     "page": "1",
//     "r": "json",
//     "s": title
//   });
  
//   req.headers({
//     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//     "x-rapidapi-key": "3843ee5f3dmsha8db633c6e7834cp1b4bf4jsn42ac05fd3c83"
//   });
  
  
//   req.end( function(res) {
//     if (res.error) throw new Error(res.error);
//     const movies = res.body.Search;
//     this.setState({movies});
//     console.log(res.body);
//   });
//  }
 render() {
   return (
     <div className="App">
     
     {/* {
       this.state.movies.map((movie) => {
         return (
           <Movie {...movie}/>)
      })
    } */}
       <header className="App-header" >
       <Search handleSendRequest={this.sendRequest}/>
       
       
       </header>
       {/* {this.state.movies.map((movie,idx)=>{
       return (
         <div key={idx}>{movie.Title}</div>
       )})} */}
       
     </div>
   );
 }
}
export default App;