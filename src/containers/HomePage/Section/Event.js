import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Event.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
class Event extends Component {

    render() {

        return (
            <div className="section-speacil">
                <div className="section-container">
                    <div className="section-header">
                        <div className="title-section"> Sự kiện sắp diễn ra</div>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="speacil-customize-event">
                                <div className="bg-image-event" />
                                <div className="text-customize"> Giao lưu đọc giả </div>
                                <div className="text-gia"> 28.000 đ </div>
                            </div>
                            <div className="speacil-customize-event">
                                <div className="bg-image-event" />
                                <div className="text-customize"> Giao lưu ca sĩ  </div>
                                <div className="text-gia"> 28.000 đ </div>
                            </div>
                            <div className="speacil-customize-event">
                                <div className="bg-image-event" />
                                <div className="text-customize"> Giao lưu ca sĩ </div>
                                <div className="text-gia"> 28.000 đ </div>
                            </div>
                            <div className="speacil-customize-event">
                                <div className="bg-image-event" />
                                <div className="text-customize"> Giao lưu đọc giả </div>
                                <div className="text-gia"> 28.000 đ </div>
                            </div>
                            <div className="speacil-customize-event">
                                <div className="bg-image-event" />
                                <div className="text-customize"> Giao lưu đọc giả </div>
                                <div className="text-gia"> 28.000 đ </div>
                            </div>
                        </Slider>
                    </div>

                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Event);
