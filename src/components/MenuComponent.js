import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
import DetailedDish from './DetailedDishComponent';
import CommentsDish from './CommentsDishComponents';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <DetailedDish dish={dish} />
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null)
            return (
                <CommentsDish dish={dish} />
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Menu;