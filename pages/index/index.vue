<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		
		<view class="">
		  <navigator url="../nottab/index">非Tab页面</navigator>
		</view>
		
		<Info/>
	</view>
</template>

<script>
	import Info from './Info.vue'
	export default {
		data() {
			return { title: 'Hello' }
		},
		components: { Info },
		onLoad() {

		},
		methods: {}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	navigator{
		padding: 10px;
		color: #333;
		background-color: #e8e8e8;
		border: 1px solid #e8e8e8;
	}
</style>
