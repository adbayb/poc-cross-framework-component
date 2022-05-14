<template>
  <div>
    Hello world
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue"
// import { Button } from "@web-component/vue"

export default {
  // components: { Button },
  data() {
    return {
      variation: "primary"
    }
  }, 
  mounted() {
    setInterval(() => {
      this.variation = this.variation === "primary" ? "secondary" : "primary"
    }, 1000)
  },
  methods: {
    onPress: () => {
      console.log("click")
    }
  }
}
</script>
