<template>
  <div class="input container">
    <div class="row justify-content-center">
      <form class="col-lg-4 col-8 row justify-content-center mb-4">
        <label class="me-2">{{ label }}</label>
        <input
          v-if="inputType === 'text'"
          v-model="inputValue"
          type="text"
          name="name"
          v-bind="$attrs"
          @input="handleInput"
        />
        <div v-if="inputType === 'radio'">
          <label class="me-2"
            ><input
              v-model="inputValue"
              type="radio"
              name="sugar"
              value="no-sugar"
              :checked="value === 'no-sugar'"
              v-bind="$attrs"
              @input="handleInput"
              class="me-1"
            />無糖</label
          >
          <label class="me-2"
            ><input
              v-model="inputValue"
              type="radio"
              name="sugar"
              value="half-sugar"
              :checked="value === 'half-sugar'"
              v-bind="$attrs"
              @input="handleInput"
              class="me-1"
            />半糖</label
          >
          <label class="me-2"
            ><input
              v-model="inputValue"
              type="radio"
              name="sugar"
              value="less-sugar"
              :checked="value === 'less-sugar'"
              v-bind="$attrs"
              @input="handleInput"
              class="me-1"
            />微糖</label
          >
        </div>
        <select
          v-if="inputType === 'select'"
          name="qty"
          v-model="inputValue"
          v-bind="$attrs"
          @input="handleInput"
        >
          <option v-for="i in 10" :key="i + '123'" :value="i">
            {{ i }}
          </option>
        </select>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //將父元件進來的value，賦值給子元件的inputValue
      inputValue: this.value
    }
  },
  props: {
    label: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    value: {
      required: true
    }
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue
    }
  },
  methods: {
    handleInput(event) {
      this.inputValue = event.target.value
      this.$emit('input', event.target.value)
    }
  }
}
</script>
