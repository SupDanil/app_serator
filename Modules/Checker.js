import React, {useState, useRef} from 'react';
import {Text, StyleSheet, View, } from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import * as ReduxActions from '../reducer/functions';


export default function Checker() {

    const dispatch = useDispatch();
    const CHECKED = useSelector(state => state.DataFetching.CHECKED);
    const [checker, setChecker] = useState(true);


    const onClick = () => {

        setChecker((prevState) => {
            return !prevState
        })

        dispatch(ReduxActions.ageConfirmed(checker))
    }


    return (
        <View style={styles.radioButtonAndTextContainer}>
            <View style={styles.radioButtonContainer}>
                <RadioButton
                    uncheckedColor="black"
                    status={checker ?  'unchecked': 'checked'}
                    color="green"
                    onPress={onClick}
                />
            </View>
            <Text style={styles.anatationText}>Мне больше 18 лет</Text>
        </View>
    );

};
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

});

