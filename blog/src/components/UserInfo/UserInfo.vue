<template>
	<div class="Topstory">
		<div class="Topstory-mainColumn usershow">
			<div class="user-info-block">
				<div class="user-avatar">
					<el-avatar fit="cover " shape="square" :size="size" :src="squareUrl" />
				</div>
				<div class="user-id-name">
					<span class="name-info">阿某</span>
					<span class="acount-info">xyb921866260</span>
					<span class="phone-info">17673239976</span>
				</div>
				<div class="user-button">
					<el-button type="primary" icon="el-icon-setting" class="update-acount-info">账号设置</el-button>
					<el-button type="primary" icon="el-icon-user" class="update-user-info">个人信息</el-button>
				</div>
			</div>



			<div class="list-block">
				<div class="list-block-header">
					<div class="header-content">
						<a class="header-iteam selected-item">动态</a>|
						<a class="header-iteam">文章</a>|
						<a class="header-iteam">资源</a>|
						<a class="header-iteam">噪点</a>|
						<el-dropdown >
						  <el-button type="primary" class="header-iteam drop-button">
						    更多<i class="el-icon-arrow-down el-icon--right"></i>
						  </el-button>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item>关注者</el-dropdown-item>
						    <el-dropdown-item>被关注</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
						
						
					</div>
				</div>
			</div>
			<div class="list-block-body">
			</div>

		</div>
		<div class="GlobalSideBar">
          <div class="tools achievement ">
          	<h2 class="hometitle" style="margin-block-start:0px;">成就</h2>
			<ul class="achievement-list">
				<li><i class="fa fa-eye" aria-hidden="true" />获得了4512浏览</li>
				<li><i class="fa fa-commenting-o" aria-hidden="true" />获得了4512评论</li>
				<li><i class="fa fa-thumbs-o-up" aria-hidden="true" />获得了4512点赞</li>
				<li style="color: #8590A6;">于2020年1月3日加入</li>
			</ul>
          </div>
		  
		  <div class="tools collect-list-block ">
		  	<h2 class="hometitle" style="margin-block-start:0px;">收藏列表</h2>
		  	<ul class="collect-list">
		  		<li>第三方阿斯蒂芬</li>
		  		<li>打发士大夫爱的色放</li>
		  		<li>拉到精神分裂骄傲的</li>
		  	
		  	</ul>	
		  </div>
		  
		  
		  
		</div>
	</div>

</template>

<script>
	// import Tools from "../Tools/Tools.vue";
	export default {
		data() {
			return {
				squareUrl: "‪C:/Users/dell/Desktop/timg.gif",
				size: 100,
				fit: "scale-down"
			}
		}
	}
</script>

<style>
	
	.collect-list-block{
		margin-top: 20px;
		max-width: 450px;
	}
	.collect-list-block,.achievement{
		padding-bottom: 10px;
	}
	.collect-list,.achievement-list{
		padding: 0 0 0 10px;
		margin: 0;
		list-style: none;
	}
	.achievement-list li i{
		/* background: rgb(0,154,97); */
		color:#3780f7 ;
		padding: 5px 10px 5px 0px;
	}
	.achievement-list li{
		 font-weight: bold;
	}
	.collect-list li,.achievement-list li{
		    line-height: 28px;
		    font-size: 14px;
		    margin-bottom: 8px;
		    position: relative;
	}
	.list-block-body{
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
		height: 500px;
		
	}
	
	.drop-button,.drop-button:hover{
		background-color: transparent; border: 0;
		color: #000000;
		font-size: 15px;
	}
	.selected-item{
        box-shadow: inset 0 -2px 0 #3780f7;
	}
	.el-button+.el-button {
	   margin-left: 0px;
	}
	.list-block{
		width: 100%;
		margin-top: 20px;
		box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
	}
	.header-iteam:hover{
		color: rgb(0,132,255);
	}
	.header-iteam{
		flex: 0 0 auto;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    position: relative;
		    width: 7.5rem;
		    height: 100%;
			color: #000000;
		}
	
	.header-content {
		display: flex;
		align-items: center;
		margin: 0 auto;
		height: 100%;
		max-width: 960px;
		white-space: nowrap;
		color:#a6a6a6;;
	}

	.list-block-header {
		position: relative;
		margin: 0;
		padding: 0;
		height: 3.167rem;
		background-color: #fff;
		border-radius: .2rem .2rem 0 0;
		border-bottom: 1px solid #ebebeb;
		z-index: 100;
		width: 100%;
	}



	.usershow {
		
		border-radius: 2px;
		box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
		text-align: center;

	}

	.user-avatar {
		margin-right: 2.4rem;
		width: 6.5rem;
		height: 6.5rem;
		background-color: #f9f9f9;
		border-radius: 50%;
		margin-left: 30px;
	}

	.user-info-block {
		background-color: #fff;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 10px;
		padding-top: 10px;
		box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
	}

	.user-id-name {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1 1 auto;
		text-align: left;
	}

	.name-info {
		font-size: 2rem;
	}

	.acount-info,
	.phone-info {
		margin-top: 0.4125rem;
		color: #4a68ad;
		font-size: 1.0rem;
		line-height: 1.5;
	}

	.user-button {
		padding: 0.8125rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-right: 2.4rem;
	}

	.update-acount-info,
	.update-user-info {
		padding: 0;
		height: 1.834rem;
		font-size: 1.033rem;
		font-weight: 500;
		line-height: 1.2;
		border: 1px solid;
		background-color: #fff;
		border-radius: 4px;
		width: 7.834rem;
		color: #3780f7;
	}

	.update-user-info {
		margin-top: 0.8125rem;
	}
</style>
