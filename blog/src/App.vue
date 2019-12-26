
 <transition
 	mode="out-in"
 	@before-enter="beforeEnter"
 	@enter="enter"
 
 	@before-leave="beforeLeave"
 	@leave="leave"
 	:css="false">
 
 </transition> <template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './view/header.vue'
export default {
  name: 'app',
  components: {
   Header 
  }
}
</script>

<style>

</style>
