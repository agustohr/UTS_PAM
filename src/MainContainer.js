import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/Beranda';
import Detail from './screen/Detail';
import Confirm from './screen/Konfirmasi';
import Order from './screen/Order';
// import Batal from './screen/Batal'

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Confirm" component={Confirm} />
            <Stack.Screen name="Order" component={Order} />
            {/* <Stack.Screen name="Batal" component={Batal} /> */}
        </Stack.Navigator>
    );
};

export default ScreenStack;