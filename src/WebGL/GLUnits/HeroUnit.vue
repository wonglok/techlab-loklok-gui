<template>
  <div class="full">
    <ScissorArea class="taller">
      <div slot="dom" class="">
        <!-- <div class="w-full py-32 ">
          <div class="font-bold text-3xl textshadow text-center ">
            PALMS TechLab
          </div>
          <div class="font-bold text-lg text-black textshadow text-center ">
            by Wong Lok
          </div>
        </div> -->
      </div>
      <BannerScene slot="o3d"></BannerScene>
    </ScissorArea>
  </div>
</template>

<script>
// import { Auth } from '../../../APIs/KA'
export default {
  components: {
    ...require('../webgl').default
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.taller{
  height: 80vmin;
}
.textshadow{
  text-shadow: 0px 0px 10px #ffffff, 0px 0px 10px #ffffff, 0px 0px 10px #ffffff;
}
</style>
