<template>
  <div class="container">
    <button @click="logout">ログアウト</button>
    <br />
    <NuxtLink to="/home">ホーム</NuxtLink>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('ログアウトが完了しました')
          this.$router.replace('/')
        })
    },
  },
}
</script>