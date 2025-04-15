<template>
  <base-layout>
    <div class="content">
      <h2>Error 404</h2>
      <main>无效路径：{{ `${$route.path}` }}</main>
    </div>
  </base-layout>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  main {
    color: #ccc;
    margin-top: 10px;
  }
}
</style>
