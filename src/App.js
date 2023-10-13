import React, { Component, useState } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  sortByPrice: false; // Initially not sorted by price
  
  constructor(props) {
    super(props);
    this.state = {
      sortByPrice: false,
      filterBySource: null,
      uniqueSources: [],  // New state for unique sources
    };
  }

  setUniqueSources = (sources) => {
    console.log("Received unique sources in App:", sources);
    this.setState({ uniqueSources: sources });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.uniqueSources !== this.state.uniqueSources) {
        console.log("Updated uniqueSources state in App:", this.state.uniqueSources);
    }
  }

  // Function to toggle the sorting option
  toggleSortByPrice = () => {
    const newSortState = !this.state.sortByPrice;
    console.log("Toggling sortByPrice to:", newSortState);
    //this.setState({ sortByPrice: newSortState });
    this.setState(prevState => ({ sortByPrice: !prevState.sortByPrice }));
  };

  // Function to set the source filter
  setFilterBySource = (source) => {
    this.setState({ filterBySource: source });
  };

  handleSubmit = (e, history, searchEntry) => {
    e.preventDefault();  // Prevent the default form submission
    history.push(`/search/${searchEntry}`);  // Navigate to the search results page
  }

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route
              render={(props) => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                  toggleSortByPrice={this.toggleSortByPrice}
                  setFilterBySource={this.setFilterBySource}
                  uniqueSources={this.state.uniqueSources}  // Pass the unique sources
                  setUniqueSources={this.setUniqueSources} // Pass the callback
                />
              )}
            />
            <Switch>
              <Route
                path="/couches"
                render={(props) => (
                  <Item
                    searchTerm="couches"
                    sortByPrice={this.state.sortByPrice}
                    filterBySource={this.state.filterBySource}
                    setUniqueSources={this.setUniqueSources} // Pass the callback
                  />
                )}
              />
              <Route
                path="/chairs"
                render={(props) => (
                  <Item
                    searchTerm="chairs"
                    sortByPrice={this.state.sortByPrice}
                    filterBySource={this.state.filterBySource}
                    setUniqueSources={this.setUniqueSources} // Pass the callback
                  />
                )}
              />
              <Route
                path="/lightbulbs"
                render={(props) => (
                  <Item
                    searchTerm="lightbulbs"
                    sortByPrice={this.state.sortByPrice}
                    filterBySource={this.state.filterBySource}
                    setUniqueSources={this.setUniqueSources} // Pass the callback
                  />
                )}
              />
              <Route
                path="/surpriseme"
                render={(props) => (
                  <Item
                    searchTerm="fridge"
                    sortByPrice={this.state.sortByPrice}
                    filterBySource={this.state.filterBySource}
                    setUniqueSources={this.setUniqueSources} // Pass the callback
                  />
                )}
              />
              
              <Route
                path="/search/:searchInput"
                render={(props) => (
                  <Search
                    searchTerm={props.match.params.searchInput}
                    sortByPrice={this.state.sortByPrice}
                    filterBySource={this.state.filterBySource}
                    setUniqueSources={this.setUniqueSources} // Pass the callback
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
