import React, { Component } from 'react';
import { getAllUsers } from '../api/api';
export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }
  componentDidMount() {
    getAllUsers()
      .then(response => {
        if (response instanceof Error) {
          throw response;
        } else {
          this.setState({
            users: response
          });
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    let { users } = this.state;
    if (users) {
      return (
        <div className='container'>
          {users.length !== 0 ? (
            users.map(user => {
              return (
                <div key={user._id} className='card profile'>
                  <img src={user.avatar} alt='propic' />
                  <p className='bold'>{user.username}</p>
                  <p>
                    <span className='bold'>Hobbies: </span>
                    {user.hobbies.join(', ')}
                  </p>
                </div>
              );
            })
          ) : (
            <h1>No users in db</h1>
          )}
        </div>
      );
    } else {
      return <></>;
    }
  }
}
