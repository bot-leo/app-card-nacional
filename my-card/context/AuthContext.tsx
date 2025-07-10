// AuthContext.tsx
import * as SecureStore from 'expo-secure-store';
import React, { createContext, useContext, useEffect, useState } from 'react';

type User = { email: string };
type AuthContextType = {
    user: User | null;
    login: (userData: User) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => { },
    logout: async () => { },
    loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // <- controle de carregamento

    useEffect(() => {
        const loadUser = async () => {
            const data = await SecureStore.getItemAsync('user');
            if (data) setUser(JSON.parse(data));
            setLoading(false); // <- só libera a renderização depois disso
        };
        loadUser();
    }, []);

    const login = async (userData: User) => {
        await SecureStore.setItemAsync('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
