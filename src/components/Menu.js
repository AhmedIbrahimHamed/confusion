import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap'

export class Menu extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           selectedDish: null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(){
        const dish = this.state.selectedDish;
        if(this.state.selectedDish){
            return(
                <div className="col-12 col-md-6">
                    <Card>
                        <CardImg width="100%" src={dish.image}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }else{
            return <div></div>
        }
    }
    
    render() {

        const menu = this.props .dishes.map(dish => {
            return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardImgOverlay >
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )})

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <div className="row justify-content-center">
                    {this.renderDish()}
                </div>
            </div>
        )
    }
}

export default Menu
