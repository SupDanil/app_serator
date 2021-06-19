import React, {useEffect, useRef, useState} from 'react';
import {Text, StyleSheet, View, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as ReduxActions from '../reducer/functions';


export default function Result() {

    const NAME = useSelector(state => state.DataFetching.NAME)
    const dispatch = useDispatch();

    const transaction = useRef(new Animated.Value(0)).current
    const opacity = useRef(new Animated.Value(0)).current
    const textOpacity = useRef(new Animated.Value(0)).current


    useEffect(() => {
        setTimeout(function () {
            Animated.timing(transaction, {
                toValue: 300,
                useNativeDriver: true,
                duration: 2000,
            }).start();
            Animated.timing(opacity, {
                toValue: 1,
                useNativeDriver: true,
                duration: 2000,
            }).start();
        }, 1000);
        setTimeout(function () {
            Animated.timing(textOpacity, {
                toValue: 1,
                useNativeDriver: true,
                duration: 4000,
            }).start();
        }, 2700);

    }, []);


    return (
        <View>
            <Animated.View opacity={opacity} style={{
                // flex: 1,
                // justifyContent: 'flex-start',
                // textAlign: 'center',
                // alignItems: 'center',
                marginBottom: 300,
                transform: [{translateY: transaction}],
                // width:100,
                // height:100,
                // backgroundColor:'black',
            }}>
                <Text style={{fontSize: 60}}>{NAME}</Text>
            </Animated.View>
            <Animated.View opacity={textOpacity} style={{
                // flex: 1,
                // justifyContent: 'flex-start',
                textAlign: 'center',
                alignItems: 'center',
                marginBottom: 200,
                // transform: [{translateY: transaction}],
                // width:100,
                // height:100,
                // backgroundColor:'black',
            }}
            >
                <Text style={{fontSize: 50, marginBottom: 50}}>ЛОХ</Text>
            </Animated.View>
        </View>
    );


}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 345
    },
    inputTransparent: {

        display: 'none'
    },
    input: {
        fontSize: 40,
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
    }
});