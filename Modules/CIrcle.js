import HomeScreen from "./HomeScreen";
import Politics from "./Politics";
import React, {useEffect} from "react";
import {Text, Image, Animated, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import InterName from './InterName';
import * as ReduxActions from '../reducer/functions';
import Result from "./Result";

const CIRCLE_SIZE = 100;


const Circle = ({onPress, animatedValue, screen}) => {

    const dispatch = useDispatch();


    const ScreenSelector = (screen) => {

        switch (screen) {
            case 0:
                return <HomeScreen/>
            case 1:
                return <Politics/>
            case 2:
                return <InterName />
            case 3:
                return <Result />

        }
    }

    const CHECKED = useSelector(state => state.DataFetching.CHECKED);


    const inputRange = [0, 0.001, 0.5, 0.501, 1];
    const containerBg = animatedValue.interpolate({
        inputRange,
        outputRange: ['black', 'black', 'black', 'white', 'white']
    });
    const circleBg = animatedValue.interpolate({
        inputRange,
        outputRange: ['white', 'white', 'white', 'black', 'black']
    });


    return (
        <Animated.View style={[
            StyleSheet.absoluteFillObject,
            styles.circleContainer,
            {
                backgroundColor: containerBg,
            },
        ]}
        >
            {ScreenSelector(screen)}
            <Animated.View style={[
                styles.circle,
                {
                    // backgroundColor: circleBg,
                    backgroundColor: circleBg,
                    transform: [
                        {
                            perspective: 400,
                        },
                        {
                            rotateY: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: ['0deg', '-90deg', '-180deg'],
                            }),
                        },
                        {
                            scale: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: [1, 8, 1],
                            }),
                        },
                        {
                            translateX: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: ['0%', '50%', '0%'],
                            }),
                        },
                    ],
                },
            ]}
            >
                {/*<View style={CHECKED ? styles.redLine : styles.poopImg}></View>*/}
                <TouchableOpacity onPress={onPress}>
                    <View style={[styles.circle, styles.circleButton]}>
                        {/*<AntDesign name='arrowright' size={28} color={'white'}/>*/}

                        {CHECKED && screen == 1? <Text style={styles.poop}>💩</Text> : false}
                        {/*<Image*/}
                        {/*    style={styles.gifShit}*/}
                        {/*    source={require('./assets/ezgif.com-gif-maker.gif')}*/}
                        {/*/>*/}

                    </View>
                </TouchableOpacity>
                {/*{renderArrow(screen)}*/}
            </Animated.View>
        </Animated.View>
    )
}

export default Circle;

const styles = StyleSheet.create({
    poop: {
        fontSize: 50,
        paddingBottom: 10
    },
    redLine: {
        borderBottomColor: 'red'
    },
    gifShit: {
        height: 115,
        width: 115,
        borderRadius: 100,
        marginRight: 5,
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
    circle: {
        backgroundColor: '#444',
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
    },
    circleButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    }
});