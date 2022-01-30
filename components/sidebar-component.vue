<template>
  <div class="sidebar">
    <img src="@/assets/imgs/logo.png"  alt="logo" class="img">
    <div class="img-link-container">
      <img src="@/assets/imgs/home.png" class="img small-img">
      <NuxtLink to="/home">ホーム</NuxtLink>
    </div>
    <div class="img-link-container">
        <img src="@/assets/imgs/logout.png" class="img small-img">
        <NuxtLink to="/logout">ログアウト</NuxtLink>
    </div>
    <div class="share-container">
      <h2 class="title-share">シェア</h2>
      <textarea name="share" id="share" cols="30" rows="7" placeholder="160文字以内で" v-model="share"></textarea>
    </div>
    <button class="btn share-btn">シェアする</button>
  </div>
</template>

<style scoped>
  .sidebar{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }
  .img-link-container{
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  .small-img{
  width: 30px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  }
  .title-share{
    margin: 30px 0 10px 0;
  }
  textarea{
    border: 1px solid white;
    border-radius: 5px;
    background-color: rgb(23, 32, 42);
    resize: vertical;
    color: white;
  }
  button{
    margin: 10px 0px 0px 0px;
  }
  .share-btn{
    margin-right: 20px;
  }
</style>