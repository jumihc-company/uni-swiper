<template>
	<view class="uni-swiper">
		<swiper class="swiper-box" @change="change" :autoplay="autoplay" :circular="circular" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, index) in imageArr" :key="index">
				<view class="swiper-item"><image class="image" :src="item.url" mode="aspectFill"></image></view>
			</swiper-item>
		</swiper>
		<view class="swiper-dot" >
			<view v-if="mode == 'circular'" :style="{ bottom: dots.bottom + 'px' }" class="swiper-dot-wrap">
				<view
					v-for="(itemDot, indexDot) in imageArr"
					:key="indexDot"
					:style="{ width: dots.width + 'px', height: dots.width + 'px', 'background-color': indexDot == current ? dots.indicatorActiveColor : dots.indicatorColor }"
					class=" swiper-dot-style swiper-dot-circular"
				></view>
			</view>
			<view v-if="mode == 'ellipse'" :style="{ bottom: dots.bottom + 'px' }" class="swiper-dot-wrap">
				<view
					v-for="(itemDot, indexDot) in imageArr"
					:key="indexDot"
					:style="{ width: dots.width + 'px', height: dots.height + 'px', 'background-color': indexDot == current ? dots.indicatorActiveColor : dots.indicatorColor }"
					class="swiper-dot-style swiper-dot-circular"
				></view>
			</view>
			<view v-if="mode == 'rectangle'" :style="{ bottom: dots.bottom + 'px' }" class="swiper-dot-wrap">
				<view
					v-for="(itemDot, indexDot) in imageArr"
					:key="indexDot"
					:style="{ width: dots.width + 'px', height: dots.height + 'px', 'background-color': indexDot == current ? dots.indicatorActiveColor : dots.indicatorColor }"
					class="swiper-dot-style"
				></view>
			</view>
			<view v-if="mode == 'number'" :style="{ bottom: dots.bottom + 'px' }" class="swiper-dot-wrap">
				<text :style="{ color: dots.color }" class="uni-swiper__dots-nav-item">{{ current + 1 + '/' + info.length }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 轮播数据
		imageArr: {
			type: Array,
			required: true
		},
		// 是否自动播放
		autoplay: {
			type: Boolean,
			default: false
		},
		// 是否衔接播放
		circular: {
			type: Boolean,
			default: true
		},
		// 自动切换时间间隔
		interval: {
			type: Number,
			default: 5000
		},
		// 滑动动画时长
		duration: {
			type: Number,
			default: 500
		},
		// 指示点类型:circular,rectangle,ellipse,number
		mode: {
			type: String,
			default: 'circular'
		},
		// 指示点样式
		dotsStyles: {
			type: Object
		}
	},
	data() {
		return {
			current: 0, //当前的指示点
			dots: {
				width: 5,
				height: 5,
				color: 'white', //文字颜色
				bottom: 10, //距离底部的距离
				indicatorColor: 'black', //指示点颜色
				indicatorActiveColor: 'white' //当前选中颜色
			}
		};
	},
	mounted() {
		this.dots = Object.assign({}, this.dots, this.dotsStyles);
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
};
</script>

<style lang="scss" scoped>
.uni-swiper,
.swiper-box,
.image,
.swiper-item {
	width: 100%;
	height: 100%;
}
.uni-swiper {
	position: relative;
	.swiper-dot-wrap {
		position: absolute;
		left: 0;
		right: 0;
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		.swiper-dot-style{
			margin-right: 20rpx;
		&.swiper-dot-circular {
			border-radius: 50%;
		}
		}
	}
}
</style>
