import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {Colors} from '@common/colors';
// import {setTabsRoot} from '@navigators/roots';
import translate from '../../helpers/translator';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Pages} from '../../navigators/constants/allPages';
import {setAuthRoot, setTabsRoot} from '../../navigators/roots';

const SplashScreen: NavigationFunctionComponent = () => {
  const language = useSelector((state: RootState) => state.language);
  useEffect(() => {
    setTimeout(() => {
      setAuthRoot();
      // setTabsRoot();
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {translate(
          {
            en: 'WELCOME',
            id: 'SELAMAT DATANG',
          },
          language,
        )}
      </Text>
      <View style={styles.loader}>
        <ActivityIndicator />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loader: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});