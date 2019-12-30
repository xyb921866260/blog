<template>
  <div id="app">
	  <Writing />
  </div>
</template>

<script>
import Home from "./view/Home.vue" ;
import ArticleInfo from "./view/ArticleInfo.vue";
import Writing from "./view/Writing.vue";
export default {
  name: 'app',
  components: {
	Writing
  }
}
</script>

<style>

</style>
