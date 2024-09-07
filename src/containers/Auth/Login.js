import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// 
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        })
        console.log(e.target.value)
    }
    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
        console.log(e.target.value)
    }
    handleLogin = () => {
        console.log("username" + this.state.username)
        console.log("password" + this.state.password)
    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
            <>
                <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                </head>
                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content'>
                            <div className='col-12 text-login'>Login</div>
                            <div className='col-12 form-group login-input'>
                                <label>Username</label>
                                <input type='text'
                                    className='form-control'
                                    placeholder='Enter your username'
                                    value={this.state.username}
                                    onChange={(e) => this.handleOnChangeUsername(e)}></input>
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>Password</label>
                                <div className='custom-input-password'>
                                    <input
                                        type={this.state.isShowPassword ? "text" : "password"}
                                        className='form-control'
                                        placeholder='Enter your password'
                                        onChange={(e) => this.handleOnChangePassword(e)}></input>
                                    <span
                                        onClick={() => this.handleShowHidePassword()}>
                                        <i class={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                                    </span>

                                </div>

                            </div>
                            <div className='col-12'>
                                <button className='btn-login'
                                    onClick={() => {
                                        this.handleLogin()
                                    }}>Login</button>
                            </div>
                            <div>
                                <span className='forgot-password'>Forgot your password?</span>
                            </div>
                            <div className='col-12 social-login'>
                                <span className='text-center mt-3'>Or Login With</span>
                                <i className="fa-brands fa-google google"></i>
                                <i className="fa-brands fa-facebook facebook"></i>
                            </div>
                        </div>
                    </div>
                </div ></>

        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
