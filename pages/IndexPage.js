// rnc
import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class IndexPage extends Component {
  // React 的重要属性: props 和 state
  // state: 配合setState() 使用.  用来保存更新UI的数据项
  // props: 同vue的props. 用来存储通过属性传入的值 <组件 属性名="值" />

  // 此处: 存放在路由中的组件, 就会自动接收路由作为其属性
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}> Index页面 </Text>
        <Button
          title="跳转到Main页面"
          onPress={() => this.props.navigation.push('Main')}
        />
      </View>
    );
  }
}
