import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
class HomeHeader extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i class="fas fa-bars"></i>
                            <div className="header-logo">
                            </div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div className="subs-title1"><b>Cửa hàng</b></div>
                                <div className="subs-title">Các loại thức uống</div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title1"><b>Trà</b></div>
                                <div className="subs-title">Các loại trà </div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title1"><b>Sự kiện</b></div>
                                <div className="subs-title">Các sự kiện sắp diễn ra </div>
                            </div>
                            <div className="child-content">
                                <div className="subs-title1"><b>Giới thiệu</b></div>
                                <div className="subs-title"> Thông tin về của hàng</div>
                            </div>

                        </div>
                        <div className="right-content">
                            <div>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <div>
                                <i className="fas fa-user"></i>
                            </div>

                        </div></div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><b>GOLD COFFEE</b></div>
                        <div className="title2">Chất lượng đậm vị</div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder=" Tìm kiếm các loại nước " />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-coffee"></i></div>
                                <div className="text-child">Coffee</div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-coffee"></i></div>
                                <div className="text-child">Trà truyền thống</div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-coffee"></i></div>
                                <div className="text-child">Trà nguyên vị</div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-coffee"></i></div>
                                <div className="text-child">Đá xay</div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-couch"></i></div>
                                <div className="text-child">Đặt bàn</div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-ticket-alt"></i></div>
                                <div className="text-child">Đặt vé sự kiện</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        //     userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
