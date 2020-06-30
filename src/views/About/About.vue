<template>
  <div class="about">
    <div id="deck">
      <div class="card" v-for="item of cards" :key="item.id">
        <div :style="line(item.image)" class="circle"></div>
        <div class="image">
          <img :src="require(`../../assets/${item.image}`)" :alt="item.text">
        </div>
        <div class="text">
          <p>
            {{item.text1}}
            <br>
            {{item.text2}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./about.js"></script>

<style lang="scss" scoped>
@import './about.scss';
</style>
