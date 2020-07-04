<template>
  <div class="home">
    <div class="column">
      <div id="title">
        <span>{{title}}</span>
      </div>
      <div id="intro" class="d-md-none d-lg-block">
        <span>
          {{intro[0]}}<br>
          {{intro[1]}}<br>
          {{intro[2]}}<br>
        </span>
      </div>
      <div id="base">
        <div id="button" @click="play()">
          <img src="../../assets/play.png" alt="play">
        </div>
      </div>
    </div>
    <div id="video" :style="'display:'+none+';'">
      <span @click="stop" class="material-icons">
        close
      </span>
      <iframe width="800" height="500" :src="'https://www.youtube.com/embed/o-RYtJdinQs?autoplay='+autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
    </div>
    <div class="column">
      <div id="circle"></div>
      <div id="contra">
        <img :src="require(`../../assets/${images.contra}`)" :alt="images.contra">
      </div>
      <div id="chef">
        <img :src="require(`../../assets/${images.chef}`)" :alt="images.chef">
        <img :src="require(`../../assets/${images.designer}`)" :alt="images.designer">
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>

<style lang="scss">
  @import './home.scss';
</style>