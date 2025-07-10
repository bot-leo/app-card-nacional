// services/authService.ts
import api from './api';

type LoginPayload = {
    email: string;
    senha: string;
};

type RegisterPayload = {
    nome: string;
    nascimento: string;
    plano: string;
    cpf: string;
    email: string;
    senha: string;
};

export const login = async (payload: LoginPayload) => {
    console.log('payload', payload)
    const response = await api.post('/auth/login', payload);
    return response.data;
};

export const register = async (payload: RegisterPayload) => {
    const response = await api.post('/auth/register', payload);
    return response.data;
};
