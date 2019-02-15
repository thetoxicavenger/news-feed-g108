import React, { Component } from 'react';
import Article from './Article'
import { CardTitle, Card } from 'reactstrap'

class ArticlesList extends Component {

    render() {
        console.log("ArticleList ", this)
        let listOfArticles = this.props.articles.map(article =>
            <Article key={article.id} article={article}
                submitNewImage={this.props.submitNewImage}

            />)

        return (
            <div>

                {listOfArticles}
            </div>
        );
    }
}

export default ArticlesList;