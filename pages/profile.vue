<template>
  <div class="container">
    <div class="user-info" v-show="$sotre.state.userExists">
      <p>ユーザー名：{{$store.state.displayName}}</p>
      <p>メールアドレス：{{$store.state.email}}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main-layout',
}
</script>

<style scoped>
  .container{
    width: 100%;
    display: flex;
    background-color: rgb(71, 71, 71);
    margin-top:100px;
    padding: 30px 0px;
    border: 1px solid #fff;
  }
  .user-info *{
    margin-top: 15px;
  }
</style>