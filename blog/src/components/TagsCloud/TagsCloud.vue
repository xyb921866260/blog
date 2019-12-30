<template>
	<div class="cloud">
	  <h2 class="hometitle">标签云</h2>
	  <ul>
	    <a href="/">陌上花开</a>
		 <a href="/">校园生活</a>
		  <a href="/">html5</a> 
		  <a href="/">SumSung</a> 
		  <a href="/">青春</a> 
		  <a href="/">温暖</a> 
	  </ul>
	</div>
</template>

<script>
</script>

<style>
	
	/*tags*/
	.cloud { width: 100%; clear: both; overflow: hidden; background: #fff; margin-bottom: 20px }
	.cloud ul { padding: 20px; overflow: hidden; }
	.cloud ul a { line-height: 24px; display: block; background: #999; float: left; padding: 3px 11px; margin: 10px 10px 0 0; border-radius: 8px; -moz-transition: all 0.5s; -webkit-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s; color: #FFF }
	.cloud ul a:nth-child(8n-7) { background: #8A9B0F }
	.cloud ul a:nth-child(8n-6) { background: #EB6841 }
	.cloud ul a:nth-child(8n-5) { background: #3FB8AF }
	.cloud ul a:nth-child(8n-4) { background: #FE4365 }
	.cloud ul a:nth-child(8n-3) { background: #FC9D9A }
	.cloud ul a:nth-child(8n-2) { background: #EDC951 }
	.cloud ul a:nth-child(8n-1) { background: #C8C8A9 }
	.cloud ul a:nth-child(8n) { background: #83AF9B }
	.cloud ul a:first-child { background: #036564 }
	.cloud ul a:last-child { background: #3299BB }
	.cloud ul a:hover { border-radius: 0; text-shadow: #000 1px 1px 1px }
	.hometitle { padding: 0 10px; line-height: 50px; height: 50px; font-size: 18px; border-bottom: 1px solid #e5e5e5; color: #333; position: relative }
	.hometitle:after { content: ''; position: absolute; height: 2px; width: 0; right: inherit; top: inherit; left: 0; bottom: -1px; background: #333; transition: 2s ease all; }
	.hometitle:hover:after { width: 100%; transition: 2s ease all; }
	
</style>
