<template>
  <div class="home">
    <div class="column">
      <div id="title">
        <span>{{title}}</span>
      </div>
      <div id="intro" class="d-none d-lg-block d-xl-none">
        <span>
          {{intro[0]}}<br>
          {{intro[1]}}<br>
          {{intro[2]}}<br>
        </span>
      </div>
      <div id="base">
        <div id="button">
          <img src="../../assets/play.png" alt="play">
        </div>
      </div>
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