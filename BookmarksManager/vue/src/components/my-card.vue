<template>
  <div class="el-card is-always-shadow">
    <div class="el-card__header">
      <slot name="header"></slot>
    </div>
    <div class="el-card__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.el-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  margin: 20px;
}
.is-always-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-card__header {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
}
.el-card__body {
  padding: 20px;
}
</style>
