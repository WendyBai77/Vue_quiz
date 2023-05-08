<template>
  <div class="bg-color" :style="{ backgroundColor: $root.color }">
    <h1 class="h3">點餐頁面</h1>

    <!-- 作為網頁顯示使用 -->
    <router-view></router-view>
    <!-- 菜單元件-->
    <OrderComponent></OrderComponent>
    <!-- 點餐輸入表單元件 -->
    <InputComponent
      label="姓名"
      input-type="text"
      v-model="textValue"
      :value="textValue"
    ></InputComponent>
    <InputComponent
      label="甜度"
      input-type="radio"
      v-model="radioValue"
      :value="radioValue"
    ></InputComponent>
    <InputComponent
      label="數量"
      input-type="select"
      v-model="selectValue"
      :value="selectValue"
    ></InputComponent>
    <!-- 測試雙向綁定是否成功 -->
    <div class="my-5 row justify-content-center">
      <div class="router-link h2 d-flex flex-column justify-content-center align-items-center">
        <RouterLink class="btn btn-outline-gary-300 px-6 py-1 mb-5" to="/">回首頁</RouterLink>
        <button class="btn btn-primary mb-5 px-4 py-1" @click="showValues">印出目前的值</button>
      </div>

      <div class="mb-5 text-center">
        <h3 class="mb-3">目前顯示的值</h3>
        <ul>
          <template v-if="textValue">
            <li class="mb-1 text-center">姓名：{{ textValue }}</li>
          </template>
          <template v-else>
            <li class="mb-1 text-center">姓名：無輸入資料</li>
          </template>

          <template v-if="textValue">
            <li class="mb-1 text-center">甜度：{{ radioValue }}</li>
          </template>
          <template v-else>
            <li class="mb-1 text-center">甜度：無輸入資料</li>
          </template>

          <template v-if="textValue">
            <li class="mb-1 text-center">數量：{{ selectValue }}</li>
          </template>
          <template v-else>
            <li class="mb-1 text-center">數量：無輸入資料</li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import OrderComponent from '@/components/OrderComponent.vue'
import InputComponent from '@/components/InputComponent.vue'

export default {
  data() {
    return {
      textValue: '',
      radioValue: '',
      selectValue: 1
    }
  },
  components: { OrderComponent, InputComponent },
  methods: {
    showValues() {
      console.log(`Text Input: ${this.textValue}`)
      console.log(`Radio Input: ${this.radioValue}`)
      console.log(`Select Input: ${this.selectValue}`)
    }
  },
  created() {
    this.$root.color = '#FBF7EC'
    this.$root.theme = 'light'
  }
}
</script>
