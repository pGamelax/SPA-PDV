import React from "react";
import SearchForm from "./Components/Search/SearchForm";
import ViewProdutos from "./Components/View/ViewProdutos";


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerData: undefined,
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(result) {
    this.setState({ playerData: result });
  }

  render() {
    return (
      <div className="container mt-4">
        <SearchForm handleForm={this.handleForm} />
        <hr></hr>
        <ViewProdutos playerData={this.state.playerData} /> 
      </div>
    );
  }
}

export default Profile;
