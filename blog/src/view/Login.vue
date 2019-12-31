<template>
	
	<div class="my-login-page" >
		<section class="h-100">
			<div class="container h-100">
				<div class="row justify-content-md-center h-100">
					<div class="card-wrapper">
						<div class="brand">
							<img src="../css/Login/QQ截图20191231101155.png">
						</div>
						<div class="card fat">
							
							<Reset />
							
						</div>
						<div class="footer">
							Copyright &copy; Your Company 2017 - More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		  
	</div>
</template>
<script>
	
var THREE = require('three');
	import Register from "../components/Register/Register.vue";
	import Reset from "../components/Reset/Reset.vue";
 export default {
   name: 'app',
   components: {
 	Register,Reset
   }
}

</script> 


<style>
	@import url("../css/Login/bootstrap.css");
	@import url("../css/Login/my-login.css");
* { margin:0; padding:0; }
body { 	
	background: url(../images/loginbg.jpg) repeat fixed center;
	margin: 0px;
	overflow: hidden;
	}
	

</style>
