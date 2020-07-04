<template>
    <div class="homeM">
        <div id="intro">
            <h1>
                {{title}}
            </h1>
            <p>
                {{intros.intro1}}<br>
                {{intros.intro2}}<br>
                {{intros.intro3}}<br>
            </p>
        </div>
        <div id="description">
            <div class="content">
                <img src="../../../assets/check_circle.png" alt="check">
                <p>
                    Encuentra Clientes<br>
                    cerca de ti<br>
                </p>
            </div>
        </div>
        <div id="play">
            <div class="btn_play" @click="play()">
                <img src="../../../assets/play-button.png" alt="play">
            </div>
        </div>
    </div>
</template>

<script src="./homeM.js"></script>

<style lang="scss" scoped>
    @import './homeM.scss';
</style>