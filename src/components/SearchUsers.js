import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers } from '../actions/uActions';
import { Link } from 'react-router-dom';

class SearchUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const query = this.state.search
        //console.log(query);
        this.props.fetchUsers(query);
    }

    render() {
        var user = this.props.users.map(user => (
            <div key={user.id} style={getstyle}>
                <Link to={"/user/"+user.login}><img src={user.avatar_url} alt="User" style={imgStyle}></img></Link>
                <Link to={"/user/"+user.login}><h3>{user.login}</h3></Link>
            </div>
        ));

        return (
            <div>
                <h3>Welcome, Search for users</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="search" onChange={this.onChange} value={this.state.search} style={{padding: '10px'}} placeholder="Find a member..." />
                    <button type="submit" style={{padding: '10px'}}>Search</button>
                </form>
                <div>
                    <h4>{user}</h4>
                </div>
            </div>
        )
    }
}

SearchUsers.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    users: state.users.searched,
});

const getstyle = {
    display: 'flex',
    margin: '10px',
    padding: '35px',
    borderBottom: '1px black solid'
}

const imgStyle = {
    height: '100px',
    marginRight: '200px',
}

export default connect(mapStateToProps, { fetchUsers })(SearchUsers);