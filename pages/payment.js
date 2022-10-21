import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
  } from "react-native";

const  Payment= ({route,navigation}) => {
    const {total}=route.params;
    const {cart}=route.params;
    console.log('cart',cart)

    return ( 
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <View
          style={{width: "100%", height: "45%", backgroundColor: "white", alignItems: "center", justifyContent: "center"}}
        >
                    <Image
                      source={
                        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        }
            style={styles.logo}
          />
          <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('landingPage')}>
          <Image
            source={
              require('../assets/back.png')
            }
            style={{width:20,height:20,marginLeft:'auto',marginRight:'auto'}}
          />
          
          </TouchableOpacity>
        
        </View>
            
        <View style={styles.wrapper}>
            <TouchableOpacity style={{width: '53px',height: '5px',background: '#E10600',borderRadius: '3px',marginTop: -15}}></TouchableOpacity>
            <Text style={{fontSize:22,fontWeight:400,marginTop:20}}>Payment</Text>
            <View style={styles.card}>
            <TextInput
                    style={{fontSize:16,fontWeight:600,width:220,textAlign:"center"}}
                    placeholder="Card number" />
            </View>
            <View style={{flexDirection:'row',width:'90%',justifyContent:"space-between",marginTop:20}}>
            <Text style={{fontSize:16,fontWeight:600}}>Expiry date</Text>
            <Text style={{fontSize:16,fontWeight:600}}>Secure code</Text>
            </View>
            <View style={styles.card}>
            <TextInput
                    style={{fontSize:16,fontWeight:600,width:67,textAlign:"center"}}
                    placeholder="MM/YY"/>
            
            <TextInput
                    style={{fontSize:16,fontWeight:600,width:60,textAlign:"center"}}
                    placeholder="000" />
            </View>
            
            <View style={{flexDirection:'row',width:'90%',justifyContent:"space-between",marginTop:20}}>
            <Text style={{fontSize:24,fontWeight:600}}>Total</Text>
            <Text style={{fontSize:24,fontWeight:700, color:'#28DE83'}}>R{total}.00</Text>
            </View>
            <TouchableOpacity style={{marginTop:'40'}}><Text style={{color:'#E10600', fontWeight:'600'}}>Make a New Order</Text></TouchableOpacity>
          <View style={styles.bottomView}>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={{color:'white',fontWeight:500}} onPress={()=>navigation.navigate('order',{cart:cart,total:total})}>Place Order</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
     
     
     );   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    logo: {
      width: "100%",
      height: "100%",
    },
    wrapper:{
      width: "100%",
      height: "70%",
      backgroundColor: "white",
      borderTopEndRadius: 49,
      padding: 25,
      position: "absolute",
      bottom: 0, 
      alignItems:'center'
    },
    bottomView:{
        position: 'absolute',
        width: '100%',
        height: '80px',
        left: '0px',
        bottom: 0,
        backgroundColor: '#0d0d0d',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
        },
      checkoutBtn:
      {
      width: 180,
      height: 38,
      backgroundColor: '#E10600',
      borderRadius: 8,
      textAlign:'center',
      padding:'1.6%',
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:20
      },
      back:{
      position: 'absolute',
      width: '40px',
      height: '40px',
      left: '22px',
      top: '41px',
      borderRadius:'50%',
      backgroundColor: '#fff',
      justifyContent:'center'
      },
      cart:{
        position: 'absolute',
        width: '52px',
        height: '52px',
        right: '30px',
        top: '41px',
        borderRadius:'50%',
        backgroundColor: '#fff',
        justifyContent:'center',
        flexDirection:'row',
      },
      card:
      {
        marginTop:20,
        width:'98%',
        height:60,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:'18',
        alignItems:'center',
        flexDirection:"row",
        justifyContent:"space-around",
        borderRadius:18,
        backgroundColor: 'rgba(217, 217, 217, 0.75)',
        elevation:5
    }
      
  });
  
 
export default Payment;