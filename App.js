// 横向滚动展示 banner
// rnc
import React, { Component } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

const { width, height } = Dimensions.get("screen");

function rpx(fs) {
  return (width / 750) * fs;
}

export default class App extends Component {
  state = { result: [] };

  componentDidMount() {
    let url = "https://api.apiopen.top/getWangYiNews?page=1";

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // 更新操作结束后, 启动定时器: 每2秒滚动一次
        // setState(数据项, 成功后的回调)
        this.setState({ result: res.result }, () => {
          //更新UI之后的回调函数

          setInterval(() => {
            // 滚动到下一张
            // console.log(this.fl);

            // scrollToIndex(): 滚动到指定序号
            // onScroll 时 会自动变更 page, 所以不需要在这里变更 page 的值
            if (this.page == this.state.result.length - 1) {
              this.fl.scrollToIndex({ index: 0 });
            } else {
              this.fl.scrollToIndex({ index: this.page + 1 });
            }
            // this.fl.scrollToIndex({index: this.page});
          }, 2000);
        });
      });
  }

  page = 0; //序号

  render() {
    /**
     * 高性能滚动组件:
     * 3个核心属性:
     * 1. data: 设定要显示的数据数组
     * 2. keyExtractor: 每一条UI的唯一标识
     * 3. renderItem: 每条数据对应的UI
     *
     * 其它属性:
     * horizontal: 横向滚动
     * pagingEnabled: 按页滚动
     * onScroll: 滚动事件
     */
    return (
      <View>
        <FlatList
          // ref: 绑定当前标签到一个自定义变量上
          // ref触发的箭头函数, 参数就是当前组件, 即 e;   自定义 fl 属性 存储这个e
          ref={(e) => (this.fl = e)}
          data={this.state.result}
          keyExtractor={(item, index) => index + ""}
          renderItem={this._renderItem}
          horizontal
          pagingEnabled
          onScroll={this._onScroll}
        />
      </View>
    );
  }

  _onScroll = (event) => {
    // React的事件是: 合成事件 -- 非DOM 也非虚拟DOM
    // 特点: 要想打印看值, 必须调用 event.persist()
    // event.persist();
    // console.log(event);

    let offset_x = event.nativeEvent.contentOffset.x; //横向偏移量
    let w = event.nativeEvent.layoutMeasurement.width; //每个的宽
    // 偏移量 / 宽 = 当前序号
    this.page = Math.round(offset_x / w); // round: 四舍五入为整数

    console.log(this.page);
  };

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={{ uri: item.image }}
          style={{ width, height: (width * 88) / 140 }}
        />
        <Text
          style={{
            fontSize: rpx(37),
            width,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };
}
