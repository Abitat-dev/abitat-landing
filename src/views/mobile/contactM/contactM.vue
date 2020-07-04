<template>
    <div class="contactM">
        <section id="content">
            <div id="deck">
                <div id="title">
                    <span>
                        {{title}}
                    </span>
                </div>
                <div id="form">
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
                    <button class="actions" @click="actions('whats')">
                        <img src="../../../assets/whats_btn.png" alt="">
                        {{buttons.whats}}
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script src="./contactM.js"></script>

<style lang="scss" scoped>
@import './contactM.scss';
</style>