<template>
	<el-container>
		<el-header>
			<header  class="Sticky AppHeader2" >
				<div class="AppHeader-inner2" >
					<a><img src="../images/绿色.png" style="width: 230px;height: 55px;" /></a>
					<div class="writingArticle2" style="align-items:center;"><span>写文章</span></div>
					<div class="submitArticle">
						
						<div style="float: right;"><el-dropdown trigger="click">
						  <el-button type="primary">
						    发布文章<i class="el-icon-arrow-down el-icon--right"></i>
						  </el-button>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item>黄金糕</el-dropdown-item>
						    <el-dropdown-item>狮子头</el-dropdown-item>
						    <el-dropdown-item>螺蛳粉</el-dropdown-item>
						    <el-dropdown-item>双皮奶</el-dropdown-item>
						    <el-dropdown-item>蚵仔煎</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown></div>
						
						
					</div>
				</div>
			</header>
		</el-header>
		<el-main>
		  	<div class="Topstory2">
				<div class="writingTitle">
					<el-input type="text" placeholder="请输入内容" v-model="text" maxlength="20" show-word-limit class="form-control form-control-lg" style="width:initial;"></el-input>
				</div>
				
				<div class="addTags">
					<el-tag
					  :key="tag"
					  v-for="tag in dynamicTags"
					  closable
					  :disable-transitions="false"
					  @close="handleClose(tag)">
					  {{tag}}
					</el-tag>
					<el-input
					  class="input-new-tag"
					  v-if="inputVisible"
					  v-model="inputValue"
					  ref="saveTagInput"
					  size="small"
					  @keyup.enter.native="handleInputConfirm"
					  @blur="handleInputConfirm"
					>
					</el-input>
					<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
					   
					
				</div>
				
				<div class="addPicture">
			<el-upload
			  action="https://jsonplaceholder.typicode.com/posts/"
			  list-type="picture-card"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
				</div>
				
				<div class="markdown">
					<Markdown></Markdown>
					
				</div>
				
			</div>
		
		</el-main>
		
	</el-container>	
</template>

<script>
	import Markdown from "../components/MarkDown/Markdowm.vue";
	export default {
	  data() {
	    return {
	      text: '',
		   dynamicTags: ['标签一', '标签二', '标签三'],
		   inputVisible: false,
		   inputValue: '',
		   dialogImageUrl: '',
		   dialogVisible: false
	    }
	  },
	  components: {
	  	Markdown
	  },
	  methods: {
	        handleClose(tag) {
	          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
	        },
	  
	        showInput() {
	          this.inputVisible = true;
	          this.$nextTick(_ => {
	            this.$refs.saveTagInput.$refs.input.focus();
	          });
	        },
	  
	        handleInputConfirm() {
	          let inputValue = this.inputValue;
	          if (inputValue) {
	            this.dynamicTags.push(inputValue);
	          }
	          this.inputVisible = false;
	          this.inputValue = '';
	        },
 handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
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
	.Topstory2{
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-box-align: start;
		    -ms-flex-align: start;
		    align-items: flex-start;
		    width: 1000px;
			height: 1000px;
		    margin: 0px auto;
			flex-direction: column ;
		}
		
		.AppHeader2 {
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
		.form-control{
			
		}
		.AppHeader-inner2 {
		    display: flex;
		    width: 1000px;
		    height: 52px;
		    margin: 0 auto;
		    -ms-flex-align: center;
		    align-items: center;
		    -webkit-transition: -webkit-transform .3s;
		    transition: -webkit-transform .3s;
		    transition: transform .3s;
		    transition: transform .3s,-webkit-transform .3s;
			justify-content: space-between;
		}
		.writingArticle2 span{
			    color: #6c757d!important;
				font-size: 1.8rem;
				font-weight: 600;
			    line-height: 1.2;
		}
		.writingTitle{
			    margin-bottom: 1rem;
				width: 100%;
		}
		.form-control-lg{
			    padding: .5rem 1rem;
			    font-size: 1.25rem;
			    line-height: 1.5;
			    border-radius: .3rem;
			    display: block;
			    font-weight: 400;
			    color: #495057;
			    background-color: #fff;
			    background-clip: padding-box;
			    border: 1px solid #ced4da;
			    box-shadow: 0 1px 3px rgba(26,26,26,.1);
		
		}
		.addPicture,.addTags{
			width: 100%;
			margin-bottom: 20px;
			
		}
		  .el-tag + .el-tag {
		    margin-left: 10px;
		  }
		 .button-new-tag,.el-tag{
			 
			  height: 35px;
			  border-radius: 5px;
			  line-height: 32px;
			  padding-left: 8px;
			  font-size: 14px;
		  }
		  .button-new-tag {
		    margin-left: 10px;
		    height: 32px;
		    line-height: 30px;
		    padding-top: 0;
		    padding-bottom: 0;
		  }
		 .input-new-tag {
		    width: 90px;
		    margin-left: 10px;
		    vertical-align: bottom;
		  }
		  .el-upload{
			  max-width: 1000px;
		  }
		  
		 .markdown{
			 width: 100%;
			 -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
			 box-shadow: 0 1px 3px rgba(26,26,26,.1);
			 background: #FFFFFF;
			
		 } 
		 .markdown-body{
			  height: 700px;
		 } 
		 .submitArticle{
			 width:230px;
			 /* line-height: 200px; */
		 }
		.el-dropdown-selfdefine span{
			font-size: 16 px;
		}
</style>
