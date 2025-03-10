import { 
  Image, 
  StyleSheet, 
  Platform, 
  View, 
  Text, 
  FlatList,
  ActivityIndicator } from 'react-native';

import { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';
const ayahData = require('./ayah.json'); 

import useFetchData from './useFetchData';
import useGETAPI from './useGETApi';

export default function HomeScreen() {

  const {data, loading} = useGETAPI('https://api.alquran.cloud/v1/quran/en.asad');
  
  // const {data, loading} = useFetchData('https://api.alquran.cloud/v1/quran/en.asad');

  const Item = ({items}) => (
    <View style={styles.item}>
      <View style={{backgroundColor:'red', flex:0.90, flexDirection:'row'}}>
        <View style={{flex:0.50, backgroundColor:'grey'}}>
        <Text style={{color:'white'}}>{items.name}</Text>
        {/* <Text style={{color:'white'}}>{items.Translation}</Text> */}

        </View>
        <View style={{flex:0.50, backgroundColor:'white'}}>
        <Text style={{color:'black'}}>{items.englishName}</Text>

        </View>
      </View>
      <View style={{backgroundColor:'white', flex:0.10}}>
        {/* <Text>{items.ParahNumber}</Text> */}
        <Text>{items.englishNameTranslation}</Text>

      </View>
    </View>
);

  // const getQuranFromApiAsync = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://api.alquran.cloud/v1/quran/en.asad',
  //     );
  //     const json = await response.json();
  //     setData(json.data.surahs);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    // getQuranFromApiAsync();
  },[]);

  return (

    <View style={styles.container}>
      {console.log('We are in Return == ')}
      {
        loading ? (
          <ActivityIndicator 
          size="large" 
          color="white" 
          style={
            { 
              flex: 1, 
              justifyContent: "center", 
              alignItems: "center" }}
          />
        ):(
        <FlatList
          data={data}
          renderItem={({item}) => <Item items={item} />}
          keyExtractor={item => item.id}
        />
        )
      }

    </View>


    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  item: {
    flex:1,
    backgroundColor: 'green',
    height: 100,
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    // justifyContent:'center',
    // alignItems:'center'
  },
  innerTop:{
    flex:0.90,
    flexDirection:'row',
    backgroundColor:'red'
  },
  innerBottom:{
    flex:0.10,
    backgroundColor:'green'
  },
  english:{
    flex:0.50,
    backgroundColor:'grey'
  },
  arabic:{
    flex:0.50,
    backgroundColor:'white'
  },
  title: {
    fontSize: 32,
  },
});
