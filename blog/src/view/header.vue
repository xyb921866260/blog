<template>
	<header  class="Sticky AppHeader"  style="">
		<div class="AppHeader-inner">
			
				<img src="../images/绿色.png" style="width: 183px;height: 55px;" />
			
			
			<ul  class="Tabs AppHeader-Tabs">
				<li  class="Tabs-item AppHeader-Tab Tabs-item--noMeta">
					<a class="Tabs-link AppHeader-TabsLink is-active" href="//www.zhihu.com/">首页</a></li>
				<li  class="Tabs-item AppHeader-Tab Tabs-item--noMeta">
					<a class="Tabs-link AppHeader-TabsLink" href="//www.zhihu.com/explore" >发现</a></li>
					<li  class="Tabs-item AppHeader-Tab Tabs-item--noMeta">
						<a class="Tabs-link AppHeader-TabsLink" href="//www.zhihu.com/question/waiting" >等你来答</a></li>
						</ul>
			<div class="SearchBar" >
				<div class="SearchBar-toolWrapper">
					<div class="SearchBar-tool">
						<div class="Popover">
							<label class="SearchBar-input Input-wrapper Input-wrapper--grey">
								<input type="text" maxlength="100" autocomplete="off" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-activedescendant="AutoComplete2-topSearch--1" id="Popover1-toggle" aria-haspopup="true" aria-owns="Popover1-content" class="Input" placeholder="蓝牙音箱推荐" value="">
								<button aria-label="搜索" type="button" class="Button SearchBar-searchButton Button--primary">
									<span style="display: inline-flex; align-items: center;">
									<i class="fa fa-search " aria-hidden="true"></i>
										</span>
										</button>
										</label>
							</div>
					</div>
					</div>
			</div>
	        <div class="AppHeader-userInfo"> 
			
		  	  <div class="Popover PushNotifications AppHeader-notifications">
				<button type="button" id="Popover15-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover15-content" class="Button PushNotifications-icon Button--plain">
					<span style="display: inline-flex; align-items: center;">
						<i class="fa fa-bell  fa-lg" aria-hidden="true"></i>
						</span>
						</button>
			 </div>
			 <div class="Popover Messages AppHeader-messages">
				 <button type="button" id="Popover16-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover16-content" class="Button Messages-icon Button--plain">
					 <span style="display: inline-flex; align-items: center;">
						 <i class="fa fa-comments fa-lg" aria-hidden="true"></i>
						 </span>
				 </button>
			  </div> 
			  
			  <div class="AppHeader-profile">
				  <div class="Popover AppHeader-menu">
					  <button type="button" id="Popover17-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover17-content" class="Button AppHeader-profileEntry Button--plain">
						  <img class="Avatar AppHeader-profileAvatar" width="30" height="30" src="https://pic1.zhimg.com/v2-593341cb41444d62fd7d94e7a1110f13_is.jpg" srcset="https://pic1.zhimg.com/v2-593341cb41444d62fd7d94e7a1110f13_im.jpg 2x"></button>
						  </div>
						</div>
			</div>		
				
				
				
				
		</div>
		
		
	</header> 
</template>

<script>
	export default {
	  name: 'Header',
	}
</script>

<style>
	@import url("../css/header/index.css");
	@import url("../css/font-awesome.min.css");
</style>
