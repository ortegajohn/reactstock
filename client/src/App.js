import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import StockTable from "./components/StockTable";
import friends from "./friends.json";
import API from "./utils/API";



let score = 0;
let topscore = 0;
let ticker = "";
let price = 0;
let guessmessage = 'Click an image to begin!'
class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    friends: friends,
    score: score,
    topscore: topscore,
    guessmessage: guessmessage,
    ticker: ticker,
    price:price
  };

  handleInputChange = event => {
    this.setState({ ticker: event.target.value });
    console.log("event.target.value: ",event.target.value)
  };

  searchTicker = query => {
    console.log("searchTicker")
    API.search(query)
    .then((res) => {
      console.log("res: ", res)
      console.log("res.data.data[0].price: ", res.data.data[0].price)
      console.log("this.state.price: ", this.state.price)
      this.setState({price:res.data.data[0].price})

    })
      // .then(res => this.setState({ price: res.data }))
      .catch(err => console.log(err));
  };

  // handleFormSubmit = event =>{
  //   event.preventDefault()
  //   console.log("Clicked Submit")
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Clicked Submit")
    this.searchTicker(this.state.ticker);
  };



  youloose = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score });
    }

    friends.forEach(element => {
      element.count = 0;
    });
    this.setState({ score: 0 });
  };

  handleIncrement = id => {
    console.log("id: ", id)
    let wincount = 0;

    friends.forEach(element => {
      if (element.id === id) {
        if (element.count === 0) {
          console.log("element.id: ", element.id)

          element.count = 1;
          this.setState({ score: this.state.score + 1 });
          this.setState({ guessmessage: "You guessed correctly!" });


        } else if (element.count > 0) {
          console.log("YOU LOOSE")
          this.setState({ guessmessage: "You guessed incorrectly!" });
          this.youloose()
        };
      };
      if(element.count === 1){
        wincount += 1;
      }
      if(wincount === friends.length){
        this.setState({ guessmessage: "YOU WIN!" });
      }


    });

    this.state.friends.sort(() => Math.random() - 0.5)

  };





  // handleIncrement = function() {
  //   this.setState({ score: this.state.score + 1 });
  //   console.log("this: ",this)
  // };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper >
        <Nav></Nav>
        <SearchBar
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        />
         <StockTable
          ticker={this.ticker}
          price={this.state.price}
          
         />


        
          {/* <Title>
          <div>Clicky Game</div>
            <div> {this.state.guessmessage}</div>
            <div>Score: {this.state.score} | Top Score:{this.state.topscore} </div> */}

            {/* <ul>Clicky Game</ul>            
            <ul> {this.state.guessmessage}</ul>
            <ul>Score: {this.state.score} | Top Score:{this.state.topscore} </ul> */}
          {/* </Title> */}



          
          {this.state.friends.map(friend => (
            <FriendCard
              handleIncrement={this.handleIncrement}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />

          ))}
     
      </Wrapper>
    );
  }
}

export default App;
