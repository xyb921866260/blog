<template>
	<div class="articleinfo"> 
	<span class="blogpic"><a href="/"><img src="../../images/text02.jpg"></a></span>
	  <h3 class="blogtitle"><router-link to="articleInfo">陌上花开，可缓缓归矣</router-link></h3>
	  <div class="bloginfo">
	    <p>用最简单的代码，实现瀑布流布局，没有繁琐的css，没有jq，只需要做到以下就可以实现瀑布流的效果。思路很简单，看成是三列布局，分别用三个ul来调用。帝国cms列表模板，...</p>
	  </div>
	  <div class="autor">
		  <span class="lm"><a href="/" title="CSS3|Html5" target="_blank" class="classname">CSS3|Html5</a></span>
		  <span class="dtime">2018-05-04</span>
		  <span class="viewnum"><i class="fa fa-eye" aria-hidden="true" />浏览（21）</span>
		  <span class="likenum"><i class="fa fa-thumbs-o-up" aria-hidden="true" />喜欢（21）</span>
		  <span class="commentsnum"><i class="fa fa-commenting-o" aria-hidden="true" />评论（21）</span>
		  <span class="readmore"><a href="/">阅读原文>></a></span>
		  </div>
	</div>
</template>

<script>
</script>

<style>
	.articleinfo{
		    margin-bottom: 10px;
		    overflow: hidden;
		    padding: 10px;
		    background: #fff;
	}
	.blogpic {
	    overflow: hidden;
	    width: 30%;
	    display: block;
	    float: left;
	    margin-right: 20px;
	    border-radius: 10px;
	}
	.blogpic img {
	    width: 100%;
	}
	h3.blogtitle {
	    line-height: 30px;
	    height: 30px;
	    margin: 10px 0;
		
	}
	.blogtitle a{
		font-family: "Hanzipen SC";
	}
	.autor {
	    width: 100%;
	    overflow: hidden;
	    clear: both;
	    margin: 20px 0 0 0;
	    display: inline-block;
	    color: #838383;
	    font-size: 12px;
		
	}
	.autor span {
	    margin-right: 10px;
	    padding-left: 20px;
	}
	.readmore {
	    float: right;
	}
	.lm {
	    background: url("../../images/newsbg01.png") no-repeat left center;
	}
	.autor span a {
	    color: #096;
	}
	.bloginfo p {
	    color: #888;
	    line-height: 24px;
		font-size: 14px;;
	}
</style>
