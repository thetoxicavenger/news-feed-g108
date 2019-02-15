import React, { Component } from 'react';
import {
    Row, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';

class Article extends Component {



    render() {
        console.log("Article ", this)
        return (
            <div>

                <CardGroup> 
                  
                    <CardBody> <CardTitle>{this.props.article.title}</CardTitle>
                        <Card> <CardImg src={this.props.article.img} alt={this.props.article.title} />
                       </Card> </CardBody>             
                </CardGroup>

            </div>
        );
    }
}

export default Article;