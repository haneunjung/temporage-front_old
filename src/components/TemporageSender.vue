<template>
    <div>
        <router-link to="/login" style="text-align: right">Login</router-link>
        <br />
        <router-link to="/repo" style="text-align: right">goto repo</router-link>

        <div id="header">
            <h2>HanEunJung</h2>
            <p>
                아직 뭘 보낼지는 고민해야겠지만, 어쨌든 뭐라도 보내 봅시다..!
            </p>
        </div>

        <div id="wrapper">
            <form @submit.prevent="SendMeno">
                KEY :
                <input id="key" type="text" name="key" v-model="key">
                <textarea
                        placeholder="Enter something"
                        v-model="value"
                        id="value"
                        name="value"
                        rows="4"
                        maxlength="100"
                        style="overflow: hidden; word-wrap: break-word; resize: none; height: 160px; ">
            </textarea>
                <button id="button" type="submit">Send</button>
            </form>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        data: function () {
            return {
                key: '',
                value: ''
            }
        },
        methods: {
            SendMeno: function () {
                var url = process.env.VUE_APP_HEJ_URL;
                var data = {key: this.key, value: this.value};

                axios.post(url, data)
                    .then(function() {
                    })
                    .catch(function () {
                    });
            }
        }
    }
</script>

<style scoped>
    a {
        font-size: 30px;
    }

    * {
        font-family: 'Nanum Pen Script', cursive;
        border: none;
    }

    #key {
        border-bottom: 2px solid #222222;
        color: #000000;
        font-size: 20px;
    }

    #value {
        background: #a3cca3;
        width: 90%;
        padding: 40px;
        color: #000;
        font-size: 24px;
        resize: none;
        line-height: 40px;
        margin: 10px;
        border-radius: 20px;
        box-shadow: 3px 3px 10px #6e6e6e;
    }

    #button {
        float: right;
        height: 40px;
        padding: 0 24px;
        font-size: 25px;
        color: #FFF;
        border-radius: 5px;
        box-shadow: 3px 3px 10px #6e6e6e;
        background: linear-gradient(to right, #6478FB, #8763FB);
    }

    #button:active {
        zoom: 1;
        filter: alpha(opacity=80);
        opacity: 0.8;
    }

    #button:focus {
        zoom: 1;
        filter: alpha(opacity=80);
        opacity: 0.8;
    }

    #wrapper {
        width: 700px;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }

    h1, h2 {
        font-family: 'Black Han Sans', sans-serif;
    }

    #header {
        text-align: center;
        color: #2c3e50;
    }
</style>