import { router } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export default function Suporte() {
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            router.replace('/auth/login');
        }
    }, [user]);

    if (!user) return null;

    return (
        <View>
            <Text>Suporte</Text>
        </View>
    );
}