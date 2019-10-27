
<template>
    <div  class="container">
        <p>This Button tracks: {{description}}</p>
        <button v-on:click="count++">This button's been clicked {{ count }} times.</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonCounter',
    props: ['description'],
    data: function() {
        return {
            count: 0
        }
    }
}
</script>

<style scoped>
button {
    border-radius: 10%;
    color: red;
}

.container {
    border-color: black;
    border-width: 5px;
    border-style: solid;
}
</style>