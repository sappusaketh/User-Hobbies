import React from 'react';
import AddUser from './AddUser';
import AllUsers from './AllUsers';
import { Switch, Route, Redirect, Link, withRouter } from 'react-router-dom';

const MainComponent = props => {
  return (
    <div>
      <nav>
        <ul className='navbar'>
          <li>
            <Link
              to='/adduser'
              className={props.location.pathname === '/adduser' ? 'active' : ''}
            >
              Add User
            </Link>
          </li>
          <li>
            <Link
              to='/allusers'
              className={
                props.location.pathname === '/allusers' ? 'active' : ''
              }
            >
              All Users
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/adduser' component={AddUser} />
        <Route path='/allusers' exact component={AllUsers} />
        <Redirect to='/adduser' />
      </Switch>
    </div>
  );
};
export default withRouter(MainComponent);
