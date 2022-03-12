import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '@common/colors';

interface Prop {
  title: string;
  placeholder: string;
  onChange: (val: any) => void;
}

const TextInputCustom = ({title, placeholder, onChange}: Prop) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChange}
        />
        <Entypo name={'chevron-thin-right'} size={15} color={Colors.darkGray} />
      </View>
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    color: Colors.darkGray,
  },
  input: {
    padding: 5,
  },
  inputWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
});