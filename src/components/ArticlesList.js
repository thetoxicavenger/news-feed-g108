import React, { Component } from 'react';
import Article from './Article'
import { CardTitle, Card, Row } from 'reactstrap'

class ArticlesList extends Component {

    render() {
        console.log("ArticleList ", this)
        let listOfArticles = this.props.articles.map(article =>
            <Article key={article.id} article={article}
                submitNewImage={this.props.submitNewImage}

            />)

        return (
            <Row>
                {listOfArticles}
            </Row>
        );
    }
}

export default ArticlesList;