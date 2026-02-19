import {Platform, Text, View, StyleSheet, StatusBar} from 'react-native';


export default function App() {
    return (
        <View style={{flex: 1}}>
            <View
                style={{
                    backgroundColor: 'red',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ...Platform.select({
                        ios: { paddingTop:50},
                        android: {paddingTop: StatusBar.currentHeight }
                    })
                }}>
                <Text>Header</Text>
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'lightblue',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                <Text>Scrollable Content</Text>
            </View>
            <View style={{ flexDirection:'row', backgroundColor: 'lightgray' }}>
                <View style={{ flex: 1, backgroundColor: 'green', padding: 20, alignItems: 'center' }}>
                    <Text>Button 1</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'yellow', padding: 20, alignItems: 'center' }}>
                    <Text>Button 2</Text>
                </View>
            </View>
        </View>
    );
}
