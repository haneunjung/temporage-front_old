<template>
    <div id="wrapper">
        <form method="post" action="">
            KEY :
            <input id="key" type="text" name="key">

            <textarea
                    placeholder="Enter something"
                    id="value"
                    name="value"
                    rows="4"
                    maxlength="100"
                    style="overflow: hidden; word-wrap: break-word; resize: none; height: 160px; ">
            </textarea>
            <button id="button" type="submit">Send</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Sender"
    }
</script>

<style scoped>
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
</style>