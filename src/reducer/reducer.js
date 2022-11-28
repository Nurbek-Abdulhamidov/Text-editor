export const reducer = (state, action) => {
  switch (action.type) {
    case 'plus':
      return state + 1;
    case 'minus':
      return state - 1;
    case 'byAmount':
      return state + action.payload;
    default:
      return state;
  }
};
