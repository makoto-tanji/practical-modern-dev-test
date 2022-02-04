<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/imgs/logo.png" class="img">
      <div class="header-right">
        <NuxtLink to="/register">新規登録</NuxtLink>
        <NuxtLink to="/login">ログイン</NuxtLink>
      </div>
    </div>
    <div class="form-card">
      <h2>新規登録</h2>
      <div class="name">
        <input type="text" placeholder="ユーザーネーム" required v-model="name">
      </div>
      <div class="email">
        <input type="email" placeholder="メールアドレス" required v-model="email">
      </div>
      <div class="password">
        <input type="password" placeholder="パスワード(6文字以上)" required v-model="password">
      </div>
      <button class="btn" @click="register">新規登録</button>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
    }
  },
  methods: {
    register() {
      if (!this.name || !this.email || !this.password) {
        alert('必要事項が入力されていません。')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          //ユーザー名登録
          data.user.updateProfile({
            displayName: this.name
          }),
          //
          data.user.sendEmailVerification().then(() => {
            this.$router.replace('/confirm')
          })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },  //end methods
}
</script>

<style scoped>
input{
  width:300px;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.header-right *{
  margin-right: 20px;
}
.form-card{
  width: 350px;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #000;
  margin: 100px auto 30px auto;
  padding: 20px 30px;
  border-radius: 10px;
}
.form-card *{
  margin-top: 10px;
}
</style>
