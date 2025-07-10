import { router } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export default function Planos() {
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            router.replace('/auth/login');
        }
    }, [user]);

    if (!user) return null;

    return (
        <View>
            <Text>Planos</Text>
        </View>
    );
}