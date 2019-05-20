import React, { Component } from 'react';
import { addUser } from '../api/api';
import errorHandler from '../utils/errorHandler';
const defaultState = {
  username: '',
  hobbies: '',
  avatar: null,
  avatarName: '',
  errors: null
};
export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    if (e.target.type !== 'file') {
      this.setState({
        [e.target.name]: e.target.value
      });
    } else {
      this.setState({
        [e.target.name]: e.target.files[0]
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, hobbies, avatar } = this.state;
    let errors = errorHandler(username, hobbies, avatar);
    if (!errors) {
      addUser(username, hobbies, avatar)
        .then(response => {
          if (response instanceof Error) {
            this.setState({
              errors: response.response.data
            });
            throw response;
          } else {
            alert(response);
            document.getElementById('avatar').value = null;
            this.setState(defaultState);
          }
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        errors: errors
      });
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div className='container'>
        <div className='card'>
          <form className='form' onSubmit={this.handleSubmit}>
            <h2 className='title'>Welcome</h2>
            <input
              type='text'
              name='username'
              placeholder='User Name*'
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            {errors ? (
              errors.username ? (
                <p className='errors'>{errors.username}</p>
              ) : (
                <p />
              )
            ) : (
              <p />
            )}

            <br />
            <input
              type='text'
              name='hobbies'
              placeholder='Hobbies*'
              value={this.state.hobbies}
              onChange={this.handleChange}
              required
            />
            {errors ? (
              errors.hobbies ? (
                <p className='errors'>{errors.hobbies}</p>
              ) : (
                <p />
              )
            ) : (
              <p />
            )}
            <br />
            <p className='textalign-l'>Choose a profile picture:</p>
            <input
              id='avatar'
              type='file'
              name='avatar'
              accept='.jpg, .png'
              onChange={this.handleChange}
            />
            {errors ? (
              errors.avatar ? (
                <p className='errors'>{errors.avatar}</p>
              ) : (
                <p className='note'>
                  Note: Max. Size 1MB, Allowed file types jpg,png
                </p>
              )
            ) : (
              <p className='note'>
                Note: Max. Size 1MB, Allowed file types jpg,png
              </p>
            )}
            <br />
            <button className='submit'>Submit</button>
            <p>
              <strong>Note:</strong> Seperate hobbies by comma
            </p>
            <p>
              <strong>Example:</strong> Swimming, Hiking, Cycling
            </p>
          </form>
        </div>
      </div>
    );
  }
}
