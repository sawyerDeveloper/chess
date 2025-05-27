import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        options={{
          title: 'Chess',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 25 },
        }}
        name='index'
      />
    </Stack>
  );
}
