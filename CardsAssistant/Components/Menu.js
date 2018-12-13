import React from 'react'
import {Button, StyleSheet, Text, View } from 'react-native'

class Menu extends React.Component{

    render(){
        console.log('render')
        return(
            <View style={styles.main_container}>
                <Text style={styles.title}>Guide d'utilisation</Text>
                <Text style={styles.guide}>1. Selectionne le joueur qui commence.</Text>
                <Text style={styles.guide}>2. Entre les différentes annonces.</Text>
                <Text style={styles.guide}>3. Prend en photo ton jeu.</Text>
                <Text style={styles.guide}>4. Fait le meilleur choix !</Text>
                
                <View style={styles.bouton}>
                <Button
                    onPress={()=>{this.props.navigation.navigate('Annonce')}}
                    title="Coinche assistant"
                    color="#1abc9c"
                />
                </View>
                <View style={styles.bouton}>
                <Button
                    onPress={()=>{console.log("bouton")}}
                    title="Crédits"
                    color="#1abc9c"
                />
                </View>
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
    bouton: {
        marginTop: 30
    },
    guide: {
        color: '#FFFFFF'
    },
    title: {
        color: '#FFFFFF'
    }
})

export default Menu