<template>
  <div class="full">
    <ScissorArea class="taller">
      <div slot="dom" class="relative full">
        <div class="absolute top-0 left-0 p-6 text-white text-xl">
          <a href="http://palms.polyu.edu.hk/">
            <img src="../image/logo.png" class="h-8 lg:h-12 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-500" alt="Home">
          </a>
        </div>
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
