import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUserInfo } from '../actions/uActions';

class UserInfo extends Component {
    componentWillMount() {
        this.props.fetchUserInfo(this.props.match.params.username);
    }

    render() {
        return (
            <div>
                <img src={this.props.info.avatar_url}></img>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    info: state.users.info,
});

UserInfo.propTypes = {
    fetchUserInfo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fetchUserInfo })(UserInfo);