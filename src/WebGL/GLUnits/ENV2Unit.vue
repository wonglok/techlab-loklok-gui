<template>
  <div class="">

    <div class="flex flex-col lg:flex-row">

      <div class="lg:w-1/2 relative py-24 flex justify-center items-center  bg-gray-200 p-5">
        <a target="_blank" href="https://v2.effectnode.com/" class="">
          <div class="flex justify-center items-center">
            <img src="../image/en-v2.png" alt="" class=" rounded-lg shadow-lg">
          </div>
          <p class="p-3 text-center block">
            Click the above icon to try it out.
          </p>
        </a>

      </div>
      <div class="lg:w-1/2 relative">
        <!-- <ScissorArea class="absolute top-0 left-0 right-0 bottom-0" style="z-index: -1;">
          <div slot="dom" class="full">
          </div>
          <HowScene slot="o3d"></HowScene>
        </ScissorArea> -->

        <div class="px-3 max-w-xl mx-auto  py-24 lg:py-32 xl:py-64">
          <div class="px-3 mb-2 text-3xl md:text-4xl font-bold">
            Effect Node Version 2
          </div>
          <div class="px-3 mt-1 text-gray-600">
            Cables and Boxes Effect Remixer
          </div>
          <div class="px-3 text-sm mb-3 text-gray-600">
            By Wong Lok
          </div>
          <div></div>
        </div>
      </div>

    </div>

    <!-- -->

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

</style>
