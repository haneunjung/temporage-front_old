<template>
    <div>
        <form @submit.prevent="loginCall">
            <div>
                <label for="id">ID: </label>
                <input id="id" type="text" v-model="id"/>
            </div>
            <div>
                <label for="pw">PW: </label>
                <input id="pw" type="password"/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "TemporageLogin",
        data: function () {
            return {
                id: '',
                pw: ''
            }
        },
        methods: {
            loginCall: function () {
                var url = process.env.VUE_APP_HEJ_URL;
                var data = {id: this.id, pw: this.pw};

                axios.post(url, data)
                    .then(function () {
                    })
                    .catch(function () {
                    });
            }
        }
    }
</script>

<style scoped>

</style>