const menuOpenReducer = (state = false, action: any) => {
  switch (action.type) {
    case "MENU_TOGGLE":
      return !state;
    default:
      return !state;
  }
};

export default menuOpenReducer;
