import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-04-08')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 35.46,
        date: new Date('2025-01-08')
    },
    {
        id: 'e3',
        description: 'Strawberries',
        amount: 10.99,
        date: new Date('2025-08-01')
    },
    {
        id: 'e4',
        description: 'A Book',
        amount: 24.99,
        date: new Date('2026-01-08')
    },
    {
        id: 'e5',
        description: 'Another Book',
        amount: 17.99,
        date: new Date('2026-02-10')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-04-08')
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 35.46,
        date: new Date('2025-01-08')
    },
    {
        id: 'e8',
        description: 'Strawberries',
        amount: 10.99,
        date: new Date('2025-08-01')
    },
    {
        id: 'e9',
        description: 'A Book',
        amount: 24.99,
        date: new Date('2026-01-08')
    },
    {
        id: 'e10',
        description: 'Another Book',
        amount: 17.99,
        date: new Date('2026-04-9')
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    deleteExpense: (id) => {},
    updateExpenses: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'Add':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]; 
        case 'Update':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data }
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem; 
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
    console.log(expensesState)
    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: {id: id, data: expenseData} })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return (
        <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;