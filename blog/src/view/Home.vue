<template>
	<el-container>
		<el-header>
			<Header ></Header>
		</el-header>
		<el-main>
			<div class="Topstory">


				<div class="Topstory-mainColumn">
                     <!-- 信息头部 -->
					<div class="Card Topstory-noMarginCard Topstory-tabCard">
						<nav class="TopstoryTabs Topstory-tabs">
							<a aria-controls="Topstory-recommend" class="TopstoryTabs-link Topstory-tabsLink is-active" href="/">推荐</a>
							<a aria-con
							trols="Topstory-follow" class="TopstoryTabs-link Topstory-tabsLink" href="/follow">关注</a>
							<a aria-controls="Topstory-hot" class="TopstoryTabs-link Topstory-tabsLink" href="/hot">热榜</a>
						</nav>
					</div>
					<!-- 文章主体 -->
					<div class="articlebody" >
						
						<ArticleList></ArticleList>
						<ArticleList></ArticleList>
						<ArticleList></ArticleList>
						<ArticleList></ArticleList>
						<div class="pagelist">
							<el-pagination
						  background
						  layout="prev, pager, next"
						  :total="1000">
						</el-pagination>
						</div>
						
					</div>
					
				</div>
				<div class="GlobalSideBar">
					<div><SearchBar/></div>
					<div class="userinfo">
						<router-link to='login'>登录</router-link>
					</div>
					<div class="tagscloud"><TagCloud /></div>
					<div class="tools">
                              <Tools />
                    </div>
				</div>

			</div>


		</el-main>

	</el-container>
</template>

<script>
	import Header from "../components/Header/Header.vue";
	import SearchBar from "../components/SeatchBar/SearchBar.vue";
	import ArticleList from "../components/ArticleList/ArticleList.vue";
	import TagCloud from "../components/TagsCloud/TagsCloud.vue";
	import Tools from "../components/Tools/Tools.vue";
	export default {
		name: 'app',
		components: {
			Header,SearchBar,ArticleList,TagCloud,Tools
		}
	}
</script>

<style>
	body{
		margin: 0;
		padding: 0;
	}
	.el-main{
		background: #EBEBEB;
	}
	.el-header{
		padding: 0;
	}
	.articlebody{
		padding-top: 10px;
	}
	.userinfo{
		margin-top: 20px;
		width: 100%;
		height: 300px;
		background: #FFFFFF;
		box-shadow: 0 1px 3px rgba(26,26,26,.1);
	}
	.pagelist{
		padding: 5px;
		background: #FFFFFF;
		box-shadow: 0 1px 3px rgba(26,26,26,.1);
        text-align: center;
	}
	.tagscloud{
		margin-top: 20px;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0 1px 3px rgba(26,26,26,.1);
	}
	.tools{
		width: 100%;
		height: 220px;
		background: #FFFFFF;
		box-shadow: 0 1px 3px rgba(26,26,26,.1);
	}
	.Topstory{
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-box-align: start;
		    -ms-flex-align: start;
		    align-items: flex-start;
		    width: 1000px;
			height: 1000px;
		    margin: 0px auto;
		}
		.Topstory-mainColumn {
		    -ms-flex-negative: 0;
		    flex-shrink: 0;
		    margin-right: 10px;
		    margin-bottom: 0;
		    width: 700px;
			
		}
		.GlobalSideBar {
		    -webkit-box-flex: 1;
		    -ms-flex: 1 1;
		    flex: 1 1;
		    font-size: 14px;
			/* background: #42B983; */
		}
		
		
		.Topstory-tabCard {
		    -webkit-box-shadow: none;
		    box-shadow: none;
		}
		.Topstory-noMarginCard {
		    margin-bottom: 0!important;
		}
		.Card {
		    margin-bottom: 10px;
		    background: #fff;
		    overflow: hidden;
		    border-radius: 2px;
		    -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
		    box-shadow: 0 1px 3px rgba(26,26,26,.1);
		    -webkit-box-sizing: border-box;
		    box-sizing: border-box;
		}
		.Topstory-tabs {
		    border-bottom: 1px solid #f0f2f7;
		}
		.TopstoryTabs {
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    border-bottom: 1px solid #f6f6f6;
		    height: 58px;
		}
		
		
		.TopstoryTabs-link.is-active {
		    color: #0084ff;
		    font-weight: 500;
		}
		.TopstoryTabs-link {
		    -webkit-box-align: center;
		    -ms-flex-align: center;
		    align-items: center;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    font-size: 16px;
		    margin: 0 22px;
		}
		.TopstoryTabs-link.is-active {
	    color: #0084ff;
	    font-weight: 500;
	}
	.TopstoryTabs-link {
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    font-size: 16px;
	    margin: 0 22px;
	}
	.TopstoryTabs-link:hover{
		color: rgb(0,132,255);
	}
		a {
		    color: inherit;
		    text-decoration: none;
			cursor: pointer;
		}
</style>
