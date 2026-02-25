import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('Pressed!');
    }
    return (
    
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({ pressed }) => 
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                } 
                onPress={pressHandler}
                android_ripple={{ color: '#640233' }}
            >

                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overFlow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#810945',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5},
        shadowRadius: 4,
        shadowOpacity: .25
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    },
});