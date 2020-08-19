import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class CommentsDish extends Component {
    
    render() {
        const dish = this.props.dish
        
            return (
                <Card>
                    <CardTitle>Comments</CardTitle>

                    {dish.comments.map((comments) => {
                        return (
                            <CardBody>
                                <CardText>{comments.comment}</CardText>
                                <CardText>--{comments.author} , {comments.date}</CardText>
                            </CardBody>
                        );
                    })
                    }

                </Card>
            );
    }

}

export default CommentsDish;