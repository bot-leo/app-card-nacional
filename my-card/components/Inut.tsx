// components/Input.tsx
import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

interface InputProps {
    label: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: 'default' | 'email-address' | 'numeric';
}

export default function Input({
    label,
    placeholder,
    secureTextEntry = false,
    value,
    onChangeText,
    keyboardType = 'default',
}: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    label: {
        marginBottom: 4,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
});
