
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class SanPham extends Component {

    render() {

        return (
            <div className="danh-muc-container">
                <div className="title">
                    QUẢN LÝ KINH DOANH GOLD COFFEE
                </div>
                <div className="title">
                    QUẢN LÝ SẢN PHẨM
                </div>
                <div className="title">

                </div>
                <div className="danh-muc-body">
                    <div className="container">
                        <div className="row">

                        </div>

                    </div>

                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SanPham);
