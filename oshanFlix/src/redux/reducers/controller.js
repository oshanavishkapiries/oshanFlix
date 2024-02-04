const initialState = {
  screenSize: {
    mobile: false,
    tablet: false,
    desktop: false,
    xs: false,
  },
};

const controller = (state = initialState, action) => {
  switch (action.type) {
    case "SCREEN_SIZE_CHANGE":
      return {
        ...state,
        screenSize: action.payload,
      };
    default:
      return state;
  }
};

export default controller;
