export const initialState = {
  order: 'create_time',
  status: 'all', // unconsulted
  size: 10,
  page: 1,
  key: '',
  scope: 'all',
  data: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setOrder':
      return {
        ...state,
        order: action.payload,
      };
    case 'status':
      return {
        ...state,
        status: action.payload,
      };
    case 'setData':
      return {
        ...state,
        data: action.payload,
      };
    case 'setSize':
      return {
        ...state,
        size: action.payload,
      };
    case 'setKey':
      return {
        ...state,
        key: action.payload,
      };
    case 'setScope':
      return {
        ...state,
        scope: action.payload,
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
