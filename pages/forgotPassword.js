import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import icon from '../assets/logo.png'


function ResetPassword() {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={icon} style={styles.logo} />
            </View>

            <View style={{ width: '100%', height: "50%", backgroundColor: "#0d0d0d",  borderTopEndRadius: 50, borderBottomStartRadius: 50 , bottom:'40px' }}>
                <View style={{
                    width: '90%',
                    height: '80%', backgroundColor: '#0d0d0d',
                    alignSelf: "center",
                    marginTop: -120,
                    borderWidth: 1,
                    borderColor: "white",
                    borderTopStartRadius: 50, borderBottomEndRadius: 50 ,
                }}>
                    <Text style={styles.signIn}>Reset Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Adress" />

                    <Text style={{
                        backgroundColor: '#E10600',
                        color: 'white',
                        textAlign: 'center',
                        padding: 7,
                        marginTop: 10,
                        width: "50%",
                        alignSelf: 'center',
                        borderRadius: 5
                    }}>
                        Reset
                    </Text>
                </View>
                <Text style={{
                    backgroundColor: '#E10600',
                    color: 'white',
                    textAlign: 'center',
                    padding: 7,
                    marginTop: 50,
                    width: "50%",
                    alignSelf: 'center',
                    borderRadius: 5
                }}>
                    Sign In
                </Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: -100
    },
    signIn: {
        color: 'white',
        textAlign: "center",
        fontSize: 20,
        marginTop: 10
    },
    input: {
        color: 'white',
        borderWidth: 3,
        padding: 10,
        margin: 30,
        borderBottomColor: 'white',


    },
});

export default ResetPassword