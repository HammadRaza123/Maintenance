import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import BottomLine from '../../../components/BottomLine';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Header from '../../../components/Header';
import ToggleButton from '../../../components/ToggleButton';
// import { Colors } from '../../utills/Colors';
import Colors from '../../../utills/Colors';
import styles from './styles';

export default function FilterTask({ navigation: { goBack } }) {
  const [statusValue, setstatusValue] = useState('All');
  const [rangeValue, setrangeValue] = useState('Today');
  const [locationValue, setlocationValue] = useState('Rentdigi/GSK');
  const [areaValue, setareaValue] = useState('1071 Chappelle');
  const [sortValue, setsortValue] = useState('Newest to Oldest');
  const [statusOptions, setstatusOptions] = useState(['option1', 'option2']);
  const [rangeOptions, setrangeOptions] = useState(['option1', 'option2']);
  const [locationOptions, setlocationOptions] = useState(['option1', 'option2']);
  const [areaOptions, setareaOptions] = useState(['option1', 'option2']);
  const [sortOptions, setsortOptions] = useState(['option1', 'option2']);
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <View style={styles.mainContainer}>
        <Header
          title={'Filter'}
          rightIcon={'close-a'}
          onpressAction={() => goBack()}
        />
        <ScrollView style={styles.InnerContainer} showsVerticalScrollIndicator={false}>
          <Dropdown showLabel
            dropdownLabel={'Status'}
            defaultValue={statusValue}
            option={statusOptions}
            onselect={(index) => setstatusValue(statusOptions[index])}
          />
          <Dropdown showLabel
            dropdownLabel={'Range'}
            defaultValue={rangeValue}
            option={rangeOptions}
            onselect={(index) => setrangeValue(rangeOptions[index])}
          />
          <Dropdown showLabel
            dropdownLabel={'Location'}
            defaultValue={locationValue}
            option={locationOptions}
            onselect={(index) => setlocationValue(locationOptions[index])}
          />
          <Dropdown showLabel
            dropdownLabel={'Area'}
            defaultValue={areaValue}
            option={areaOptions}
            onselect={(index) => setareaValue(areaOptions[index])}
          />
          <Dropdown showLabel
            dropdownLabel={'Sort'}
            defaultValue={sortValue}
            option={sortOptions}
            onselect={(index) => setsortValue(rangeOptions[index])}
          />
          <ToggleButton
            toggleLabel={'Assigned'}
            trackOnColor={Colors.togglelightBlue}
            trackOffColor={Colors.textcolor}
          />
          <BottomLine />
          <ToggleButton
            toggleLabel={'+PMs'}
            trackOnColor={Colors.togglelightBlue}
            trackOffColor={Colors.textcolor}
          />
          <BottomLine />
          <ToggleButton
            toggleLabel={'Priority'}
            trackOnColor={Colors.togglelightBlue}
            trackOffColor={Colors.textcolor}
          />
        </ScrollView>
        <View style={styles.ButtonContainer}>
          <Button onPress={() => goBack()}
            title={'Cancel'}
          /><Button onPress={() => goBack()}
            title={'Save'}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}