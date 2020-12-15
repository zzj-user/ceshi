// rnc
import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class MainPage extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}> Main页面 </Text>
        <Button title="返回" onPress={() => this.props.navigation.goBack()} />
        {/* 举一反三:添加 跳转到 Detail 按钮 */}
        <Button
          title="跳转到 Detail"
          // push(组件名, 参数对象)
          onPress={() =>
            this.props.navigation.push('Detail', {name: '东东', age: 33})
          }
        />

        <Button
          title="跳转到 Detail"
          // push(组件名, 参数对象)
          onPress={() =>
            this.props.navigation.push('Detail', {name: '然然', age: 28})
          }
        />
      </View>
    );
  }
}
