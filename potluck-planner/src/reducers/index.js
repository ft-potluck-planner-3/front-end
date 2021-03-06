import {
  ADD_POTLUCK,
  NEW_USER,
  EDIT_POTLUCK,
  LOGIN,
  GET_POTLUCK,
  FETCH_START,
  FETCH_POTLUCK_SUCCESS,
  FETCH_FAIL,
  DELETE_POTLUCK,
  DELETE_POTLUCK_CONFIRM,
  DELETE_POTLUCK_CANCEL,
  TOGGLE_COMING,
  TOGGLE_BROUGHT
} from "../actions/index";

const initialState = {
  user: {
    username: "",
    password: "",
  },
  potlucks: [
    {
      id: 1,
      potluckName: "Neighborhood Potluck 1",
      date: "10/18",
      time: "5pm",
      location: "The cul de sac",
      foods: [{ food: "apple", isBrought: false }],
      guests: [{ guest: "John", isComing: false }],
    },
    {
      id: 2,
      potluckName: "Neighborhood Potluck 2",
      date: "10/18",
      time: "5pm",
      location: "123",
      foods: [{ food: "apple", isBrought: false }],
      guests: [{ guest: "John", isComing: false }],
    },
    {
      id: 3,
      potluckName: "Neighborhood Potluck 3",
      date: "10/18",
      time: "5pm",
      location: "345",
      foods: [{ food: "apple", isBrought: false }],
      guests: [{ guest: "John", isComing: false }],
    },
  ],
  showModal: false,
};

const potlucksReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_POTLUCK_SUCCESS:
      return {
        ...state,
        potluckList: action.payload,
        isFetching: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ADD_POTLUCK:
      return {
        ...state,
        potlucks: [...state.potlucks, action.payload],
      };

    case GET_POTLUCK:
      return {
        ...state,
        equipment: [action.payload],
      };

    case EDIT_POTLUCK:
      return {
        ...state,
        potlucks: state.potlucks.map((potluck) => {
          if (potluck.id !== action.payload.id) {
            return potluck;
          } else {
            return action.payload
          }
        }),
      };

    case DELETE_POTLUCK:
      return {
        ...state,
        showModal: true,
      };

    case DELETE_POTLUCK_CONFIRM:
      return {
        ...state,
        potlucks: state.potlucks.filter(
          (potluck) => potluck.id !== action.payload
        ),
        showModal: false,
      };

    case DELETE_POTLUCK_CANCEL:
      return {
        ...state,
        showModal: false,
      };

    case TOGGLE_COMING:
      return {
        ...state,
        potlucks: state.potlucks.map((potluck) => {
          if (potluck.id !== action.payload.id) {
            return potluck;
          } else {
            return action.payload
          }
        }),
      };

      case TOGGLE_BROUGHT:
      return {
        ...state,
        potlucks: state.potlucks.map((potluck) => {
          if (potluck.id !== action.payload.id) {
            return potluck;
          } else {
            return action.payload
          }
        }),
      };

    default:
      return state;
  }
};

export default potlucksReducer;
