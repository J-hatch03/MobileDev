import { View, FlatList, StyleSheet } from 'react-native';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

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
    }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
});