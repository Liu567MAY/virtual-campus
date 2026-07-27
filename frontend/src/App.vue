<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { createScene } from './three/scene/createScene'

const canvas = ref<HTMLCanvasElement>()
let destroyScene: (() => void) | undefined

onMounted(() => {
  if (canvas.value) {
    destroyScene = createScene(canvas.value)
  }
})

onBeforeUnmount(() => destroyScene?.())
</script>

<template>
  <main class="scene-shell">
    <canvas ref="canvas" aria-label="Three.js test scene"></canvas>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  overflow: hidden;
  background: #9ed7e8;
}

.scene-shell,
canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
