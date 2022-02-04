<template>
  <div class="container">
    <NuxtLink to="/register">新規登録</NuxtLink>
    <NuxtLink to="/login">ログイン</NuxtLink>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      message: 'ログインができておりません',
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.message = 'ログイン済みです'
      }
    })
  },
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: center;
    margin: 50px 50px;
  }
  .container *{
    padding: 20px;
    margin: 10px;
    color: #000;
    background-color: #fff;
    border: 1px solid white;
    border-radius: 10px;
  }
</style>