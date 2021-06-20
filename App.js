import {StatusBar} from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import {AntDesign} from '@expo/vector-icons';
import {Text, Image, Animated, StyleSheet, View, TouchableOpacity} from 'react-native';
import Politics from './Modules/Politics.js';
import HomeScreen from './Modules/HomeScreen.js';
import * as ReduxActions from './reducer/functions'
import {bindActionCreators} from 'redux';
import Circle from "./Modules/CIrcle.js";


/* REDUX */
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux';
import appReducers from './reducer/reducer'

const middlewares = [thunk];
const store = createStore(appReducers, applyMiddleware(...middlewares))

export default function App() {

    const [screen, setScreen] = useState(0)

    const animatedValue = useRef(new Animated.Value(0)).current
    const animation = (toValue) => Animated.timing(animatedValue, {
        toValue,
        duration: 2000,
        useNativeDriver: false
    });
    const [index, setIndex] = useState(0);
    const onPress = () => {
        setScreen(prevState => {
            if (screen == 3){
                setScreen(0);

            }else{
                return prevState + 1

            }

        })
        setIndex(index === 1 ? 0 : 1);
        animation(index === 1 ? 0 : 1).start();
    };

    return (

            <View style={styles.container}>
                <StatusBar style='auto' hidden/>
                <Provider store={store}>
                <Circle onPress={onPress} animatedValue={animatedValue} screen={screen}/>
                </Provider>
            </View>
    );
}

const styles = StyleSheet.create({

    gifShit: {
        height: 115,
        width: 115,
        borderRadius: 100,
        marginRight: 5
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    circleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 8,
        paddingBottom: 100,
        backgroundColor: 'gold'
    },

});




