<template>
	<div class="searchBox">
		<div >
							<span class="screen-reader-text">Search for:</span>
							<input type="search" class="search-field" placeholder="Search …" value="" name="s" style="cursor: pointer;">
		</div>
		<div style="display: flex;align-items:center;justify-content: space-between">
		<div style="display: flex;width: 60%;align-items:center;margin-left: 10px;">
				
		  <el-radio v-model="radio" label="1">文章</el-radio>
		  <el-radio v-model="radio" label="2">文件</el-radio>
		  </div>
			<div style="width: 35%">
			<el-button type="primary" icon="el-icon-search">搜索</el-button>
		</div>
		</div>
	</div>
</template>

<script>
	
	export default {
	  name: 'SearchBar',
	  data () {
	       return {
	         radio: '1'
	       };
	     }
	}
	
</script>

<style>
	.searchBox{
		width: 290px;
		height: 110px;
		box-shadow: 0 1px 3px rgba(26,26,26,.1);
		box-sizing: border-box;
		background: #FFFFFF;
		
	}
	.screen-reader-text {
	    clip: rect(1px, 1px, 1px, 1px);
	    position: absolute !important;
	    height: 1px;
	    width: 1px;
	    overflow: hidden;
	}
	 input[type="search"]{
	    background-color:#F6F6F6;
	    border-radius: 0;
	    color: #666;
	    font-size: 16px;
	    line-height: 1;
	    margin: 0 0 10px;
	    padding: 13px 10px;
	    width: 100%;
	    border-left-width:0px;
		border-top-width:0px;
		border-right-width:0px;
		border-bottom-width: 1px;
		border-bottom-color: #409EFF;
		
	}
</style>
