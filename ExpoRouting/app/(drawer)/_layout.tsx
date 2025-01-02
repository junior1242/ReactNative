
import React from 'react'
import {Drawer} from 'expo-router/drawer'
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
    return(
        <GestureHandlerRootView >
            <Drawer>
                <Drawer.Screen name='index' options={{
                    drawerLabel: "Home",
                }}  />
                <Drawer.Screen name='Setting' options={{
                    drawerLabel: "Setting",
                }}  />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default _layout