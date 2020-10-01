import { RESOURCE_FETCH_SUCCESS, VOTE_STATUS_SUCCESS } from '../../components/redux/types';
import { CHANGE_LOCALE_MSGS } from '../../i18n';

export const initialState = {
  // formdata: [],
  // ticketgroups: [],
  // companies: [],
  // tickets: [],
  // photos: [],
  // bookingmap: [],
  // exhibitors : [],
  // presenters: [],
  // presenters_all: [],
  // texts : {},
  // contestant_companies : [],
  // report : [],
  // jurors: []
};

const reducer = (state = initialState, action) => {
  const { type, resource, data } = action;

  switch (type) {

    case RESOURCE_FETCH_SUCCESS:
      return { ...state, [resource]: data };
    break;

    case VOTE_STATUS_SUCCESS:
      return { ...state, "votes" : data};
    break;

    case CHANGE_LOCALE_MSGS:
        return { ...state, texts: action.messages };
    break;

    default:
      return state;
  }
};

export default reducer;
