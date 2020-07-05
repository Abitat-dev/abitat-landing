<template>
    <div class="contact">
        <div v-if="spinner" id="loader">
            <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div>
        </div>
        <div id="image">
            <img :src="require(`../../assets/${images.notification}`)" alt="notification">
        </div>
        <form id="formulario" @submit.prevent="submit">
            <div id="title">
                <span>{{texto.title}}</span>
                <br>
                <span>{{texto.subtitle}}</span>
            </div>
            <div id="form">
                <div class="inputs">
                    <input ref="name" v-model="name" type="text" placeholder="Jose Rodriguez">
                </div>
                <div class="infoContact">
                    <div v-if="optionsBool" id="select">
                        <ul>
                            <li 
                            v-for="item of options" 
                            :key="item.id" 
                            @click="selectOption(item)" 
                            :value="item.value">
                                {{item.text}}
                            </li>
                        </ul>
                    </div>
                    <div @click="optionsBool=true" id="media">
                        <img :src="require(`../../assets/${media}`)" :alt="media">
                        <span>▼</span>
                    </div>
                    <div class="inputs">
                        <input ref="options" v-model="info" type="text" :placeholder="placeOption">
                    </div>
                </div>
                <div id="buttons">
                    <input @click="clear" id="cancel" type="button" value="Cancelar">
                    <input id="send" type="submit" value="Enviar">
                </div>
            </div>
        </form>
        <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
        :color="snackColor"
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

<script src="./contact.js"></script>

<style lang="scss" scoped>
@import './contact.scss';
</style>