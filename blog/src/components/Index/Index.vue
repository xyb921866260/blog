<template>
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
				<router-link to='sign'>登录</router-link>
			</div>
			<div class="tagscloud"><TagCloud /></div>
			<div class="tools">
	                  <Tools />
	        </div>
		</div>
	
	</div>
	
</template>

<script>
	import SearchBar from "../../components/SeatchBar/SearchBar.vue";
	import ArticleList from "../../components/ArticleList/ArticleList.vue";
	import TagCloud from "../../components/TagsCloud/TagsCloud.vue";
	import Tools from "../../components/Tools/Tools.vue";
	export default {
		name: 'app',
		components: {
			SearchBar,ArticleList,TagCloud,Tools
		}
	}
</script>

<style>
</style>
