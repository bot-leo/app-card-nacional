// app/(tabs)/home.tsx
import Button from '@/components/Button';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth/login');
    }
  }, [user, loading]);

  if (loading) return <Text>Carregando...</Text>;

  return (
    <View>
      <Text>Bem-vindo, {user?.email}</Text>
      <Button onPress={() => router.replace('/auth/login')} title='Sair' />
    </View >
  );
}
