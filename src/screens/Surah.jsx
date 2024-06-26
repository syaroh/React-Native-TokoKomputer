import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Surah = ({navigation}) => (
  <View
    style={{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    }}>
    {/* view dasar search bar */}
    <View
      style={{
        height: 35,
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
      {/* view seacrh bar */}
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'gray',
          flex: 1,
        }}>
        <TouchableOpacity style={{}}>
          <Ionicons
            name="search"
            style={{
              fontSize: 30,
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 2,
            marginHorizontal: 16,
            flexDirection: 'row',
          }}
        />
      </View>
    </View>

    <View>
      <ScrollView>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>1. Al - Fatihah (7 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>2. Al - Baqarah (286 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>3. Ali - I'mran (200 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>4. An - Nisa' (120 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>5. Al - Ma'idah (120 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>6. Al - An'am (165 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>7. Al - A raf (206 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>8. Al - Anfal (75 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>9. At - Taubah (129 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>10. Yunus (109 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>11. Hud (123 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>12. Yusuf (111 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>13. Ar - Ra'd (43 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>14. Ibrahim (52 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>15. Al - Hijr (99 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={styles.item}>16. An - Nahl (128 Ayat)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => navigation.navigate('DetailSurah1')}>
          <Text style={{fontSize: 18, paddingBottom: 35}}>
            17. Al - Isra' (111 Ayat)
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
);
const styles = StyleSheet.create({
  item: {
    fontSize: 18,
  },
  tombol: {
    backgroundColor: '#f9c2ff',
    padding: 8,
    marginVertical: 2,
  },
});

export default Surah;
