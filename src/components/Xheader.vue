<template>
	<div class="reg-top">
		<router-link to="/index">
			<span class="reg-top-l"><</span>
		</router-link>
			<span class="reg-top-r" v-text='name'></span>
		</div>
</template>

<script type="text/javascript">
	export default{
		props:['name']
	};
</script>

<style scoped type="text/css">
	.reg-top{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #000;
	}
	.reg-top-l{
		display: inline-block;
		color: #ccc;
		margin-left: 15px;
	}
		.reg-top-r{
		display: inline-block;
		color: #fff;
		margin-left: 120px;
	}
</style>