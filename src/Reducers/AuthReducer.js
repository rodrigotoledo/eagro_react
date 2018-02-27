let INITIAL_STATE = { user_logged: false, auth_token: '', user_name: 'eAgro', user_email: 'admin@eagro.com.br', user_password: 'asdqwe123' };
export default (state = INITIAL_STATE, action) => {
  if (action.type == "change_auth_token") {
    return { ...state, auth_token: action.payload };
  }
  if (action.type == "change_user_email") {
    return { ...state, user_email: action.payload };
  }
  if (action.type == "change_user_password") {
    return { ...state, user_password: action.payload };
  }
  if (action.type == "change_user_name") {
    return { ...state, user_name: action.payload };
  }

  return state;
};
