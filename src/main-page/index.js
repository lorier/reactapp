import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedHouse from "./featured-house";

class App extends Component {

  state = {}; //this is a 'property initializer', an alternative to a constructor function

  fetchHouses = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
      this.determineUniqueCountries();
    })
  }
  componentDidMount(){
    this.fetchHouses();
  }
  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    }
  }

  determineUniqueCountries = () => {
    //new Set() creates a collection of unique values from the array returned by map. Then we turn that collection
    //back into an Array with Array.from
    const countries = this.allHouses ? Array.from( new Set(this.allHouses.map( h => h.country))) : [];
    countries.unshift(null); //make the default value in the dropdown blank
    this.setState({ countries });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Header subtitle="The land before time."/>
        </div>
        <div className="container">
          <FeaturedHouse house={this.state.featuredHouse} />
        </div>
      </div>
    );
  }
}
export default App;

