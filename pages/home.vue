<template>
  <div class="container">
    <div class="left-contents">
        <img src="@/assets/imgs/logo.png"  alt="logo" class="img">
      <div class="home-container">
        <img src="@/assets/imgs/home.png" class="img small-img">
        <NuxtLink to="/home">ホーム</NuxtLink>
      </div>
      <div class="logout-container">
        <img src="@/assets/imgs/logout.png" class="img small-img">
        <NuxtLink to="/signup">ログアウト</NuxtLink>
      </div>
      <div class="share">
        <textarea name="share" id="share" cols="10" rows="10" placeholder="160" v-model="share"></textarea>
      </div>
    </div>
    <div class="main-content">
      MAIN
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }, //end data
  methods:{
  }, //end ,ethods
}
</script>

<style scoped>
textarea{
  border-radius: 5px;
  line-height: 30px;
}
.container{
  display: flex;
  flex-direction: row;
}
.left-contents{
  width: 20%;
}
.home-container, .logout-container{
  display: flex;
  flex-direction: row;
  align-items: center;
}
/* .home-container *, .logout-container *{
} */
.small-img{
  width: 30px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.main-content{
  width:80%;
  border: 1px solid white;
}

</style>