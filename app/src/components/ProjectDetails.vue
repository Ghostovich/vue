<template>
   <div class="borders center">
      <div class="borders__block"></div>
      <div class="borders__block"></div>
      <div class="borders__block"></div>
  </div>
  <main>
    <div class="projectDetails body">
      <div class="projectDetails__head">
      </div>
      <div class="projectDetails__content center">
        <div class="projectDetails__heading">
          {{projectDetails.heading}}
        </div>
        <div class="projectDetails__discription">
          {{ projectDetails.text }}
        </div>
        <div class="projectDetails__sliders">
          <sliderComponent />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import sliderComponent from './sliderComponent.vue'

  import {mapState} from 'vuex';
  export default {
    components:{sliderComponent},
    computed:{
      ...mapState(['projectDetails'])
    },
  }
</script>
<style lang="scss" scoped>

</style>