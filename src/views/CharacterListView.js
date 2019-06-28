import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getCharacters} from '../actions';


class CharacterListView extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (<div className="CharactersList_fetching">
        <p>Fetching List of Characters Please Wait.</p>
      </div>);
    }
    
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => (
  
   {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
);
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getCharacters
  }
)(CharacterListView);
