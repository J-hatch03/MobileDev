import React from "react";
import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const NestedText = () => {
    const [titleText, setTitleText] = useState("Have a Question?");
    const bodyText = "Well that stinks, there is no answer...";

    const onPressTitle = () => {
        if (titleText == "Have a Question?") {
            setTitleText("Have a Question? \nWell that stinks, there is no answer...");
        } else {
            setTitleText("Have a Question?");
        }
    };
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
            
            <Text style={styles.innerText} onPress={onPressTitle}> 
                {titleText}
                {"\n"}
            </Text>
            <Text style={styles.innerText} numberOfLines={5}></Text>
        </Text>
    </SafeAreaView>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    baseText: {
        fontWeight: 'bold',
    },
    innerText: {
        color: 'blue',
    },
});

export default NestedText;