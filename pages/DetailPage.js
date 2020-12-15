import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

export default class DetailPage extends Component {
  componentDidMount() {
    console.log(this.props);

    // 标题栏的动态变更: setOptions
    let name = this.props.route.params.name;

    this.props.navigation.setOptions({
      title: name,
      // 标题按钮: 通常分左右两个按钮
      headerRight: () => <Button title="右侧按钮" />,
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.props.navigation.goBack()}
          style={{
            backgroundColor: 'green',
            borderRadius: 8,
            padding: 5,
            marginLeft: 8,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>返回</Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}> Detail页面 </Text>
        {/* 路由传参: 存放在 props.route.params 中 */}
        <Text style={{fontSize: 35}}>{this.props.route.params.name}</Text>
        <Text style={{fontSize: 35}}>{this.props.route.params.age}</Text>
      </View>
    );
  }
}
