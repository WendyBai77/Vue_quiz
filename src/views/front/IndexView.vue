<template>
  <div class="bg-color" :style="{ backgroundColor: $root.color }">
    <h3 class="mb-2">首頁</h3>

    <div class="banner container mb-5 gx-0" :class="`banner-${$root.theme}`">
      <div class="banner-content">
        <h1 class="text-gary-100">來點飲料囉～</h1>
      </div>
    </div>

    <div class="container">
      <div class="my-5 row justify-content-center">
        <div class="router-link h2">
          <RouterLink to="/order">
            <i class="fa-regular fa-hand-point-right"></i>
            點餐頁</RouterLink
          >
        </div>

        <div>
          <h3 class="mt-6 mb-3">訂單資訊</h3>
          <ul>
            <li v-for="(item, index) in data" :key="index">
              <div class="mb-1">姓名：{{ item.name }}</div>
              <div class="mb-3">城市：{{ item.city }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer">
      <nav class="navbar">
        <div class="border-top container-fluid d-flex justify-content-center">
          <p class="text-gary-300 py-2">雨天不想外出、太熱不想走路，GOGO 一起來訂餐!</p>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: '',
          city: ''
        }
      ]
    }
  },
  created() {
    this.$root.color = '#DFE4EB'
    this.$root.theme = 'dark'
  },
  mounted() {
    this.$http
      .get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      .then((res) => {
        // console.log(res)
        this.data = res.data
        // console.log(this.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
