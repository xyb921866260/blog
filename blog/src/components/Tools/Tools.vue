<template>
	<div class="tools">
		<h2 class="hometitle">工具</h2>
	</div>
</template>

<script>
</script>

<style>


	.hometitle {
		padding: 0 10px;
		line-height: 50px;
		height: 50px;
		font-size: 18px;
		border-bottom: 1px solid #e5e5e5;
		color: #333;
		position: relative
	}

	.hometitle:after {
		content: '';
		position: absolute;
		height: 2px;
		width: 0;
		right: inherit;
		top: inherit;
		left: 0;
		bottom: -1px;
		background: #333;
		transition: 2s ease all;
	}

	.hometitle:hover:after {
		width: 100%;
		transition: 2s ease all;
	}
</style>
