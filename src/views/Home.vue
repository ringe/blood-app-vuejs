<template>
  <div class="home">
    <img alt="Blood Pressure" src="../assets/blood-pressure.png" />
    <Measure />
  </div>
</template>

<script>
// @ is an alias to /src
import Measure from "@/components/Measure.vue";

export default {
  name: "Home",
  components: {
    Measure
  }
};
</script>
