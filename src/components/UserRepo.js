import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRepos } from '../actions/uActions';

class UserRepo extends Component {
    componentWillMount() {
        this.props.fetchRepos(this.props.match.params.username);
    }

    render() {
        const repo = this.props.repos.map(repo => (
            <div key={repo.id}>
                <h3>{repo.name}</h3>
            </div>
        ));

        return (
            <div>
                <h4>{repo}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    repos: state.users.repo,
});

UserRepo.propTypes = {
    fetchRepos: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fetchRepos })(UserRepo);