<!-- 留言评论模块 -->
<template>
    <div class="tmsgBox"  ref="tmsgBox">
        <div class="tmsg-respond"  ref="respondBox">
            <form class=""  >
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="说点什么呢``"
                  v-model="textarea">
                </el-input>
                <div :class="pBody?'OwO':'OwO OwO-open'">
                    <div class="OwO-logo" @click="pBody=!pBody">
                        <span>OwO表情</span>
                    </div>
					<el-row class="tmsg-r-info">
					    <el-col :span="24" class="info-submit">
					        <p class="tcolors-bg" @click="sendMsg">{{sendTip}}</p>
					    </el-col>
					</el-row>
					
                    <div class="OwO-body">
                        <ul class="OwO-items OwO-items-show">
                            <li class="OwO-item" v-for="(oitem,index) in OwOlist" :key="'oitem'+index" @click="choseEmoji(oitem.title)">
                              <!--  <img :src="'../../static/emot/'+oitem.url" alt=""> -->
								<img :src="getImgUrl(oitem.url) " />
                            </li>
                        </ul>
                    </div>
                </div>
                
            </form>
        </div>
        <div class="tmsg-comments"  ref="listDom">
            <a href="#" class="tmsg-comments-tip">活捉 {{commentList?commentList.length:0}} 条</a>
            <div class="tmsg-commentshow">
                <ul class="tmsg-commentlist">
                    <li class="tmsg-c-item" v-for="(item,index) in commentList" :key="'common'+index">
                        <article class="">
                            <header>
                                <img  :src="item.avatar"  :onerror="$store.state.errorImg">
                                <div class="i-name">
                                    {{item.username}}
                                </div>
                                <div class="i-class">
                                    {{item.label}}
                                </div>
                                <div class="i-time">
                                    <time>{{item.time}}</time>
                                </div>
                            </header>
                            <section>
                                <p v-html="analyzeEmoji(item.content)">{{analyzeEmoji(item.content)}}</p>
                                <div v-if="haslogin" class="tmsg-replay" @click="respondMsg(item.comment_id,item.comment_id)">
                                    回复
                                </div>
                            </section>
                        </article>
                        <ul v-show="item.ChildsSon" class="tmsg-commentlist" style="padding-left:60px;">
                            <li class="tmsg-c-item" v-for="(citem,cindex) in item.ChildsSon" :key="'citem'+cindex">
                                <article class="">
                                    <header>
                                            <img :src="citem.avatar"  :onerror="$store.state.errorImg">
                                            <div class="i-name">
                                                {{citem.username}} <span>回复</span> {{citem.reply_name}}
                                            </div>
                                            <div class="i-class">
                                                {{citem.label}}
                                            </div>
                                            <div class="i-time">
                                                <time>{{citem.time}}</time>
                                            </div>
                                    </header>
                                    <section>
                                        <p v-html="analyzeEmoji(citem.content)">{{citem.content}}</p>
                                        <div v-show="haslogin" class="tmsg-replay" @click="respondMsg(citem.comment_id,item.comment_id)">
                                            回复
                                        </div>
                                    </section>
                                </article>
                            </li>
                        </ul>
                    </li>

                </ul>
                <h1 v-show='hasMore' class="tcolors-bg" @click="addMoreFun" >查看更多</h1>
                <h1 v-show='!hasMore' class="tcolors-bg" >没有更多</h1>
            </div>
        </div>
    </div>
</template>

