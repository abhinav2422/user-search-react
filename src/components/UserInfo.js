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
            <div style={{marginRight:'180px'}}>
                <img src={this.props.info.avatar_url} alt="User Avatar" style={{width: '250px'}}></img>
                <h3>{this.props.info.name}</h3>
                <h5 className="grayCol">{this.props.info.login}</h5>
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