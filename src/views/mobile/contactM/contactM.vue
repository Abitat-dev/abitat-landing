<template>
    <div class="contactM">
        <section id="content">
            <div id="deck">
                <div id="title" :style="'display:'+displayTitle+';'">
                    <span>
                        {{title}}
                    </span>
                </div>
                <div id="options" :style="'display:'+displayOptions+';'">
                    <button class="actions" @click="actions('mail')">
                        <i class="far fa-envelope"></i>
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
                        <i class="fab fa-whatsapp"></i>
                        {{buttons.whats}}
                    </button>
                </div>
                <div id="select" :style="'display:'+displaySelect+';'">
                    <form id="form" @submit.prevent="submit">
                        <div class="inputs">
                           <i class="far fa-user-circle"></i>
                            <input ref="name" type="text" :placeholder="placeholder" v-model="name">
                        </div>
                        <div class="inputs">
                            <i :class="icon"></i>
                            <input ref="info" type="text" :placeholder="placeholder2" v-model="info">
                        </div>
                        <button type="submit" :style="'background-color:'+colorBtn+';'">
                            <div v-if="spinner">
                                <div class="loader"></div>
                            </div>
                            <div v-else>
                                <span>Enviar</span>
                               <i class="fas fa-paper-plane" style="margin:8px; "></i>
                            </div>
                        </button>
                    </form>
                    <button class="back" @click="back('forms')">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                </div>
                <div id="response" :style="'display:'+displaySend+';'">
                    <img src="../../../assets/response.png" alt="res">
                    <span>¡Pronto nos comunicaremos contigo!</span>
                    <button class="back" @click="back('response')">
                        <i class="fas fa-arrow-left"></i>
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