<template>
    <div class="contactM">
        <section id="content">
            <div id="deck">
                <div id="title">
                    <span>
                        {{title}}
                    </span>
                </div>
                <div id="options" :style="'display:'+displayOptions+';'">
                    <button class="actions" @click="actions('mail')">
                        <img src="../../../assets/mail_btn.png" alt="">
                        {{buttons.mail}}
                    </button>
                    <div id="option">
                        <span class="line">
                        </span>
                        <span>
                            o
                        </span>
                        <span class="line">
                        </span>
                    </div>
                    <button class="actions" @click="actions('phone')">
                        <img src="../../../assets/whats_btn.png" alt="">
                        {{buttons.whats}}
                    </button>
                </div>
                <div id="select" :style="'display:'+displaySelect+';'">
                    <form id="form" @submit.prevent="submit">
                        <div class="inputs">
                            <img src="../../../assets/userF.png" alt="user">
                            <input ref="name" type="text" :placeholder="placeholder" v-model="name">
                        </div>
                        <div class="inputs">
                            <img :src="require(`../../../assets/${type}.png`)" alt="">
                            <input ref="info" type="text" :placeholder="placeholder2" v-model="info">
                        </div>
                        <button type="submit" :style="'background-color:'+colorBtn+';'">
                            <div v-if="spinner">
                                <div class="loader"></div>
                            </div>
                            <div v-else>
                                <span>Enviar</span>
                                <img src="../../../assets/send.png" alt="send">
                            </div>
                        </button>
                    </form>
                    <button id="back" @click="back">
                        <img src="../../../assets/back.png" alt="back">
                    </button>
                </div>
            </div>
        </section>
        <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
        :color="snackColor"
        top
        >
            {{ text }}
            <template v-slot:action="{ attrs }">
                <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Cerrar
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script src="./contactM.js"></script>

<style lang="scss" scoped>
@import './contactM.scss';
</style>