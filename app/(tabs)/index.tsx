import { Image, StyleSheet, Platform, View, Text, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const ayahData = require('./ayah.json'); 

export default function HomeScreen() {

  console.log(ayahData[0]);

  const DATA = [
    {
      id: 'bd7acbea-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fifth Item',
    },

    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Sixth Item',
    },

    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Seventh Item',
    },

    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '8th Item',
    }

  ];

  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <View style={{backgroundColor:'red', flex:0.90, flexDirection:'row'}}>
        <View style={{flex:0.50, backgroundColor:'grey'}}>
        <Text style={{color:'white'}}>English</Text>

        </View>
        <View style={{flex:0.50, backgroundColor:'white'}}>
        <Text style={{color:'white'}}>Arabic</Text>

        </View>
      </View>
      <View style={{backgroundColor:'blue', flex:0.10}}>
        <Text>Parah Number</Text>
      </View>
    </View>
);

  // type ItemProps = {title: string};

  // const Item = ({title}: ItemProps) => (
  //   <View style={styles.item}>
  //     <View style={styles.innerTop}>
  //       <View style={styles.english}>
  //       <Text>English Quran</Text>
  //       </View>
  //       <View style={styles.arabic}>
  //       <Text>Arabic Quran</Text>
  //       </View>
  //     </View>
  //     <View style={styles.innerBottom}>
  //     <Text> Testing </Text>
  //     </View>
  //     {/* <Text style={styles.title}>{title}</Text> */}
  //   </View>
  // );
  return (

    <View style={styles.container}>
      <Text> In the name of Allah </Text>

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

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
