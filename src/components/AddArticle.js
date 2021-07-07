import React, { Component } from "react";

class AddArticle extends Component {
  state = {
    title: "",
    img: ""
  };

  _onChangeTitleHandler = e => {
    console.log("onChangeTitleHandler ", e.target.value)
    this.setState({
        title: e.target.value
    });
  };

  _onChangeUrlHandler = e => {   
           console.log("onChangeUrlHandler ", e.target.value)

    this.setState({
      img: e.target.value
    });
  };

  _onSubmit  = e => {
      console.log("AddArticle Submit")
    e.preventDefault();
    const newArticle = {
        title: this.state.title,
      img: this.state.img
    };
    this.props.submitNewArticle(newArticle);

  };

  render() {


    return (
      <div>
       <form
                    onSubmit={this._onSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this._onChangeTitleHandler}
                    />

                    <input
                        type="text"
                        name="img"
                        value={this.state.img}
                        onChange={this._onChangeUrlHandler}
                    />

                    <input type="submit" value="submit" className="btn btn-primary" />
                </form>
      </div>
    );
  }
}
export default AddArticle;