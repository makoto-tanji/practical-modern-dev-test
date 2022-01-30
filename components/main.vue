<template>
  <div class="main-container">
    <div class="left-container">
      <SidebarComponent></SidebarComponent>
    </div>
    <div class="right-container">
      <div class="right-top-container">
        <h2 class="title">ホーム</h2>
        <CommentComponent></CommentComponent>
        <CommentComponent></CommentComponent>
        <CommentComponent></CommentComponent>
      </div>
      <div class="right-bottom-container">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
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
    /* border: 1px solid white; */
  }
  .right-top-container *{
    border: 1px solid white;
  }
  .right-bottom-container{
    height: 40vh;
  }
</style>