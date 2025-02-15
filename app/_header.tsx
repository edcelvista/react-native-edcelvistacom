import { StyleSheet, Text, View } from 'react-native';

interface Props {
  Title: string;
}

const CustomHeader: React.FC<Props> = ({ Title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    height: 60,
    paddingHorizontal: 15,
  },
  title: {
    color: 'rgb(0, 0, 0)',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 0,
  }
});

export default CustomHeader;