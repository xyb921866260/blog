<template>
	<header  class="Sticky AppHeader" >
		<div class="AppHeader-inner" >
			
				<img src="../../images/绿色.png" style="width: 230px;height: 55px;" />
			
			
			

	        <div class="AppHeader-userInfo"> 
			<div class="weather">
				<iframe width="200" scrolling="no" height="45" frameborder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=12&icon=5&num=1&site=12"></iframe>
				</div>
			<ul  class="Tabs AppHeader-Tabs">
				<li  class="Tabs-item AppHeader-Tab Tabs-item--noMeta">
					<a class="Tabs-link AppHeader-TabsLink is-active" href="//www.zhihu.com/">首页</a></li>
				<li  class="Tabs-item AppHeader-Tab Tabs-item--noMeta">
					<a class="Tabs-link AppHeader-TabsLink" href="//www.zhihu.com/explore" >发现</a></li>
					<li  class="Tabs-item AppHeader-Tab Tabs-item--noMeta">
						<a class="Tabs-link AppHeader-TabsLink" href="//www.zhihu.com/question/waiting" >等你来答</a></li>
						</ul>
						
			 <div class="alert-box">
		  	  <div class="Popover PushNotifications AppHeader-notifications">
				<button type="button" id="Popover15-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover15-content" class="Button PushNotifications-icon Button--plain">
					<span style="display: inline-flex; align-items: center;">
					<el-badge :value="12" class="item">
						  <i class="fa fa-bell  fa-lg" aria-hidden="true" />
						</el-badge>
						
						</span>
						</button>
			 </div>
			 <div class="Popover Messages AppHeader-messages">
				 <button type="button" id="Popover16-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover16-content" class="Button Messages-icon Button--plain">
					 <span style="display: inline-flex; align-items: center;">
						 <el-badge :value="99" class="item">
						 <i class="fa fa-comments fa-lg" aria-hidden="true"></i>
						 </el-badge>
						 </span>
				 </button>
			  </div> 
			  </div>	
			  <div class="AppHeader-profile">
				  <div class="Popover AppHeader-menu">

						  
						<el-dropdown>
						  <img  class="Avatar AppHeader-profileAvatar" width="35" height="35" src="https://pic1.zhimg.com/v2-593341cb41444d62fd7d94e7a1110f13_is.jpg" >
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item class="xiala"><i class="fa fa-user" aria-hidden="true"/>个人中心</el-dropdown-item>
						    <el-dropdown-item class="xiala"><i class="fa fa-cog" aria-hidden="true"/>账号设置</el-dropdown-item>
						    <el-dropdown-item class="xiala"><i class="fa fa-sign-out" aria-hidden="true"/>注销</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
						  
						  
						  </div>
						</div>
			</div>		
				
				
				
				
		</div>
		
	</header> 
	
</template>

<script>
	export default {
	  name: 'Header'
	}
</script>

