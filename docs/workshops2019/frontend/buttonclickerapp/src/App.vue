<template>
  <div id="app">
    <ButtonCounter description='Times Ive stuttered' />
    <ButtonCounter description='Times Ive been wrong' />
    <ButtonCounter description='Buttons Ive created' />
  </div>
</template>

<script>
import ButtonCounter from './components/ButtonCounter.vue'

export default {
  name: 'app',
  components: {
    ButtonCounter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
