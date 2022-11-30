export const initialState = {
  order: 'remaining_days',
  status: 'all', // unconsulted
  per_page: 10,
  page_number: 1,
  data: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setData':
      return {
        ...state,
        data: action.payload,
      };
    case 'order':
      return {
        ...state,
        order: action.payload,
      };
    case 'status':
      return {
        ...state,
        status: action.payload,
      };
    case 'per_page':
      return {
        ...state,
        per_page: action.payload,
      };
    case 'page_number':
      return {
        ...state,
        page_number: action.payload,
      };
    default:
      return state;
  }
};
