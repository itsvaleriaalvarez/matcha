import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import products from '../../constants/products';

export default function MenuScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Matcha</Text>
      <Text style={styles.subtitle}>¿Qué vas a tomar hoy?</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>Bs {item.price}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: fonts.h1,
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts.h2,
    color: colors.primary,
    marginBottom: 20,
  },
  list: {
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.h2,
    color: colors.text,
  },
  price: {
    fontSize: 14,
    fontFamily: fonts.p,
    color: colors.primary,
    marginTop: 4,
  },
  arrow: {
    fontSize: 20,
    color: colors.textMuted,
  },
});