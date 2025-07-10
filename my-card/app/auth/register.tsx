import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { register as registerService } from '../../services/authService';

export default function Register() {
    const [form, setForm] = useState({
        nome: '',
        nascimento: '',
        plano: '',
        cpf: '',
        email: '',
        senha: '',
    });
    const router = useRouter();

    const handleChange = (key: string, value: string) => {
        setForm({ ...form, [key]: value });
    };

    const handleRegister = async () => {
        try {
            await registerService(form);
            Alert.alert('Cadastro realizado', 'Você já pode fazer login');
            router.replace('/auth/login');
        } catch (error: any) {
            Alert.alert('Erro ao cadastrar', error?.response?.data?.message || 'Tente novamente');
        }
    };

    return (
        <View>
            <Text>Cadastro</Text>
            <TextInput placeholder="Nome completo" onChangeText={v => handleChange('nome', v)} />
            <TextInput placeholder="Nascimento" onChangeText={v => handleChange('nascimento', v)} />
            <TextInput placeholder="Plano (Básico ou Premium)" onChangeText={v => handleChange('plano', v)} />
            <TextInput placeholder="CPF" onChangeText={v => handleChange('cpf', v)} />
            <TextInput placeholder="Email" onChangeText={v => handleChange('email', v)} />
            <TextInput placeholder="Senha" secureTextEntry onChangeText={v => handleChange('senha', v)} />
            <Button title="Cadastrar" onPress={handleRegister} />
        </View>
    );
}
