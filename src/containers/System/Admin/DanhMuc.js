import React, { CRUD_ACTIONS, Component } from 'react';
import { CommonUtils } from "../../../utils";
import { Redirect } from 'react-router-dom';
import *  as actions from "../../../store/actions";
import { connect } from 'react-redux';
import TableDanhMuc from './TableDanhMuc';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
class DanhMuc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewImgURL: '',
            isOpen: false,

            isdanhmuccreate: false,

            TEN_DM: '',
            ANH: '',

        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {


        if (prevProps.Lisdanhmucs !== this.props.Lisdanhmucs) {
            this.setState({
                TEN_DM: '',
                ANH: '',
                previewImgURL: ''

            })
        }
    }

    handleOnchangImageDanhMuc = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let Base64 = await CommonUtils.getBase64(file);
            console.log('hoi dan it base64 image: ', Base64)
            let ObjectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: ObjectUrl,
                ANH: Base64
            })
        }
    }
    openPreviewImageDanhMuc = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true


        })
    }

    handleSaveDanhMuc = () => {

        // let { action } = this.state
        // if (action === CRUD_ACTIONS.CREATE) {
        ///
        // console.log('thuanb1809299', this.state)
        this.props.createNewDanhMuc({
            TEN_DM: this.state.TEN_DM,
            ANH: this.state.ANH,


        })
        // }
        // if (action === CRUD_ACTIONS.EDIT) {
        //     /// chinh sua ng dung
        //     this.props.editAUserRedux({
        //         id: this.state.usereditid,
        //         email: this.state.email,
        //         ten_tk: this.state.ten_tk,
        //         matkhau: this.state.matkhau,
        //         diachi: this.state.diachi,
        //         gioitinh: this.state.gender,
        //         sdt: this.state.sdt,
        //         roleid: this.state.role,
        //         khu: this.state.position,
        //         avatar: this.state.avatar,
        //     })
        // }

    }

    onChangeInputDanhMuc = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })
    }
    render() {
        let { TEN_DM, ANH } = this.state;
        return (
            <div className="danh-muc-container">
                <div className="title">
                    QUẢN LÝ KINH DOANH GOLD COFFEE
                </div>
                <div className="title">
                    QUẢN LÝ DANH MỤC
                </div>
                <div className="title">

                </div>
                <div className="danh-muc-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <label>Tên danh mục</label>
                                <input className="form-control" type="text"
                                    value={TEN_DM}
                                    onChange={(event) => { this.onChangeInputDanhMuc(event, 'TEN_DM') }}
                                />
                            </div>
                            <div className="col-3">
                                <label>Ảnh</label>
                                <div className="preview-img-container" >
                                    <input id="previewImg" type="file" hidden
                                        onChange={(event) => this.handleOnchangImageDanhMuc(event)}
                                    />
                                    <label className="upload" htmlFor="previewImg" >Tải ảnh <i className="fas fa-upload"></i></label>
                                    <div className="preview-image"
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.openPreviewImageDanhMuc()}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div className="co-12 my-3">
                                <button className="btn btn-primary col-4"
                                    onClick={() => this.handleSaveDanhMuc()}
                                > Lưu danh mục</button>
                            </div>
                            <div className="col-12 mt-5">
                                <TableDanhMuc />
                            </div>

                        </div>

                    </div>

                </div>
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        Lisdanhmucs: state.admin.danhmucs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewDanhMuc: (data1) => dispatch(actions.createNewDanhMuc(data1)),
        fetchDanhMucRedux: () => dispatch(actions.fetchAllDanhMucStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhMuc);
