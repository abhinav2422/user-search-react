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
            <div key={repo.id}  style={{borderBottom: '1px black solid'}}>
                <h3 className="blueCol">{repo.name}</h3>
                <h5 className="grayCol">{repo.description}</h5>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <p className="grayCol">Lang: </p>
                    <p style={{marginRight: '30px'}} className="grayCol">{repo.language}</p> 
                    <p className="grayCol">Stars: </p>
                    <p style={{marginRight: '30px'}} className="grayCol">{repo.stargazers_count}</p>
                    <p className="grayCol">Forks: </p>
                    <p style={{marginRight: '30px'}} className="grayCol">{repo.forks_count}</p> 
                </div>
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