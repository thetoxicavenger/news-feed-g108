import React, { Component } from 'react';
import ArticlesList from './components/ArticlesList'
import AddArticle from './components/AddArticle'

class App extends Component {

  state = {
    articles: [],
    error : false
  }

  componentDidMount = async() => {
    try{
      const response = await fetch('http://localhost:3001/articles') 
      const json = await response.json()
      if(!response.ok){
        console.log("failed api response")
          throw new Error("Bad request to articles API")
      }
    this.setState({
      articles: json
    })
}
catch(error) {
  this.state({
    error:true
  })
 }
}

submitNewArticle = (newArticle) => {
const {title, img} = newArticle;
var headers = {
  'Content-Type': 'application/json',
}
fetch("http://localhost:3001/articles/", {
      method: "post",
      body: JSON.stringify({ newArticle }),
      headers: {
        headers
      }
      
})
.then(res => res.json())
      .then(json => {
        this.setState(prevState => {
          return {
            articles: [
              ...prevState.articles,
              {
                title,
                img
              }
            ]
          };
        });
      });
};
/*   axios.post('url', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
}

this.setState(prevState => {
    return {
      articles: [...prevState.articles, {
        id: this.state.articles.articleID,
        title,
        img      
      }]
    }
  })
  */




  render() {
console.log("APP - this ", this)
    return (
      <div>Article App
      <ArticlesList articles={this.state.articles}
      img={this.props.img}
      title={this.props.title}
      />

<AddArticle addArticle={this.state.addArticle} 
 submitNewArticle={this.submitNewArticle}
 img={this.props.img}
      title={this.props.title}
/>
      </div>
    );  
  }
}

export default App;
