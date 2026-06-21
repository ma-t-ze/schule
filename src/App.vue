<!-- App.vue -->

<template>
  <div>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
  </div>
</template>

<script>
// import LoginPage from './components/views/LoginPage/LoginPage.vue';

export default {
  name: 'App',
  components: {
  },
  computed: {
    isAuthenticated() {
      // Assuming you have a 'isAuthenticated' state in your Vuex store
      return this.$store.state.isAuthenticated;
    }
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
