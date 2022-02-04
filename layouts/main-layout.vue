<template>
  <div class="main-container">
    <div class="left-container">
      <SidebarComponent></SidebarComponent>
    </div>
    <div class="right-container" v-if="$sotre.state.userExists">
      <div class="right-top-container">
        <Nuxt />
      </div>
      <div class="right-bottom-container">
      </div>
    </div>
    <div class="right-container error-container" v-else>
      <h2>ログインされていません</h2>
      <NuxtLink to="/login">ログインする</NuxtLink>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  layout: 'main-layout',
  data() {
    return {
      auth: "",
      user: null,
      email: "",
      //
    }
  },
  mounted() {
    this.user = firebase.auth().currentUser;
    if (this.user !== null){
      this.$store.state.userExists = true;
      this.$store.state.displayName = this.user.displayName;
      this.$store.state.email = this.user.email;
    }
  },
}
</script>

<style scoped>
  .main-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .left-container{
    width: 25vw;
    margin-top: 20px;
  }
  .right-container{
    display: flex;
    flex-direction: column;
  }
  .right-top-container{
    width: 70vw;
    height: 40vh;
  }
  .right-top-container *{
    border: 1px solid white;
  }
  .right-bottom-container{
    height: 40vh;
  }
  .error-container{
  }
</style>