import { createContext, useReducer, useEffect } from 'react';

const AppReducer = (state, action) => {
    
    // allows for various actions, as well as how the state changes accordingly
    // ... copies arrays, preserves previous state each time
    switch(action.type) {

        // adds a transaction, updates list
        case 'ADD_TRANS':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };

        // deletes transaction from list
        case 'DELETE_TRANS':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense)=>expense.id !== action.payload),
            }
        
        // allows user to input a budget    
        case 'CHANGE_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        
        // returns initial state    
        default:
            return state;
    }
};

// intializes everything in state, saves for specific user
const currState = {
    budget: localStorage.getItem('budget') ? localStorage.getItem('budget') : 0,
    expenses: JSON.parse(localStorage.getItem('expenses')) ? JSON.parse(localStorage.getItem('expenses')) : [],
}


export const AppContext = createContext();

/* allows data to be easily shared amongst the list & top displays
* in our case, state is global, meaning the budget and list of expenses can be
* accessed by all elements on the page
*/
export const AppProvider = (props) => {
    const[state, dispatch] = useReducer(AppReducer, currState);
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(state.expenses));
        localStorage.setItem('budget', state.budget);
    }, [state])

    return (
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
        }}> 
            {props.children}
        </AppContext.Provider>
    );
};