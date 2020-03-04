### 介绍

一款基于uniapp的简易轮播图组件

### 使用方式

引用组件

```
npm install jmhc-swiper
import jmhc-swiper from "jmhc-swiper"
```

使用组件

```
<jmhc-swiper :imageArr='imageArr' :dotsStyles='dotsStyles' :autoplay="true" :circular="false" :mode='mode'></jmhc-swiper>
```

```
export default {
    data() {
        return {
            mode:'ellipse',
			dotsStyles:{
				width:20,
				bottom:40,
				indicatorActiveColor:'red'
			},
			imageArr: [
				{
					url: require('@/static/logo.png')
				},
				{
					url: require('@/static/logo.png')
				},
				{
					url: require('@/static/logo.png')
				}
			],
        }
    },
}
```



### 属性说明

|    属性    |  类型   |  默认值  |                             说明                             |
| :--------: | :-----: | :------: | :----------------------------------------------------------: |
|  imageArr  |  Array  |          |                         轮播数据数组                         |
|  autoplay  | Boolean |  false   |                         是否自动播放                         |
|  circular  | Boolean |   true   |                         是否衔接播放                         |
|  interval  | Number  |   5000   |                       自动切换时间间隔                       |
|  duration  | Number  |   500    |                         滑动动画时长                         |
|    mode    | String  | circular | 指示点类型：circular（圆），rectangle（矩形），ellipse（椭圆），number（数字） |
| dotsStyles | Object  |          |                          指示点样式                          |

dotsStyles 属性说明：

|         属性         |  类型  | 默认值  |          说明          |
| :------------------: | :----: | :-----: | :--------------------: |
|        width         | Number |    5    |   指示点的宽，单位px   |
|        height        | Number |    5    |   指示点的高，单位px   |
|        bottom        | Number |   10    | 距离底部的距离，单位px |
|        color         | Color  | ‘white’ |        文字颜色        |
|    indicatorColor    | Color  | ‘black’ |       指示点颜色       |
| indicatorActiveColor | Color  | ‘white’ |   当前选中指示点颜色   |

