<script>
export default {
  components: {
  },
  data() {
    return {
      speed: 15,
      pos: 0,
      elementOffsetTop: 0,
      windowWidth: window.innerWidth
    };
  },
  created() {
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.addEventListener("resize", this.resize);
  },
  methods: {
    resize: function () {
      this.windowWidth = window.innerWidth;
    },
    parallax: function ($scrollHeight) {
      this.elementOffsetTop = $scrollHeight - this.$refs.element.offsetTop;
      if(this.elementOffsetTop >= 0) {
        this.pos = (this.elementOffsetTop * this.speed / 100);
        this.$refs.layout_1.style.transform = "translate3d(0, " + this.pos * -5 + "px, 0)";
        this.$refs.layout_2.style.transform = "translate3d(" + this.pos * 10 + "px, 0, 0)";
        this.$refs.layout_3.style.transform = "translate3d(0, " + this.pos * -1 + "px, 0)";
        this.$refs.layout_4.style.transform = "translate3d(" + this.pos * 2 + "px, " + this.pos * -2 + "px, 0)";
        this.$refs.layout_5.style.transform = "translate3d(0, " + this.pos * 2 + "px, 0)";
      }
    }
  }
};
</script>

<template>
  <section id="Header" ref="element">
    <img :src="require('@/assets/images/cloud.png')" class="cloud cloud1" alt="" ref="layout_1">
    <img :src="require('@/assets/images/people.png')" class="people" alt="" ref="layout_2">
    <img :src="require('@/assets/images/cloud.png')" class="cloud cloud2" alt="" ref="layout_3">
    <img :src="require('@/assets/images/cloud.png')" class="cloud cloud3" alt="" ref="layout_4">
    <div class="header-text" ref="layout_5">
      <h2 class="title">Hi!</h2>
      <h3 class="title">My name is Chloe.</h3>
      <p>These are my GitHub Public Repositories.</p>
    </div>
    <div class="wave-wrapper">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#Header {
  width: 100vw;
  height: 50vw;
  background: #8594cf;
  overflow: hidden;
}

.cloud1 {
  position: absolute;
  width: 25vw;
  right: 8vw;
  top: 5vw;
}

.cloud2 {
  position: absolute;
  width: 15vw;
  right: 45vw;
  top: 15vw;
}

.cloud3 {
  position: absolute;
  width: 12vw;
  right: 32vw;
  top: 25vw;
}

.people {
  width: 14.5vw;
  position: absolute;
  right: 15vw;
  bottom: -3vw;
}

.wave-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
}

.header-text {
  width: 50vw;
  position: absolute;
  left: 15vw;
  top: 0;
  bottom: 0;
  margin-bottom: 3vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.title {
  color: #FFFFFF;
  font-size: 3vw;
  line-height: 4vw;
  font-weight: 700;
  text-align: left;
}

p {
  color: rgba(#FFFFFF, .6);
  font-size: 1.2vw;
  line-height: 3vw;
  text-align: left;
}

/* Animation */
.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
   transform: translate3d(-90px, 0, 0);
  }
  100% { 
    transform: translate3d(85px, 0, 0);
  }
}

@media (max-width: 960px) {
  #Header {
    width: 100vw;
    height: 600px;
  }

  .people {
    width: auto;
    height: 400px;
    position: absolute;
    right: 15vw;
    bottom: -30px;
  }

  .cloud1 {
    width: auto;
    height: 150px;
    right: 8vw;
    top: 40px;
  }

  .cloud2 {
    width: auto;
    height: 100px;
    right: 50vw;
    top: 140px;
  }

  .cloud3 {
    width: auto;
    height: 60px;
    right: 36vw;
    top: 220px;
  }

  .title {
    font-size: 28px;
    line-height: 36px;
  }

  p {
    font-size: 12px;
    line-height: 24px;
  }

  .header-text {
    margin-bottom: 0;
    margin-top: 50px;
    left: 10vw;
  }
}

@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}

@media (max-width: 425px) {
  #Header {
    width: 100vw;
    height: 600px;
  }

  .people {
    width: auto;
    height: 400px;
    right: 10vw;
    bottom: -30px;
  }

  .cloud1 {
    width: auto;
    height: 100px;
    right: 8vw;
    top: 30px;
  }

  .cloud2 {
    width: auto;
    height: 70px;
    right: auto;
    left: 10vw;
    top: 120px;
  }

  .cloud3 {
    width: auto;
    height: 40px;
    right: 36vw;
    top: 200px;
  }

  .title {
    font-size: 28px;
    line-height: 36px;
  }

  p {
    font-size: 12px;
    line-height: 24px;
  }

  .header-text {
    margin-bottom: 0;
    margin-top: 50px;
    left: 10vw;
  }
}
</style>