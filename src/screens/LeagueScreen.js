import React, { useState, useEffect } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { styles } from '../styles/StyleSheet';
import { getDataFromStorage } from '../utils/DataManager';

function LeagueScreen({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const gottenDriftData = await getDataFromStorage();
      if (gottenDriftData) {
        setData(gottenDriftData);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.league_id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Drivers', {drivers: item.drivers})
            }
          >
            <View style={[styles.textContainer, {borderWidth: 5, height: 200}]}>
              <Text style = {styles.textStyle}>{item.league_title}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

export default LeagueScreen;
