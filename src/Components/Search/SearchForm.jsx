import React from "react";
import axios from "axios";
const baseURL = "https://api-shank.onrender.com/produtos";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit(event) {
    if (this.state.value == 0) {
      axios.get(`${baseURL}`).then((response) => {
        const respData = response.data;

        this.props.handleForm(respData);
      });
    }else{
      axios.get(`${baseURL}/find`, { params: { filter: this.state.value } }).then((response) => {
        const respData = response.data;

        this.props.handleForm(respData);
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="🔎" />
      </form>
    );
  }
}

export default SearchForm;
