<template>
  <div class="container">
    <h2>本当にログアウトしますか？</h2>
    <button @click="logout" class="btn">ログアウト</button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  layout: 'main-layout',
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

<style scoped>
  .container{
    width: 80%;
    margin-top:100px;
    padding: 30px 0px;
    /* border: 1px solid #fff; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container *{
    margin: 10px 0px;
  }
</style>