<template>
  <div class="container">
    <NuxtLink to="/register">新規登録</NuxtLink>
    <NuxtLink to="/login">ログイン</NuxtLink>
    <NuxtLink to="/logout">ログアウト</NuxtLink>
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