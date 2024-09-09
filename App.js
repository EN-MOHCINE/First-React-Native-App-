import React, { useState } from 'react';
import  App1  from './components/App1';
import { WebView } from 'react-native-webview';
import Modal from "react-native-modal";
import 
    { SafeAreaView, StyleSheet, Image, Text, 
      TouchableOpacity,StatusBar ,
      // Button  ,
    View, ImageBackground,
    Button,
    ActivityIndicator,
    Alert,
    Dimensions,
    Platform,
    Switch, 
    // ScrollView, 
    // Pressable
    } from 'react-native';
// const testprofile = require('./assets/testprofil.jpg');
import test  from './assets/testprofil.jpg' ;
import Appdynamic from './DynamicUI/Appdynamic';
import { FlatList, ScrollView, SectionList, TextInput } from 'react-native-web';
import data from './data.json';








const App = () => {
  const [count, setCount] = useState(0);
  const [isModalevisible ,setisModalevisible] = useState(false);
  const [dateUpdate, setDateUpdate] = useState(formatDate(new Date()));
  const [Nametext ,setNametext] =useState('') 
  function formatDate(date) {
    return (
      date.getDate() +
      '/' +
      (date.getMonth() + 1) +
      '/' +
      date.getFullYear() +
      ' ' +
      (date.getHours()) +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds()
    );
  }

  function onIncrement() {
    setCount(count + 1);
    setDateUpdate(formatDate(new Date()));
  }

  function onDecrement() {
    setCount(count - 1);
    setDateUpdate(formatDate(new Date()));
  }
  function afficheData() {
    console.log(data);
  }
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* image  */}
      <View style={styles.header}>
        <Text style={styles.text}>Mohcine ennefai</Text>
        <Image source={{
          uri :"https://dequeuniversity.com/assets/images/accessibility_fundamentals/books-600.jpg"}} style={styles.imgpfrl} />
        <ImageBackground source={test} style={styles.imgpfrl} >
          <Text>06</Text>
        </ImageBackground>
      </View>


      {/* User Another components  */}
      <View style ={[styles.app1 ,styles.text ]}>
          <App1 name="Mohcine" />
          <App1 name="Aymane" />
        </View>
    

        <ScrollView>
          {/* Map */}
        {/* <View>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <Text>type: {item.type}</Text>
              <Text>name: {item.name}</Text>
            </React.Fragment>
          ))}
          <Button title="affiche data" onPress={afficheData} />
        </View> */}
      </ScrollView>


      {/* flat list  */}
      {/* <ScrollView> */}

      {/* <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <>
              <Text>type: {item.type}</Text>
              <Text>name: {item.name}</Text>
              <Text> <ul>power: {item.power.map((item)=>(<li>{item}</li>))}</ul></Text>
            </>
          )}
          //separator  item 
          ItemSeparatorComponent ={ <View style={{ height: 16, backgroundColor: 'gray' }}  /> }   
          // empty  component 
          ListEmptyComponent  ={<Text>No  data found </Text>}
          // header component 
          ListHeaderComponent ={<Text style={styles.headerComponent}>Shows all Pokemone </Text>}
          // footer component 
          ListFooterComponent ={<Text style={styles.headerComponent}>End of List </Text>}
          
          
          // horizontal
          /> */}

      {/* <View>
      <SectionList
          sections={data}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
          // renderSectionHeader={({ section }) => (
          //   <Text style={styles.headerComponent}>{section.type}</Text>
          // )}
          itemseparatorComponent
          sectioneparatorComponent
        />
      </View> */}
          {/* </ScrollView> */}
    
          {/* Dynamic ui   */}
        {/* <View >
            <Appdynamic  />
            </View> */}





      {/* forms */}

        <TextInput style={styles.inputtext} value={Nametext}
        placeholder="Enter your name"
        // disabled
        // secureTextEntry
        // KeyboardType="Phone" 
        autoCapitalize="none"
        autoCorrect={false}
        
        onChangeText={setNametext} />
        <Text>My name is  : {Nametext}</Text>
        <TextInput
        placeholder="Message"
        multiline
        style = {{ minHeight: 100, borderColor: 'gray'
        ,textAlignVerticale :"top", borderWidth: 1 }}
        />

