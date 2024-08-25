import { StatusBar } from "expo-status-bar";
import { Avatar, Card, IconButton } from 'react-native-paper';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Home from "./components/home";
// built in components
export default function App() {
  const x = {
    name: "amira",
    age: 30,
  };

  handelClick = () => {
    alert("this is outer function");
  };
  return (
    <>
      {/* <ScrollView horizontal> */}
      <View style={styles.container}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => (
            <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
          )}
        />
        <Home></Home>
        {/* <View style={{ height: 100, width: 50, backgroundColor: "red" }}>
          <Text style={{ fontSize: 20 }}>1</Text>
        </View>
        <View style={{ height: 100, width: 50, backgroundColor: "green" }}>
          <Text style={{ fontSize: 20 }}>2</Text>
        </View>
        <View style={{ height: 100, width: 50, backgroundColor: "blue" }}>
          <Text style={{ fontSize: 20 }}>3</Text>
        </View> */}
      </View>
      {/* </ScrollView> */}
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SafeAreaView
          style={{
            marginTop: Platform.OS == "android" ? 30 : 0,
            height: 600,
            width: 600,
            backgroundColor: "green",
          }}
        >
          <Text>hello</Text>

          <Image source={require('./assets/img2.jpeg')} ></Image>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1695339147223-45c4218c9986?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              method: "GET",
              headers: {
                token: true,
              },
            }}
            style={{ width: 400, height: 400 }}
          ></Image>
        </SafeAreaView>
        <SafeAreaView
          style={{
            marginTop: Platform.OS == "android" ? 30 : 0,
            height: 600,
            width: 600,
            backgroundColor: "red",
          }}
        >
          <Text>hello</Text>
        </SafeAreaView>
        <SafeAreaView
          style={{
            marginTop: Platform.OS == "android" ? 30 : 0,
            height: 600,
            width: 600,
            backgroundColor: "blue",
          }}
        >
          <Text>hello</Text>
        </SafeAreaView>
      </ScrollView> */}
    </>
    // <View style={styles.container}>
    //   {console.error('hi from console')}
    //   {alert(`hello ${JSON.stringify(x)}`)}
    //   <Text style={{fontSize:30,color:'white'}} onPress={()=>console.log('text clicked')}>hello from react native </Text>
    //   <Text style={{fontSize:30,color:'white'}} onPress={handelClick}>hello from react native </Text>
    // </View>
  );
}

// const myStyles=StyleSheet.create({
//   container:{
//     backgroundColor:'blue'
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    marginTop: 30,
    // justifyContent:'space-between',
    // alignItems:'stretch'
  },
});
