<template>
  <div>
    <Button :variation="variation" :onPress="onPress">Hello world</Button>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue"
import Button from "./components/Button"

export default {
  components: { Button },
  data() {
    return {
      variation: "secondary"
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
