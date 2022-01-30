<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/imgs/logo.png" class="img">
      <div class="header-right">
        <NuxtLink to="/signup">新規登録</NuxtLink>
        <NuxtLink to="/login">ログイン</NuxtLink>
      </div>
    </div>
    <div class="new">
      <h2>ログイン</h2>
      <div class="email">
        <input type="email" name="email" id="email" placeholder="メールアドレス" v-model="newEmail">
      </div>
      <div class="password">
        <input type="password" name="password" id="password" placeholder="パスワード" v-model="newPassword">
      </div>
      <button class="btn" @click="createAccount">新規登録</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: '',
      newEmail: '',
      newPassword: '',
    };
  }, //end data
  methods:{
  }, //end ,ethods
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
.new{
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
.new *{
  margin-top: 10px;
}
</style>
