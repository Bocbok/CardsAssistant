import React from 'react'
import { Button ,StyleSheet, Image, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'

class TakePhoto extends React.Component{

    constructor(props){
        super(props)
        /* this.state = {
            jeuSrc: "/image"
        } */
    this._photoClicked = this._photoClicked.bind(this)
    }


    _displayImage(){
        if(this.props.jeuSrc.uri)
        return(
            <Image source={{uri: this.props.jeuSrc.uri}}
                style={styles.Image}
            />)
    }
    

    _photoClicked(){
          ImagePicker.showImagePicker({}, (response)=>{
            if(response.didCancel){
                //console.log('L\'utilisateur a annulé')
            }
            else if(response.error){
                //console.log('Erreur : ', response.error)
            }
            else {
                const action = { type: "PHOTO_TAKEN", value: {
                    uri: response.uri,
                    name: response.fileName,
                    type: response.type}}
                this.props.dispatch(action) 
                //console.log(this.props)
            }
        })
    }

    render(){
            return(
                <View style={styles.main_container}>
                    {this._displayImage()}
                    <Button
                        onPress={this._photoClicked}
                        title="Envoyer le jeu"
                    />
                </View>
            )
    }
}


const styles = StyleSheet.create({
    Image: {
        height: 100,
        width: 100,
    },
    main_container:{
        flex: 1
    }
})

const mapStateToProps = (state) => {
    return{
        jeuSrc: state.jeuSrc
    }
}

export default connect(mapStateToProps)(TakePhoto)