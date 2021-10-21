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
    DELETE_POTLUCK_CANCEL
} from '../actions/index';

const initialState = {
    user: {
        username: '',
        password: '',
        
    },
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
    ],
    showModal: false
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
            return {
                ...state,
                potlucks: state.potlucks.map(potluck => {
                    if (potluck.id !== action.payload.id) {
                        return potluck
                    } else {
                        return {
                            ...potluck,
                            [potluck.date]:action.payload.date,
                            [potluck.time]:action.payload.time,
                            [potluck.location]:action.payload.location
                        }
                    }
                })
            };

        case DELETE_POTLUCK:
            return {
                ...state,
                showModal: true
            }
        
        case DELETE_POTLUCK_CONFIRM:
            return {
                ...state,
                potlucks: state.potlucks.filter((potluck)=>potluck.id !==action.payload),
                showModal: false
            }

        case DELETE_POTLUCK_CANCEL:
            return {
                ...state,
                showModal: false
            }
        
        default:
            return state;
    }
};



export default potlucksReducer;