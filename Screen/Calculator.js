import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native';
import Refesh from '../Photo/repeat.png';

function Calculator() {
    return (
        <View style={styles.Body}>
            <View style={styles.Headers}>

            </View>
            <View style={styles.Displays}>
                <View style={styles.ShowsDisply}>
                    <ScrollView>
                        <Text style={styles.ResultCleck1}>gskuh</Text>
                        <Text style={styles.ResultCleck1}>ygdgqu</Text>
                        <Text style={styles.ResultCleck1}>gyigiuqg</Text>
                        <Text style={styles.ResultCleck1}>ygdgqu</Text>
                        <Text style={styles.ResultCleck1}>gyigiuqg</Text>
                        <Text style={styles.ResultCleck1}>ygdgqu</Text>
                        <Text style={styles.ResultCleck1}>gyigiuqg</Text>
                        <Text style={styles.ResultCleck1}>fuygfwe</Text>
                        <Text style={styles.ResultCleck1}>yefgweir</Text>
                        <Text style={styles.ResultCleck1}>fgifuigui</Text>
                    </ScrollView>
                    <Text style={styles.ResultCleck}>ygdgqu</Text>
                </View>
                <View style={styles.ShowsResult}>
                    <Text style={styles.ResultCleck} onPress>Result =</Text>
                </View>
            </View>
            <View style={styles.Keybords}>
                <View style={styles.KeybordRow}>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>AC</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>%</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>( )</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>/</Text>
                    </View>
                </View>
                <View style={styles.KeybordRow}>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>7</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>8</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>9</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>X</Text>
                    </View>
                </View>
                <View style={styles.KeybordRow}>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>4</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>5</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>6</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>-</Text>
                    </View>
                </View>
                <View style={styles.KeybordRow}>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>1</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>2</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>3</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>+</Text>
                    </View>
                </View>
                <View style={styles.KeybordRow}>
                    <View style={styles.KeybordColum}>
                       <Image source={Refesh} style={{height:'70%',width:'65%'}}></Image>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>0</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>.</Text>
                    </View>
                    <View style={styles.KeybordColum}>
                        <Text style={styles.KeybordText}>=</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    Body: {
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Headers: {
        height: '12%',
        width: '95%',
        margin: '1%',
        backgroundColor: 'black'
    },
    Displays: {
        height: '30%',
        width: '95%',
        margin: '1%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ShowsDisply: {
        height: '65%',
        width: '95%',
        margin: '1%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOffset: { height: 5, width: 2 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0
    },
    ShowsResult: {
        height: '20%',
        width: '95%',
        margin: '1%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOffset: { height: 5, width: 2 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0
    },
    ResultCleck: {
        fontSize: 20,
        marginLeft: '75%',
        shadowOffset: { height: 3, width: 0 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10
    },
    ResultCleck1: {
        fontSize: 15,
        marginLeft: '75%',
        shadowOffset: { height: 3, width: 0 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10
    },
    Keybords: {
        height: '50%',
        width: '95%',
        margin: '1%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    KeybordRow: {
        height: '15%',
        width: '95%',
        margin: '2%',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOffset: { height: 5, width: 2 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0
    },
    KeybordColum: {
        height: '90%',
        width: '20%',
        margin: '2%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOffset: { height: 5, width: 2 },
        shadowColor: '#000',
        shadowOpacity: 15,
        shadowRadius: 10,
        elevation: 0
    },
    KeybordText: {
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
        shadowOffset: { height: 5, width: 3 },
        shadowColor: '#000',
        shadowOpacity: 10,
        shadowRadius: 10
    }

});
