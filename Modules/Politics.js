import React, {useEffect} from 'react';
import {Text, Animated, StyleSheet, View, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Checker from './Checker.js';
import { useDispatch, useSelector } from 'react-redux';



const CheckerComponent  = () => {

    const [checked, setChecked] = React.useState(false);

    // if(checked == true){
    //     App().onPress()
    // }
    return (
        <View style={styles.radioButtonAndTextContainer}>
            <View style={styles.radioButtonContainer}>
                <RadioButton
                    uncheckedColor="black"
                    color="green"
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked((prevState) => {
                        return !prevState
                    })}
                />
            </View>
            <Text style={styles.anatationText}>Мне больше 18 лет</Text>
        </View>
    );
};


export default function Politics() {

    const dispatch = useDispatch( );
    const user = useSelector(state => state.DataFetching.CHECKED);

    // const {CHECKED} = useSelector(state => ({
    //     CHECKED: state.appReducers.CHECKED,
    // }));


    const [allText, setAllText] = React.useState('')



    useEffect(() => {

        setTimeout(function () {
            setAllText(
                <View style={styles.textContainer}>
                    <Text style={styles.bigText}>ATTENTION!!!</Text>
                    <Text style={styles.text}>APPSERATOR</Text>
                    <Text style={styles.text}>был создан ради развлечения и не </Text>
                    <Text style={styles.text}>несёт своей целью кого-то оскорбить.</Text>
                    <Text style={styles.text}>С помощью нашего приложения вы </Text>
                    <Text style={styles.text}>сможете придумывать смешные </Text>
                    <Text style={styles.text}>прозвища для себя и своих друзей.</Text>
                    <Text style={styles.bigText}>HAVE FUN!!!</Text>
                    <Checker />
                </View>
            )
        }, 1000);
    }, []);


    return (
        <View style={styles.container}>
            <Text>{allText}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    anatationText: {
        paddingLeft: 10,
        fontSize: 15,
    },
    radioButtonAndTextContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 170

    },
    radioButtonContainer: {
        // backgroundColor: 'black',
        // height:20,
        // width:20,
        // borderRadius: 15,
        // textAlign: 'center',
        // alignItems: 'center',

        justifyContent: 'flex-start',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#e7e6e6',
        borderRadius: 50
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 200
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        textAlign: 'center',
        alignItems: 'center',
    },
    bigText: {
        fontSize: 22,
        color: 'red'
    },
    text: {
        fontSize: 17,
        color: 'black',

    }

})
