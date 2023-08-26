import { Pressable, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps {
    onPress: () => void;
    text: string;
    style?: StyleProp<ViewStyle>;
}

export default function Button(props: ButtonProps) {
    return (
        <Pressable onPress={props.onPress} style={[styles.button, props.style]}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        backgroundColor: 'dodgerblue',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 5,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    }
});
