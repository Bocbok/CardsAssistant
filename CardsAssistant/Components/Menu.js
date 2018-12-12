import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Menu extends React.Component{

    render(){
        return(
            <View style={styles.main_container}>
                <Text>Menu !</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center'
    },
})

export default Menu