{/*     <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}








      <View style={styles.container}>
        
        {/* Text Style: */}
        <Text style={styles.text1}>
        Hello,{"\n"}
        Welcome to the application increment counter{"\n"}
        Count: {count}
      </Text>

        {/* button */}
        <TouchableOpacity style={styles.button} onPress={onIncrement}>
          <Text style={styles.buttonText}>Click Here to Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={onDecrement}>
          <Text style={styles.buttonText}>Click Here to Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "gray" }} onPress={()=>setisModalevisible(true)}>
        <Text style={styles.buttonText}>Detail</Text>
      </TouchableOpacity>
        

        {/* Activity Indicator : "loading " */}
        {/* <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="small" color="#0000ff" />
          <ActivityIndicator size="large" color="#00ff00" />
        </View> */}


        


        {/* scroll view  */} 
        {/*   Passable :  we can  add features for designe  "onPressIn" -"onPressOut" -"onPress"   */} 
          {/* <Pressable  onPress={()=>{console.log("image pressed")}}>
            <ScrollView style ={styles.scrolview} >
              <Text>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum 
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum  Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quisque faucibus purus non
                libero facilisis
                Lorem emptio, mauris non bibendum 
                </Text>  
            </ScrollView>
          </Pressable>  */}

        </View>

      <View>

      {/* Button */}
      {/* <Button title=" Details" color="midnightblue"  onPress={() => console.warn('hello ')} /> */}
             {/* disabled */}

      </View>

      {/*Afficher text   */}
      <Text style={[styles.dateStyle ,styles.text]}>{` Last update: ${dateUpdate}`}</Text>


      {/* WebView :afficher site web in  mobile comme iframe html  */}
        {/* <WebView
          style={styles.container}
          source={{ uri: 'https://dequeuniversity.com/library/responsive/1-non-responsive' }}
        /> */}


      {/* Modal */}
      <View>
      <Modal isVisible={isModalevisible}
        onRequestClose = {()=>setisModalevisible(false)}
        animationType ="animationIn">
        <View style={{ flex: 1 ,backgroundColor:"lightblue" ,padding :60 }}>
          <Text>I am the modal content!</Text>
          <Button title='close' onPress={()=>setisModalevisible(false)}/>
        </View>
      </Modal>
        
        {/* Alert */}
        <View style={{backgroundColor:"Blue"}}>
          <Button title ="Alert" onPress={()=>Alert.alert("Confirme Votre Commande " ,"N° Commande :321312 " ,
            [
              {text: 'Cancel', style: 'cancel',
                onPress: () => console.log('Commande annulée!') ,
              },
              {text: 'OK', onPress: () => console.log('Commande confirmée!') },
            ]
          )}>

          </Button>
        </View>

    {/* status bar  */}
      {/* <View> */}
        {/* <StatusBar barStyle="dark-content"   backgroundColor="lightgreen"/> */}
                          {/* Hidden */}
      {/* </View> */}



    </View>

    </SafeAreaView>
  );
}


const  windowWidth = Dimensions.get('window').width;
const  windowheight = Dimensions.get('window').height;
//style css 
const styles = StyleSheet.create({

  // fixe problem  status bar  
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    // plaftorm.OS getting the OS specific status bar height
    paddingTop: Platform.OS === 'ios'? 100 : 50,
  },

  //separtion systeme ios and android 
  text1: {
    ...Platform.select ({
      android :{
        color: 'blue',
        fontSize: 20,
        fontStyle : 'italic',
      } ,
      ios :{
        color: 'red',
        fontSize: 30,
        fontStyle :'modern',
      }
    } ,)
    
    }
    ,
  horizontal :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }, 
  appdynamic :{
    flex :1 ,
    width : windowWidth >500 ? "70%" :"90%" ,
    height : windowheight >500 ? "70%" :"90%",
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgpfrl: {
    borderRadius: 50,
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    // marginBottom: 10,
    textAlign: 'center',
    margin: 20,
    
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    margin:10 ,
  },
  button1: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  dateStyle: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  scrolview :{
    padding: 10,
    margin: 10,
  } ,
  app1 :{
    backgroundColor: "coral",
    // width: "%",
    height: 50,
    paddingHorizontal :"50",
    paddingVertical :"1",
    borderRadius: 10,
    marginHorizontal :30,
    marginRight :90 ,
    justifyContent: "center",
    alignItems: "center" ,
    // add Box shadow 
    shadowColor :"black" ,
    shadowOffset:{ width:2 ,height:2 },
    shadowOpacity:0.5 ,
    shadowRadius:4 ,
    elevation: 2,
  } ,
  headerComponent :{
    textAlign :"center" ,
    justifyContent: "center",
    backgroundColor :"lightblue",
    
  
    elevation: 2,
  } ,
  inputtext :{
    width: "90%",
    paddingHorizontal: 10,
    color: "black", // Changed `textColor` to `color` as per React Native TextInput prop
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5
  }

});

export default App;