<script>
    import {ArticleComment,OtherComment,setArticleComment,setOuthComment} from "../../utils/serve.js"
	
	import appdata from "../../static/emot.json"; 
    export default {
        data() { //选项 / 数据
            return {
                respondBox:'',//评论表单
                listDom:'',//评论列表
                tmsgBox:'',//总评论盒子
                isRespond:false,
                textarea: '',//文本框输入内容
                pBody:true,//表情打开控制
                commentList:'',//评论列表数据
                pageId:0,//当前第几页
                aid:0,//文章id
                hasMore:true,
                haslogin:false,
                userId:'',//用户id
                leaveId:0,//回复评论的当前的commentId
                leavePid:'',//赞赏等其他模块的分类id
                pid:'',//回复评论的一级commentId
                sendTip:'发送~',
                OwOlist:appdata
            }
        },
        methods: { //事件处理器
          //选择表情包
          choseEmoji:function(inner){
              this.textarea +='[' + inner + ']';
          },
		  
		  getImgUrl(icon){
		     return require("@/static/emot/"+icon);
		  },
          analyzeEmoji:function(cont){//编译表情替换成图片展示出来
              var pattern1 = /\[[\u4e00-\u9fa5]+\]/g;
                var pattern2 = /\[[\u4e00-\u9fa5]+\]/;
                var content = cont.match(pattern1);
                var str = cont;
                if(content){
                    for(var i=0;i<content.length;i++){
                        for(var j=0;j<this.OwOlist.length;j++){
                            if("["+this.OwOlist[j].title +"]" == content[i]){
                                var src = this.OwOlist[j].url;
                                break;
                            }
                        }
                        str = str.replace(pattern2,'<img src="static/emot/'+src+'"/>');
                    }
                    // console.log(str);
                }
                return str;
          },
          //发送留言
          sendMsg:function(){//留言
              var that = this;
              if(that.textarea){
                  that.sendTip = '咻~~';
                  if(that.leaveId==0){
                    //   console.log(that.textarea,that.userId,that.aid,that.leavePid,that.pid);
                      setArticleComment(that.textarea,that.userId,that.aid,that.leavePid,that.pid,function(msg){
                        //   console.log(msg);
                          that.textarea = '';
                          that.routeChange();
                          that.removeRespond();
                          var timer02 = setTimeout(function(){
                              that.sendTip = '发送~';
                              clearTimeout(timer02);
                          },1000)
                      })
                  }else{
                      //其他模块留言回复
                      setOuthComment(that.textarea,that.userId,that.aid,that.leaveId,that.leavePid,that.pid,function(msg){
                        //   console.log(msg);
                          that.textarea = '';
                          that.removeRespond();
                        that.routeChange();
                      })
                  }
              }else{
                  that.sendTip = '内容不能为空~'
                  var timer = setTimeout(function(){
                      that.sendTip = '发送~';
                      clearTimeout(timer);
                  },3000)
              }
          },
          respondMsg:function(leavePid,pid){//回复留言
              // console.log(leavePid,pid);
              var that = this;
              if(localStorage.getItem('userInfo')){
                  var dom = event.currentTarget;
                  dom = dom.parentNode;
                  this.isRespond = true;
                  this.leavePid = leavePid;
                  this.pid = pid;
                  dom.appendChild(this.$refs.respondBox);
              }else{
                  that.$confirm('登录后即可点赞和收藏，是否前往登录页面?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {//确定，跳转至登录页面
                        //储存当前页面路径，登录成功后跳回来
                        localStorage.setItem('logUrl',that.$route.fullPath);
                        that.$router.push({path:'/Login?login=1'});
                   }).catch(() => {
                   });
              }
          },
          removeRespond:function(){//取消回复留言
              this.isRespond = false;
              this.$refs.tmsgBox.insertBefore(this.$refs.respondBox,this.$refs.listDom);
          },
          showCommentList: function(initData){//评论列表
              var that = this;
              that.aid = that.$route.query.aid==undefined?1:parseInt(that.$route.query.aid);//获取传参的aid
              //判断当前用户是否登录
              if(localStorage.getItem('userInfo')){
                  that.haslogin = true;
                  that.userInfo = JSON.parse(localStorage.getItem('userInfo'));
                  that.userId = that.userInfo.userId;
                //   console.log(that.userInfo);
              }else{
                  that.haslogin = false;
              }
              //是否重新加载数据 还是累计加载
              that.pageId = initData ? 0 : that.pageId;
              //公用设置数据方法
              function setData(result){
                  if(result.code==1001){//查询数据
                      var msg = result.data;
                    //   console.log("留言数据",result.data);
                      if(msg.length>0&&msg.length<8){
                          that.hasMore = false
                      }else{
                          that.hasMore = true;
                      }
                      that.commentList = initData ? msg : that.commentList.concat(msg);
                      that.pageId = msg[msg.length-1].comment_id;
                  }else{//查询数据为空
                      that.hasMore = false;
                      that.commentList = initData ? [] : that.commentList
                  }
              }
              if(that.$route.name=='DetailShare'){//文章列表的评论
                  that.leaveId = 0;
                  ArticleComment(that.aid,that.pageId,function(result){//查询列表
                        setData(result);
                  })
              }else{//其他评论
                  if(that.$route.name == 'Reward'){//（1：赞赏 2：友情链接 3：留言板 4：关于我）
                      that.leaveId = 1
                  }else if(that.$route.name == 'FriendsLink'){
                      that.leaveId = 2
                  }else if(that.$route.name == 'Message'){
                      that.leaveId = 3
                  }else if(that.$route.name == 'Aboutme'){
                      that.leaveId = 4
                  }
                  OtherComment(that.leaveId,that.pageId,function(result){
                      setData(result);
                  })
              }
          },
          addMoreFun:function(){//查看更多
              this.showCommentList(false);
          },
          routeChange:function(){//重新加载
              var that = this;
              this.showCommentList(true);
          }
        },
        components: { //定义组件
        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           // '$route':'routeChange'
         },
        created() { //生命周期函数
            // console.log(this.$route);
            var that = this;
            that.routeChange();
        },
        mounted(){//页面加载完成后
        }
    }
</script>

<style>
@import url("Cindex.css");
.OwO{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>