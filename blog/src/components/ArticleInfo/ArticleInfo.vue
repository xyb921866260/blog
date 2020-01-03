<template>
	<div class="Topstory">
		<div class="Topstory-mainColumn art">
			<article>
				<div class="tt">
					<h2 class="title"><a href="/">陌上花开，可缓缓归矣</a></h2>
					<div class="shoucang">
						<span><i class="fa fa-star-o 2x" aria-hidden="true">收藏 </i></span>
	
					</div>
				</div>
	
	
				<ul class="text">
					<p>&nbsp;&nbsp;&nbsp;&nbsp;“陌上花开，可缓缓归矣。” 含义：（夫人），田间阡陌上的花开了，你可以一边赏花，一边慢慢地回来。</p>
					<p>“陌上花开，如果没有悄然伫立阡陌并为陌上风情所陶醉的人，那么花开也寂寞，风情也苍白....”喜欢这句话，是因为看了忍冬的作品《陌上花开缓缓归》</p>
					<p>阳春三月，风和日暖，信步城外，看阡陌之上的杨柳依依，野花绚烂，身心不由得轻爽而浪漫。“三月风情陌上花”，古远的诗句似乎随风从天边飘来，从历史的深处飘来，拂过阡陌，袭上心头，诗是属于清乾嘉诗人赵翼的，可昂首远望，眼前的陌上风情却是不折不扣的现代，由眼帘入心扉。</p>
					<p class="textimg"><img src="../../images/text02.jpg"></p>
					<p>漫步陌上，心情是诗意的那种，优雅而散淡，不惹匆促，只因陌上花开；花是自然的那种，朴素而恬淡，不落尘俗。“三月风情陌上花”，是花在其中生命得以璀璨，人在其中心情得以畅然的一种意境。三月陌上花，让人爱让人痴，恍惚人的骨子里头都沉淀了花的影子，花的风韵。</p>
					<p>陌上花开，如果没有了从俗累的生活中走出来，悄然伫立阡陌并为陌上风情所陶醉的人，那么花开也寂寞，风情也苍白。于是，一句“陌上花开，可缓缓归矣”不知被多少人吟诵了多少遍。人归缓缓，那花便有灵性，便开得执著，陌上风情也被撩拨得浓郁而热烈。</p>
					<p>缓缓归，缓缓归，披一袭“三月风情”，再采一束“陌上花”，缓缓归。</p>
					<p>缓缓归矣，我心已是陌上花开。</p>
				</ul>
				<div class="textfoot">
					<a href="/">上一篇</a>
					<a href="/">下一篇</a>
				</div>
			</article>
		</div>
		<div class="GlobalSideBar"> 
		<div class="articlist"></div>
		<div class="comments">
			<h2 class="hometitle"><i class="fa fa-commenting-o" aria-hidden="true" />评论</h2>
			<Comment />
		</div>
		
		</div>
	</div>
	
</template>

<script>
	import Comment from "../../components/Comment/Comment.vue";
	export default {
		name: 'app',
		components: {
			Comment
		}
	}
</script>

<style>
	@import url("../../css/ArticleInfo/a.css");
	.articlist{
		width: 100%;
		clear: both;
		overflow: hidden;
		background: #fff;
		margin-bottom: 20px;
		height: 200px;
	}
	.comments {
		width: 100%;
		clear: both;
		overflow: hidden;
		background: #fff;
		margin-bottom: 20px;
	}
	
	.hometitle {
		padding: 0 10px;
		line-height: 50px;
		height: 50px;
		font-size: 18px;
		border-bottom: 1px solid #e5e5e5;
		color: #333;
		position: relative
	}
	
	.hometitle:after {
		content: '';
		position: absolute;
		height: 2px;
		width: 0;
		right: inherit;
		top: inherit;
		left: 0;
		bottom: -1px;
		background: #333;
		transition: 2s ease all;
	}
	
	.hometitle:hover:after {
		width: 100%;
		transition: 2s ease all;
	}
	.art{
		background: #FFFFFF;
	}
</style>
