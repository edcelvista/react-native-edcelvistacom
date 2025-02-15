import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomFooter = () => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.inlineContainer}>
        <Link style={styles.navLink} href="/"><Icon style={styles.navIcon} name="home" size={35} /></Link>
        <Link style={styles.navLink} href="/(tabs)/dashboard"><Icon style={styles.navIcon} name="dashboard" size={35} /></Link>
        <Link style={styles.navLink} href="/(tabs)/settings"><Icon style={styles.navIcon} name="miscellaneous-services" size={35} /></Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
    position: 'absolute',
    bottom: 15,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    flex: 1,
    paddingVertical: 15
  },
  inlineContainer: {
    flexDirection: 'row', // Makes children (Text + Link) inline
    alignItems: 'center', // Aligns items vertically
  },
  navLink: {
    marginLeft: 24,
    marginRight: 24
  },
  navIcon: {
    color: 'rgb(150, 150, 150)'
  }
});

export default CustomFooter;