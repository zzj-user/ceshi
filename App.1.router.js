// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// 引入页面
import IndexPage from './pages/IndexPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/*screenOptions: 统一修改所有页面的配置.  如果没有单独修改某个页面, 则统一使用全局样式  */}
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'blue'},
          headerTintColor: 'white',
        }}>
        {/* 在此处加载 路由中的所有组件.  格式为固定写法 */}
        {/* 同小程序的机制: 第一项将会作为默认首页 */}

        {/* 标题配置 options */}
        <Stack.Screen
          name="Index"
          component={IndexPage}
          options={{
            title: '首页',
            headerTintColor: 'red', //头部的文字颜色
            headerStyle: {
              //头部样式
              backgroundColor: 'green',
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailPage}
          options={{title: '详情页'}}
        />
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{title: '主菜单'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
