import { ADD_POTLUCK } from "../actions";
import {
    ADD_POTLUCK,
    NEW_USER,
    EDIT_POTLUCK,
    LOGIN,
    GET_POTLUCK,
    FETCH_START,
    FETCH_POTLUCK_SUCCESS,
    FETCH_FAIL,
    DELETE_POTLUCK
} from '../actions/index';

const initialState = {
    user: {
        username: '',
        password: '',
        
    },

    potluckList: [],
};

const reducer = (state = initialState, action) => {
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
            return ({
                ...state,
                isFetching: true,
                error: ''
            })
        case FETCH_POTLUCK_SUCCESS:
            return ({
                ...state,
                potluckList: action.payload,
                isFetching: false
            })
        case FETCH_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            })
        case ADD_POTLUCK:
            return {
                ...state,
                potlucks: [...state.potlucks, action.payload]
            };

        case GET_POTLUCK:
            return {
                ...state,
                equipment: [action.payload],
            };

        case EDIT_POTLUCK:
            const editItem = state.item.find((item) => item.id === action.payload);
            return {
                ...state,
                item: editItem,
            };

        case DELETE_POTLUCK:
            return {
                ...state,
                potluckList: state.potluckList.filter((potluck)=>potluck.potluck_id !==action.payload)
            }
        
        default:
            return state;
    }
};



export default reducer;













const initialState = {
    potlucks: [
        {
            id: 1, 
            potluckName: 'Neighborhood Potluck 1',
            date: '10/18',
            time: '5pm',
            location: 'The cul de sac',
            foods: ['item 1', 'item 2'],
            guests: ['guest 1', 'guest 2'] 
          },
          {
            id: 2, 
            potluckName: 'Neighborhood Potluck 2',
            date: '10/18',
            time: '5pm',
            location: '123',
            foods: ['item 1', 'item 2'],
            guests: ['guest 1', 'guest 2'] 
          },
          {
            id: 3, 
            potluckName: 'Neighborhood Potluck 3',
            date: '10/18',
            time: '5pm',
            location: '345',
            foods: ['item 1', 'item 2'],
            guests: ['guest 1', 'guest 2'] 
          }
    ]
}

export const potlucksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POTLUCK:
            return {
                ...state,
                potlucks: [...state.potlucks, action.payload]
            }
        default:
            return state;
    }
}