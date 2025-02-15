import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomHeader from '../_header';
import CustomFooter from '../_footer';

const DashboardScreen = () => {
  return (
    <>
      <CustomHeader Title="Dashboard"/>
        <View style={styles.centerPlaceholderIcon}>
          <Icon style={styles.Icon} name="cloud-off" size={35} />
          <Text>Not Available</Text>
        </View>
      <CustomFooter/>
    </>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1
  },
  centerPlaceholderIcon: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Icon: {
    fontSize: 80,
    color: 'rgb(122,122,122)'
  }
});

export default DashboardScreen;