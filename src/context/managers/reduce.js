export const initialState = {
  key: '',
  size: 10,
  page: 1,
  data: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setData':
      return {
        ...state,
        data: action.payload,
      };
    case 'setKey':
      return {
        ...state,
        key: action.payload,
      };

    case 'setSize':
      return {
        ...state,
        size: action.payload,
      };
    case 'setPage':
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
