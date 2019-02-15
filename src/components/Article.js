import React, { Component } from 'react';
import {
    Row, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, CardColumns
} from 'reactstrap';

class Article extends Component {



    render() {
        console.log("Article ", this)
        return (
            <div>



                <CardColumns>
      <Card>
        <CardImg top width="100%" src={this.props.article.img} alt={this.props.article.title} />
        <CardBody>
          <CardText>{this.props.article.title} </CardText>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
     
    
    </CardColumns>



            </div>
        );
    }
}

export default Article;