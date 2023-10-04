import React from 'react';
import { FlatList, Text, View, VirtualizedList } from 'react-native';
import { styles } from '../styles/StyleSheet';

function RaceScreen({ navigation, route }) {
  const data = route.params.race;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.race_id}
        renderItem={({ item }) => (
          <View style={styles.buttonContainer}>
            <View style={[styles.textContainer, {flex: 2}]}>
              <Text style={styles.textStyle}>Race information:</Text>
              <Text style={styles.textStyle}>Qualification position:</Text>
              <Text style={styles.textStyle}>Qualification result:</Text>
              <Text style={styles.textStyle}>Qualification points:</Text>
              <Text style={styles.textStyle}>Tandem result:</Text>
              <Text style={styles.textStyle}>Tandem points:</Text>
            </View>
            <View style={[styles.textContainer, {flex: 1}]}>
              <Text style={{fontSize: 20}}>{item.race_information}</Text>
              <Text style={{fontSize: 20}}>{item.qualification_position}</Text>
              <Text style={{fontSize: 20}}>{item.qualification_result}</Text>
              <Text style={{fontSize: 20}}>{item.qualification_points}</Text>
              <Text style={{fontSize: 20}}>{item.tandem_result}</Text>
              <Text style={{fontSize: 20}}>{item.tandem_points}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default RaceScreen;
