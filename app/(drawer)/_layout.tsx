import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            title: 'Contact',
            headerShown: true,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
