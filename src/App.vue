<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    // import MainVue from './components/Main.vue'
    export default {
        methods: {
            goBack() {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        }
    }
</script>


<style>
    /*
    font-family: 'Black Han Sans', sans-serif;
    font-family: 'Nanum Pen Script', cursive;
    */

    #app {
        font-family: 'Nanum Pen Script', cursive;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60%;
        margin: auto;
    }
</style>
