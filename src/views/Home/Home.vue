<template>
  <div class="home">
    <div class="column">
      <div id="title">
      <img src="../../assets/abitat-logo.png" alt="check" style ="width:60px">
        <span>{{title}}</span>
      </div>
      <div id="intro">
        <span>
        {{intro}}
        </span>
      </div>
      <div id="base">
        <button id="button" @click="play()">   
          <i class="fas fa-play"></i>
          <span> Conoce más </span>
        </button>
      </div>
    </div>
    <div id="video" :style="'display:'+none+';'">
      <span @click="stop" class="material-icons">
        close
      </span>
      <iframe width="800" height="500" :src="'https://www.youtube.com/embed/8rEd6_rRMfU?autoplay='+autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
    </div>
  </div>
</template>

<script src="./Home.js"></script>

<style lang="scss">
  @import './home.scss';
</style>