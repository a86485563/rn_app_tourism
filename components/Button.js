//src/components/button.js
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
const Button = ({onPress}) => {
  const { buttonStyle, texStyle } = styles;
return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={texStyle}>
        Get More!!!
      </Text>
    </TouchableOpacity>
  );
};
const styles = {
  texStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}
export default Button;