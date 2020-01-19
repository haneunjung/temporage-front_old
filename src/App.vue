<template>
    <div id="app">
        <MainVue></MainVue>
        <SenderVue></SenderVue>
    </div>
</template>

<script>
    import MainVue from './components/Main.vue'
    import SenderVue from './components/Sender.vue'

    export default {
        components: {
            'MainVue': MainVue,
            'SenderVue' : SenderVue
        }
    }
</script>
<!--
font-family: 'Black Han Sans', sans-serif;
font-family: 'Nanum Pen Script', cursive;
-->

<style>
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
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
        /*top: 50%;*/
        /*height: 100px;*/
        /*margin-top: -50px;*/
    }
</style>
