import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { login as loginService } from '../../services/authService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            console.log('email', email)
            console.log('senha', senha)
            const data = await loginService({ email, senha });

            console.log('data', data)
            await login(data);
            router.replace('/(tabs)/home');
        } catch (error: any) {
            Alert.alert('Erro ao logar', error?.response?.data?.message || 'Tente novamente');
        }
    };

    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
            <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} value={senha} />
            <Button title="Entrar" onPress={handleLogin} />
            <TouchableOpacity onPress={() => router.push('/auth/register')}>
                <Text>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    );
}
