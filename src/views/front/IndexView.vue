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
        <div class="router-link h2 col-lg-3 col-6 mb-5">
          <RouterLink to="/order">
            <i class="fa-regular fa-hand-point-right"></i>
            點餐頁</RouterLink
          >
        </div>

        <div class="col-lg-3 col-6">
          <h3 class="mb-3">訂單資訊</h3>
          <ul class="pb-5">
            <li v-for="(item, index) in data" :key="index">
              <div class="mb-1">姓名：{{ item.name }}</div>
              <div class="mb-3">城市：{{ item.city }}</div>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-6 row mb-4">
          <table class="text-center">
            <thead>
              <tr class="border-bottom border-dark">
                <th>姓名</th>
                <th @click="sortBy = 'age'">年齡</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(person, index) in sortedPeople" :key="index">
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
              </tr>
            </tbody>
          </table>

          <div class="text-center">
            <button
              type="button"
              v-on:click="ascending = !ascending"
              class="btn btn-primary my-4 px-6 py-1"
            >
              <template v-if="ascending"> 由低到高 </template>
              <template v-else> 由高到低 </template>
            </button>
          </div>
        </div>
      </div>
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
      ],
      people: [
        {
          name: '小明',
          age: 26
        },
        {
          name: '小華',
          age: 36
        },
        {
          name: '小美',
          age: 17
        },
        {
          name: '阿妙',
          age: 18
        }
      ],
      ascending: true,
      sortBy: 'age'
    };
  },
  created() {
    this.$root.color = '#DFE4EB';
    this.$root.theme = 'dark';
  },
  methods: {
    getData() {
      this.$http
        .get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        .then((res) => {
          // console.log(res)
          this.data = res.data;
          // console.log(this.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  computed: {
    sortedPeople() {
      const newPeople = [...this.people].sort((a, b) => {
        return this.ascending ? a[this.sortBy] - b[this.sortBy] : b[this.sortBy] - a[this.sortBy];
      });
      return newPeople;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
