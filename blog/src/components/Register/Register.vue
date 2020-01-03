<template>
	
	<div class="card-body">
		<div><h4 class="card-title">Register</h4></div>
		
		<form method="POST">
		 
			<div class="form-group">
				<label for="name">Name</label>
				<input id="name" type="text" class="form-control" name="name" required autofocus>
			</div>
	
			<div class="form-group">
				<label for="email">E-Mail Address</label>
				<input id="email" type="email" class="form-control" name="email" required>
			</div>
	
			<div class="form-group">
				<label for="password">Password</label>
				<input id="password" type="password" class="form-control" name="password" required data-eye>
			</div>
	
			<div class="form-group">
				<label>
					<input type="checkbox" name="aggree" value="1"> I agree to the Terms and Conditions
				</label>
			</div>
	
			<div class="form-group no-margin">
				<button type="submit" class="btn btn-primary btn-block">
					Register
				</button>
			</div>
			<div class="margin-top20 text-center">
				Already have an account? <router-link to="/sign">Login</router-link>
			</div>
		</form>
	</div>
</template>

<script>
</script>

<style>
	
</style>
