<template>
  <div style="display: flex; gap: 8px;">
    <Button :variation="variation">Hello world</Button>
    <button @click="onPress">Toggle property</button>
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
    }
  }, 
  methods: {
    onPress() {
      this.variation = this.variation === "primary" ? "secondary" : "primary"
    }
  }
}
</script>
