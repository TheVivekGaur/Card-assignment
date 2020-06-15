const INITIAL_STATE = {
 images: []
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case 'ON_FETCH':
    return {
     ...state,
     images: action.payload
    }

    default:
     return state;
 }
};