import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutUsComponent';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            comments: COMMENTS
        };
    }
    
    render() {
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };

        const AboutUsWithLeaders = () => {
            return (
                <About leaders={this.state.leaders}/>
            );
        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route path='/home' component={() => <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]} />} />
                    <Route exact path='/aboutus' component={AboutUsWithLeaders}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact}/>
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );

    }

}

export default Main;
