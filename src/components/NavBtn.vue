<template>
  <div class="nav-btn-container">
    <div class="interior-background-style flex-center">
      <el-icon :size="size" :color="color">
        <i-ep-house />
      </el-icon>
      <p class="text-red-200 text-2xl ml-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, recusandae
        consequatur dolore esse iure necessitatibus blanditiis nobis deleniti
        exercitationem distinctio consequuntur perferendis odit vero asperiores
        labore. Maiores eaque quidem mollitia!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const size = ref("36");
const color = ref("#ffffff");
</script>

<style lang="scss" scoped>
.nav-btn-container {
  width: 500px;
  height: 100px;
}
</style>
