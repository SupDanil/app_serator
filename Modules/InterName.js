import React, {useEffect, useState} from 'react';
import {TextInput, StyleSheet, View,Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as ReduxActions from '../reducer/functions';


export default function InterName() {

    const [text, setText] = useState();
    const [showInput, setShowInput] = useState(false);
    const dispatch = useDispatch();

    const go =()=>{
        dispatch(ReduxActions.setUserName(text));
    }

    useEffect(() => {
        setTimeout(function () {
            setShowInput(true)
        }, 1000);
    }, []);


    return (
        <View style={ styles.container}>
            <Text style={showInput ? styles.textBlock : styles.inputTransparent}>Введите свое имя</Text>
            <TextInput
                style={showInput ? styles.input : styles.inputTransparent}
                onChangeText={setText}
                value={text}
                onSubmitEditing ={go}
            />
        </View>
    );


}

const styles = StyleSheet.create({
    block:{
        backgroundColor:'red',
        height: 100,
        width: 100,
        borderRadius : 50,
        marginTop: 345
    },
    inputTransparent: {

        display: 'none'
    },
    input: {
        fontSize:40,
        color: 'white',
        width: 250,
        margin: 5,
        borderWidth: 1,
        backgroundColor: 'black',
        borderBottomColor: 'white',
        textAlign: 'center',

    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 200,
    },
    circle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 8,
        paddingBottom: 100,
        backgroundColor: 'gold'
    },
    circleButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBlock:{
        color:'white'
    }
});