import {View, Text, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function Calculator(props) {
  const [colorTheme, setColorTheme] = useState(false);

  const [calculate, setCalculate] = useState('');

  const colors = {
    lighttext: '#d1bc13',
    lightbtn: '#fff',
    lighttoggle: '#fff',
    darktext: '#6e6415',
    darkbtn: '#785027',
    black: '#22252D',
  };

  const calculation = title => {
    if (title == 'AC') {
      setCalculate('');
    } else if (title == '+/-') {
      setCalculate(calculate.substring(0, calculate.length - 1));
    } else if (title == '=') {
      setCalculate(Number(eval(calculate).toFixed(5)).toString());
    } else setCalculate(calculate + title);
  };

  const Btn = ({title, width}) => {
    // alert(title)
    return (
      <TouchableOpacity
        style={{
          width: width,
          height: 104,
          borderColor: '#000',
          borderWidth: 0.9,
        }}
        onPress={() => calculation(title)}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: '600',
            textAlignVertical: 'center',
            textAlign: 'center',
            paddingTop: 25,
            color: colorTheme ? colors.lightbtn : colors.black,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colorTheme ? colors.darktext : colors.lighttext,
        alignItems: 'flex-start',
      }}>
      <Switch
        value={colorTheme}
        onValueChange={() => setColorTheme(!colorTheme)}
        thumbColor={colorTheme ? colors.lightbtn : colors.black}
        trackColor={{true: colors.lightbtn, false: colors.black}}
      />
      <View
        style={{
          alignItems: 'flex-end',
          width: '90%',
          marginRight: 10,
          height: '20%',
          justifyContent: 'flex-end',
           marginVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: '600',
            color: colorTheme ? colors.lightbtn : colors.black,
          }}>
          {calculate}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: colorTheme ? colors.darkbtn : colors.lightbtn,
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <Btn title="AC" width={98} />
        <Btn title="+/-" width={98} />
        <Btn title="%" width={98} />
        <Btn title="/" width={98} />
        <Btn title="7" width={98} />
        <Btn title="8" width={98} />
        <Btn title="9" width={98} />
        <Btn title="*" width={98} />
        <Btn title="6" width={98} />
        <Btn title="5" width={98} />
        <Btn title="4" width={98} />
        <Btn title="-" width={98} />
        <Btn title="3" width={98} />
        <Btn title="2" width={98} />
        <Btn title="1" width={98} />
        <Btn title="+" width={98} />
        <Btn title="0" width={195} />
        <Btn title="." width={98} />
        <Btn title="=" width={98} />
      </View>
    </View>
  );
}
