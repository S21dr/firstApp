import React from 'react';
import { connect } from 'react-redux';
import { follow, followCreator, followingProgressCreator, getUsers, loaderCreator, onPageChangedCreator, setUsersCreator, unfollow, unfollowCreator } from '../../../redux/frendsReducer';
import Frends from './Frends';
import loaderGif from '../../../assets/loader.gif'
import { userApi } from '../../../Api/api';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../../redux/Hoc/authRedirect';
import { compose } from 'redux';



class frendsApiComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.countSizeUsers, this.props.pageNumberActive);
    }
    onPageChanged = (number) => {
        this.props.getUsers(this.props.countSizeUsers, number);
        this.props.onPageChanged(number);
    }
    render() {
        return <>
            {this.props.loader ? <img src={loaderGif} /> : <Frends frends={this.props.frends}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                totalCount={this.props.totalCount}
                countSizeUsers={this.props.countSizeUsers}
                onPageChanged={this.onPageChanged}
                pageNumberActive={this.props.pageNumberActive}
                toglefollowingProgress={this.props.toglefollowingProgress}
                followingProgress={this.props.followingProgress}
            />}
        </>
    }
}

let MapStateToProps = (state) => {
    return {
        frends: state.frendsPage.frends,
        totalCount: state.frendsPage.totalCount,
        countSizeUsers: state.frendsPage.countSizeUsers,
        pageNumberActive: state.frendsPage.pageNumberActive,
        loader: state.frendsPage.loader,
        followingProgress: state.frendsPage.followingProgress,
        isAuth: state.auth.isAuth
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(follow(id));
        },
        unfollow: (id) => {
            dispatch(unfollow(id));
        },
        onPageChanged: (pageNumber) => {
            dispatch(onPageChangedCreator(pageNumber))
        },
        getUsers: (countSizeUsers, pageNumberActive) => {
            dispatch(getUsers(countSizeUsers, pageNumberActive))
        },
        toglefollowingProgress: (followingProgress, id) => {
            dispatch(followingProgressCreator(followingProgress, id))
        }
    }
}


export default compose(connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(frendsApiComponent);;