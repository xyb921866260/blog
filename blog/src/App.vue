<template>
  <div id="app">
	<keep-alive >
	    <router-view></router-view>
	</keep-alive>
  </div>
</template>

<script>
import Home from "./view/Home.vue" ;
import ArticleInfo from "./view/ArticleInfo.vue";
import Writing from "./view/Writing.vue";
import Login from "./view/Login.vue";
export default {
  name: 'app',
  components: {
	Home,Login,Writing
  }
}
</script>

<style>

</style>
