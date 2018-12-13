import React from 'react'
import {Button, StyleSheet, Text, View } from 'react-native'

class Annonce extends React.Component{

    render(){
        console.log('render')
        return(
            <View style={styles.main_container}>
                <Text>Page d'annonce</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#27ae60',
        justifyContent: 'center'
    },
})

export default Annonce