<style>
	@import url("../../css/font-awesome.min.css");
	
	.el-dropdown-link {
	    cursor: pointer;
	    color: #409EFF;
	  }
	.xiala{
	    color: #8590a6;
	  }
	  .fa-bell:hover,.fa-comments:hover{
		  color:rgb(0,132,255);
	  }
	  .weather{
		  margin-left:20px ;
	  }
	  
	  .AppHeader {
	  	position: fixed;
	      width: 100%;
	      z-index: 100;
	      min-width: 1032px;
	      overflow: hidden;
	      background: #fff;
	      -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
	      box-shadow: 0 1px 3px rgba(26,26,26,.1);
	      background-clip: content-box;
	  }
	  .AppHeader-inner {
	      display: -webkit-box;
	      display: -ms-flexbox;
	      display: flex;
	      width: 1000px;
	      height: 52px;
	      padding: 0 16px;
	      margin: 0 auto;
	      -webkit-box-align: center;
	      -ms-flex-align: center;
	      align-items: center;
	      -webkit-transition: -webkit-transform .3s;
	      transition: -webkit-transform .3s;
	      transition: transform .3s;
	      transition: transform .3s,-webkit-transform .3s;
	  }
	  
	  .AppHeader-Tabs {
	      border-bottom: none;
	      display: -webkit-box;
	      display: -ms-flexbox;
	      display: flex;
	      margin: 0 5px;
	  }
	  .Tabs {
	      border-bottom: 1px solid #f6f6f6;
	  }
	  ol, ul {
	      padding: 0;
	      margin: 0;
	  }
	  ul {
	      display: block;
	      list-style-type: disc;
	      margin-block-start: 1em;
	      margin-block-end: 1em;
	      margin-inline-start: 0px;
	      margin-inline-end: 0px;
	      padding-inline-start: 40px;
	  }
	  
	  .AppHeader-Tab {
	      padding: 0 17px;
	  }
	  .Tabs-item {
	      display: inline-block;
	      padding: 0 15px;
	  }
	  
	  li {
	      list-style-type: none;
	  }
	  li {
	      display: list-item;
	      text-align: -webkit-match-parent;
	  }
	  
	  /* a*/
	  .AppHeader-TabsLink.is-active {
	      color: #444;
	  }
	  .Tabs-link.is-active {
	      font-weight: 600;
	      font-synthesis: style;
	  }
	  
	  .AppHeader-TabsLink {
	      color: #8590a6;
	      font-size: 15px;
	  }
	  .Tabs-link {
	      position: relative;
	      display: inline-block;
	      padding: 14px 0;
	      font-size: 16px;
	      line-height: 22px;
	      color: #8590a6;;
	      text-align: center;
	  }
	  .Tabs-link:hover{
	  	color: #0084FF;
	  }
	  a{
	      color: inherit;
	      text-decoration: none;
	  }
	  .Tabs-link.is-active:after {
	      position: absolute;
	      right: 0;
	      bottom: -1px;
	      left: 0;
	      height: 3px;
	      background: #0084ff;
	      content: "";
	  }
	  /*搜索框*/
	  .SearchBar {
	      display: -webkit-box;
	      display: -ms-flexbox;
	      display: flex;
	  }
	  .SearchBar-toolWrapper {
	      position: relative;
	      z-index: 104;
	      width: 300px;
	  }
	  .SearchBar-tool {
	      position: relative;
	      float: left;
	      overflow: hidden;
	  }
	  .SearchBar-tool .Popover {
	      display: block;
	  }
	  .Popover {
	      position: relative;
	      display: inline-block;
	  }
	  .Input-wrapper.Input-wrapper--grey {
	      background: #f6f6f6;
	  }
	  
	  .Input-wrapper {
	      position: relative;
	      display: -webkit-box;
	      display: -ms-flexbox;
	      display: flex;
	      -webkit-box-align: center;
	      -ms-flex-align: center;
	      align-items: center;
	      width: 180px;
	      height: 34px;
	      padding: 4px 10px;
	      font-size: 14px;
	      background: #fff;
	      border: 1px solid #ebebeb;
	      border-radius: 3px;
	      -webkit-box-sizing: border-box;
	      box-sizing: border-box;
	      -webkit-transition: background .2s,border .2s;
	      transition: background .2s,border .2s;
	  }
	  .SearchBar-input {
	      width: 276px;
	      padding-left: 12px;
	      padding-right: 0;
	      -webkit-transition: width .2s ease,background .3s ease;
	      transition: width .2s ease,background .3s ease;
	  }
	  
	  
	  label {
	      cursor: default;
	  }
	  input.Input {
	      color: #1a1a1a;
	      height: 24px;
	      line-height: 24px;
	  }
	  .Input {
	      -webkit-box-flex: 1;
	      -ms-flex: 1 1;
	      flex: 1 1;
	      padding: 0;
	      overflow: hidden;
	      font-family: inherit;
	      font-size: inherit;
	      font-weight: inherit;
	      background: transparent;
	      border: none;
	      resize: none;
	  }
	  input {
	      -webkit-writing-mode: horizontal-tb !important;
	      text-rendering: auto;
	      color: -internal-light-dark-color(black, white);
	      letter-spacing: normal;
	      word-spacing: normal;
	      text-transform: none;
	      text-indent: 0px;
	      text-shadow: none;
	      display: inline-block;
	      text-align: start;
	      -webkit-appearance: textfield;
	      background-color: -internal-light-dark-color(white, black);
	      -webkit-rtl-ordering: logical;
	      cursor: text;
	      margin: 0em;
	      font: 400 13.3333px Arial;
	      padding: 1px 0px;
	      border-width: 2px;
	      border-style: inset;
	      border-color: initial;
	      border-image: initial;
	  }
	  .SearchBar-searchButton {
	      margin-left: 12px;
	      padding: 0 12px;
	      background: transparent;
	      border-color: transparent;
	      border-bottom-left-radius: 0;
	      border-top-left-radius: 0;
	  }
	  .Button {
	      display: inline-block;
	      padding: 0 16px;
	      font-size: 14px;
	      line-height: 32px;
	      color: #8590a6;
	      text-align: center;
	      cursor: pointer;
	      background: none;
	      border: 0px solid;
	      border-radius: 3px;
	  }
	  body, button, p, pre {
	      margin: 0;
	  }
	  button {
	      padding: 0;
	      font: inherit;
	      color: inherit;
	      cursor: pointer;
	      background: none;
	      border: none;
	      outline: none;
	      -webkit-appearance: none;
	      -moz-appearance: none;
	      appearance: none;
	  }
	  input:focus { outline: none; }
	  
	  
	  /* 头部最右边*/
	  .AppHeader-userInfo {
	      -webkit-box-flex: 1;
	      -ms-flex: 1 1;
	      flex: 1 1;
	      -webkit-box-pack: end;
	      -ms-flex-pack: end;
	      justify-content: space-between;
	      display: -webkit-box;
	      display: -ms-flexbox;
	      display: flex;
	      -webkit-box-align: center;
	      -ms-flex-align: center;
	      align-items: center;
	  }
	  .el-badge__content{
		  background-color: rgb(241,64,60);
	  }
	  
	  /* alert*/
	  .alert-box {
	      display: flex;
		  flex-direction: row;
		  padding:0px 30px 0px 30px	  }
	  .Popover {
	      position: relative;
	      display: inline-block;
	  }
	  .Button--link, .Button--plain {
	      height: auto;
	      padding: 0;
	      line-height: inherit;
	      background-color: transparent;
	      border: none;
	      border-radius: 0;
	  }
	  .AppHeader-profile {
	      position: relative;
	  }
	  .AppHeader-profileAvatar {
	      vertical-align: top;
	  }
	  .Avatar {
	      background: #fff;
	      border-radius: 2px;
	  }
	  img[Attributes Style] {
	      width: 30px;
	      height: 30px;
	  }
	  .AppHeader-notifications{
		  margin-right: 30px;
	  }
	  	
</style>
