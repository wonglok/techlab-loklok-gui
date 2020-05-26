<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Tree } from '../../Reusable'
import { MeshBasicMaterial, Mesh, TextGeometry, Font } from 'three'
// import { Refractor } from 'three/examples/jsm/objects/Refractor'
// import { FastBlurShader } from './FastBlurShader'
export default {
  name: 'LoveloFont',
  mixins: [Tree],
  props: {
    text: {},
    envMap: {}
  },
  components: {
    ...require('../../webgl')
  },
  data () {
    return {
    }
  },
  mounted () {
    // let RES_SIZE = 1024

    this.$on('init', async () => {
      const makeFontGeo = ({ text, width }) => {
        return new Promise(async (resolve) => {
          var font = require('./lovelo.json')
          var geometry = new TextGeometry(text, {
            font: new Font(font),
            size: width,
            height: 1.0,
            curveSegments: 16,
            bevelEnabled: true,
            bevelThickness: 1.14,
            bevelSize: 0.41,
            bevelOffset: 0.001,
            bevelSegments: 3
          })
          resolve(geometry)
        })
      }

      let mat = new MeshBasicMaterial({
        color: 0xffffff,
        opacity: 1.0,
        envMap: this.envMap,
        transparent: true
      })

      let item = new Mesh()
      item.material = mat

      item.geometry = await makeFontGeo({ text: this.text, width: 50 })
      item.geometry.scale(2, 2, 2)
      item.geometry.computeBoundingSphere()
      item.geometry.computeBoundingBox()
      item.position.x = -item.geometry.boundingSphere.radius

      this.o3d.add(item)
    })
    this.$emit('init')
  },
  beforeDestroy () {
  }
}
</script>

<style>
</style>
