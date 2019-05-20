const errorHandler = (username, hobbies, avatar) => {
  username = username.trim();
  hobbies = hobbies.trim();
  if (username === '' && hobbies === '')
    return {
      username: 'username is required',
      hobbies: 'hobbies is required'
    };
  else if (username === '') return { username: 'username is required' };
  else if (hobbies === '') return { hobbies: 'hobbies is required' };
  if (avatar !== null) {
    if (avatar.size > 1024 * 1024) return { avatar: 'maximum size exceeded' };
    else if (!(avatar.type === 'image/jpeg' || avatar.type === 'image/png'))
      return { avatar: 'invalid file type' };
  }
};

module.exports = errorHandler;
