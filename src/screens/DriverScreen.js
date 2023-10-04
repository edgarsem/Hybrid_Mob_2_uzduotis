import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View, Image } from 'react-native';
import { styles } from '../styles/StyleSheet';

function DriverScreen({ navigation, route }) {
  const [data, setData] = useState(route.params.drivers);

  const getPoints = (driver) => {
      const totalPoints = driver.reduce((accumulator, race) => {
        const pointsSum = race.qualification_points + race.tandem_points;
        return accumulator + pointsSum;
      }, 0);
      return totalPoints;
  };
  
  function sortAlphabetically() {
    const sortedData = [...route.params.drivers];
    sortedData.sort((a, b) => `${a.firstname} ${a.lastname}`.localeCompare(`${b.firstname} ${b.lastname}`));
    setData(sortedData);
  }

  function sortByPoints() {
    const sortedData = [...route.params.drivers];
    sortedData.sort((a, b) => getPoints(b.race) - getPoints(a.race));
    setData(sortedData);
  }


  useEffect(() => {
   navigation.setOptions({
     headerRight: () => (
        <View style={styles.sortButtonContainer}>
        <Pressable onPress={() => sortAlphabetically()}>
          <Image style={{height: 40, width: 40}} source={require('../assets/sort_alph.png')} />
        </Pressable>
        <Pressable onPress={() => sortByPoints()}>
          <Image style={{height: 40, width: 40}} source={require('../assets/sort_num.png')} />
        </Pressable>
      </View>
     )
   });
   }, [navigation]);


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.driver_id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Races', { race: item.race })
          }>
            <View style={styles.buttonContainer}>
              <View style={[styles.textContainer, {flex: 1}]}>
                <Text style={styles.textStyle}>Name:</Text>
                <Text style={styles.textStyle}>Car:</Text>
                <Text style={styles.textStyle}>Points:</Text>
              </View>
              <View style={[styles.textContainer, {flex: 2}]}>
                <Text style={{fontSize: 20}}>{item.firstname} {item.lastname}</Text>
                <Text style={{fontSize: 20}}>{item.car}</Text>
                <Text style={{fontSize: 20}}>{getPoints(item.race)}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

export default DriverScreen;
