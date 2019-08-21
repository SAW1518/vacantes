import React, {Component} from 'react';
import "./Login.css"
import {connect} from "react-redux";
import {LoginAction} from '../../business/actions/Login/LoginAction'

type LoginProps = {}
type LoginState = {
    LoginAction: (any)=>void,
    dataLogin: any,
    errorLogin: any,
    user: string,
    pass: string
}

class Login extends Component<LoginProps, LoginState> {

    state = {
        user: '',
        pass: ''
    };

    componentWillReceiveProps(nextProps: Props) {
        const {dataLogin, errorLogin} = nextProps;
        if (dataLogin.body && dataLogin.isOk !== false) {
            console.log('Data Login ', dataLogin);
        }
        if (errorLogin.error && !errorLogin.isOk) {
            console.log('Error Login ', errorLogin);
        }

    }

    componentDidMount() {

    }

    componentWillMount() {
    }

    handelTestPass=(event)=>{
        console.log(event.target.value);
        this.setState({
            pass:event.target.value
        });
    };
    handelTestUser=(event)=>{
        console.log(event.target.value);
        this.setState({
            user:event.target.value
        });
    };
    islogin =(event)=>{
        this.props.LoginAction(this.state.user, this.state.pass);
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control"
                                               placeholder="Email address" required autoFocus
                                               value={this.state.user}
                                               onChange={this.handelTestUser}
                                        />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control"
                                               placeholder="Password" required
                                               value={this.state.pass}
                                               onChange={this.handelTestPass}
                                        />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                        <label className="custom-control-label" htmlFor="customCheck1"> Remember
                                            password</label>
                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block text-uppercase"

                                            onClick={this.islogin}
                                    >Sign in

                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataLogin: state.Login.dataLogin,
        errorLogin: state.Login.errorLogin
    }
};


export default connect(mapStateToProps, {LoginAction})(Login)

