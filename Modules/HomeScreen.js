import React, {useEffect,useState} from 'react';
import {Image, Text, StyleSheet, View,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Checker from "./Checker";


export default function HomeScreen() {

    const [text, setText] = useState()

    useEffect(() => {

        setTimeout(function () {
            setText(
                <View style={styles.imagesConteiner}>
                    <Image
                        style={styles.logoImg}
                        source={require('../assets/logo.png')}
                    />
                    <Image
                        style={styles.poopImg}
                        source={require('../assets/poop.gif')}
                    />
                </View>
            )
        }, 1700);
    }, []);

    return (

        <View style={styles.container}>
            {text}
        </View>
    );
}

const styles = StyleSheet.create({

    poopImg:{
        height: 150,
        width: 150,
        marginBottom: -30
    },
    imagesConteiner:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 30,
        paddingTop: 200,
        color: 'black'
    },
    logoImg: {
        marginTop: 200,

    }

});
