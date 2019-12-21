<template>
  <div class="main-content">
    <topbar />
  </div>
</template>

<script>
import topbar from './topbar';

  export default {
    components: {
      topbar
    },
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>
