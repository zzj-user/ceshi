// 网页组件的使用
// rnc
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

// 引入 webview 组件
import {WebView} from 'react-native-webview';
// 自动高度的WebView: 当网页作为页面的一部分出现时, 如果希望网页的高度 与网页内容一样, 则使用另外一款
import AutoHeightWebView from 'react-native-autoheight-webview';

export default class App extends Component {
  data = '<h1 style="font-size: 4em">Hello World!</h1>';

  render() {
    // 网页组件 作为整个页面使用
    // return <WebView source={{uri: 'https://www.douyu.com'}} />;
    // 本地html: 使用 html 属性名
    // return <WebView source={{html: this.data}} />;
    //
    return (
      <ScrollView>
        <Text style={{fontSize: 40}}>Hello World!</Text>
        {/* 网页组件: 作为页面的一部分使用, 则高度自动缺失, 必须人为指定高度 */}
        {/* <WebView
          source={{uri: 'https://www.douyu.com'}}
          style={{height: 400}}
        /> */}
        {/* 自动高度的WebView, 高度与内容一样:  必须放在 ScrollView 中使用 */}
        {/* 必须放在 ScrollView 中使用 */}
        {/* 必须放在 ScrollView 中使用 */}
        <AutoHeightWebView source={{uri: 'http://www.bilibili.com'}} />
        {/* 
        如果打包成apk, 则高版本手机需要关闭 硬件加速 选项:
        androidHardwareAccelerationDisabled={true}
        添加此属性即可
        */}
        <Text style={{fontSize: 40}}>Hello World!</Text>
      </ScrollView>
    );
  }
}
