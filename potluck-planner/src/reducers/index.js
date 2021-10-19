import { ADD_POTLUCK } from "../actions";

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