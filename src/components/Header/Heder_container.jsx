import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authData, logout } from '../../redux/auth-reducer';

class Header_container extends React.Component {
    componentDidMount() {
        this.props.authData();

    }
    render() {
        return <Header {...this.props} />
    }
};

const mapStateToProps = (state) => {

    return { auth: state.auth }
}


export default connect(mapStateToProps, { authData, logout })(Header_container);