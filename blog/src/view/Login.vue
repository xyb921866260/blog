<template>
	
	<div class="my-login-page">
		<section class="h-100">
			<div class="container h-100">
				<div class="row justify-content-md-center h-100">
					<div class="card-wrapper">
						<div class="brand">
							<img src="../css/Login/QQ截图20191231101155.png">
						</div>
						<div class="card fat">
							<div class="card-body">
								<h4 class="card-title">Login</h4>
								<form method="POST">
								 
									<div class="form-group">
										<label for="email">E-Mail Address</label>
	
										<input id="email" type="email" class="form-control" name="email" value="" required autofocus>
									</div>
	
									<div class="form-group">
										<label for="password">Password
											<a href="forgot.html" class="float-right">
												Forgot Password?
											</a>
										</label>
										<input id="password" type="password" class="form-control" name="password" required data-eye>
									</div>
	
									<div class="form-group">
										<label>
											<input type="checkbox" name="remember"> Remember Me
										</label>
									</div>
	
									<div class="form-group no-margin">
										<button type="submit" class="btn btn-primary btn-block">
											Login
										</button>
									</div>
									<div class="margin-top20 text-center">
										Don't have an account? <a href="register.html">Create One</a>
									</div>
								</form>
							</div>
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

</script> 


<style>
	@import url("../css/Login/bootstrap.css");
	@import url("../css/Login/my-login.css");
* { margin:0; padding:0; }
body { 	
	background: url(../images/loginbg.jpg) repeat fixed center;
	margin: 0px;
	overflow: hidden;}
</style>
