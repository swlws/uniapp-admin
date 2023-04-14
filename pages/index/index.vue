<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		
		<view class="">
			<navigator url="../nottab/index">非Tab页面</navigator>  
		</view>
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return { title: 'Hello', }  
		},
		onLoad() {
			console.log('onLoad')
			console.log(getApp().globalData )  
		},
		onTabItemTap(...args){
			console.log('onTabItemTap	')
			console.log(args)
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
		border: 1px solid #e8e8e8;
		border-radius: 5px;
		
		background-color: #f6f7f8;
		padding: 10px;
	}
</style>
