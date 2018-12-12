import React from 'react'
import { createStackNavigator, createAppContainer} from 'react-navigation'
import Menu from '../Components/Menu'

const MenuStackNavigator = createStackNavigator({
    Menu: {
        screen: Menu
    }
})

const AppContainer = createAppContainer(MenuStackNavigator)

export default AppContainer