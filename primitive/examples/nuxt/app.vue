<template>
  <div>
    <Button :defaultIsWhite="defaultIsWhite">Hello world</Button>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue"
import { Button } from "@primitive/components/vue"

export default {
  components: { Button },
  data() {
    return {
      variation: "primary",
      defaultIsWhite: true,
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
