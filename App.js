import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import image from './assets/logo.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterUser from './pages/Register';
import ResetPassword from './pages/forgotPassword';
import Landing from './pages/landingPage';
import More from './pages/moreDetails';
import Cart from './pages/cart';
import Order from './pages/order';
import Payment from './pages/payment';
import Profile from './pages/profile';
import { TouchableOpacity} from 'react-native';



function HomeScreen({navigation}) {
  const handleSignIn=()=>(
   navigation.navigate('landingPage')
  )
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={image} style={styles.logo} />
      </View>

      <View style={{ width: '100%', height: "50%", backgroundColor: "#0d0d0d", borderTopEndRadius: 50, borderBottomStartRadius: 50 , bottom:'40px'}}>
        <Text style={styles.signIn} >Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Adress" />

        <TextInput
          style={styles.input}
          placeholder="Password" />
        <Text style={{ color: "white", textAlign: 'center', margin: 10 }} onPress={()=>navigation.navigate('Register')}>Don't Have Account?</Text>

        <Text style={{ color: "white", textAlign: 'center', margin: 10 }} onPress={()=>navigation.navigate('forgotPassword')}>Forgot Password?</Text>

        <TouchableOpacity style={{
          backgroundColor: '#E10600',textAlign: 'center',padding: 7,marginTop: 10,width: "50%",textAlign: 'center',borderRadius: 5,alignSelf:'center'
        }}>
          <Text style={{color: 'white'}} onPress={handleSignIn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterUser} />
      <Stack.Screen name="landingPage" component={Landing}/>
      <Stack.Screen name="cart" component={Cart}/>
      <Stack.Screen name="payment" component={Payment}/>
      <Stack.Screen name="order" component={Order}/>
        <Stack.Screen name="forgotPassword" component={ResetPassword} />
        <Stack.Screen name="moreDetails" component={More} />
        <Stack.Screen name="profile" component={Profile} /> 


      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,    
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200
  },
  signIn: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight:"500",
    marginTop: 30
  },
  input: {
    width:"90%",
    color: "white",
    borderWidth: 5,
    padding: 10,
    margin: 3,
    borderBottomColor: "white",
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:8,
  },
});