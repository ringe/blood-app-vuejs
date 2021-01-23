<template>
  <div class="submit-form">
    <h4 class="measure">
      <h1>What are your current measures?</h1>
    </h4>
    <label for="SystolicPressure">Systolic Measure</label>
    <input v-model.number="SystolicPressure" type="number" /> <br />
    <label for="DiolicPressure">Diolic Measure</label>
    <input v-model.number="DiolicPressure" type="number" /> <br />
    <button @click="saveMeasure" class="btn btn-success">Submit</button>
  </div>
</template>

<script>
import BloodData from "../services/BloodData";

export default {
  name: "Measure",
  data: function() {
    return {
      SystolicPressure: this.SystolicPressure,
      DiolicPressure: this.DiolicPressure
    };
  },
  methods: {
    saveMeasure() {
      var data = {
        SystolicPressure: this.SystolicPressure,
        DiolicPressure: this.DiolicPressure
      };

      BloodData.create(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
