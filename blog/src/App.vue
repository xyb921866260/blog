<template>
  <div id="app">
	  <ArticleInfo />
  </div>
</template>

<script>
import Home from "./view/Home.vue" ;
import ArticleInfo from "./view/ArticleInfo.vue";
export default {
  name: 'app',
  components: {
	  Home,ArticleInfo
  }
}
</script>

<style>

</style>
