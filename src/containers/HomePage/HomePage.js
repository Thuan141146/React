import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Speacil from './Section/Speacil';
import Event from './Section/Event';
import Discount from './Section/Discount'

import './HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinitte: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScoll: 1,

        };
        return (
            <div>
                <HomeHeader />
                <Discount />
                <Speacil settings={settings} />
                <Event settings={settings} />

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
