 <script>
import documents from "@/assets/js/documents";

export default {
  data() {
    return {
      about: documents.about,
      resume: documents.resume,
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
      if(this.elementOffsetTop >= 0 && this.windowWidth > 960) {
        this.pos = (this.elementOffsetTop * this.speed / 100);
        this.$refs.layout_1.style.transform = "translate3d(" + this.pos * -0.5 + "px, 0, 0)";
        this.$refs.layout_2.style.transform = "translate3d(" + this.pos * 0.5 + "px, 0, 0)";
      }
    }
  }
};
</script>


<template>
  <section id="About" ref="element">
    <div class="info" ref="layout_1">
      <div class="photo">
        <img :src="about.myPhoto" alt="">
      </div>
      <div class="chinese-name">{{ about.chineseName }}</div>
      <div class="english-name">{{ about.englishName }}</div>
      <div class="profession">{{ about.profession }}</div>
    </div>
    <ul class="menu" ref="layout_2">
      <li class="list" v-for="resume in resume" :key="resume.title">
        <h2 class="title">{{ resume.title }}</h2>
        <p class="description" v-for="(list, index) in resume.lists" :key="index">
          {{ list }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
#About {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info {
  flex: 0 0 20%;
  text-align: center;

  .photo {
    margin-bottom: 20px;

    img {
      width: 17vw;
      border-radius: 50%;
      box-shadow: -7px 7px 0px rgba(#929292, .5);
    }
  }

  .chinese-name {
    font-size: 22px;
    line-height: 32px;
    font-weight: 700;
  }

  .profession {
    color: #929292;
  }
}

.menu {
  flex: 0 0 60%;
}

.list {
  margin: 50px 0;

  .title {
    color: #8594cf;
    font-size: 2.5vw;
    line-height: 3.5vw;
    font-weight: 700;
    margin-bottom: 6px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: -30px;
      bottom: 1vw;
      width: 20px;
      height: 8px;
      background: #8594cf;
    }
  }

  .description {
    color: #929292;
    line-height: 32px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      margin: auto;
      left: -16px;
      top: 0;
      bottom: 0;
      width: 6px;
      height: 6px;
      background: #929292;
    }
  }
}

@media (max-width: 960px) {
  #About {
    flex-direction: column;
  }

  .list {
    .title {
      font-size: 24px;
      line-height: 32px;
      &::before {
        bottom: 9px;
        height: 6px;
        left: -18px;
        width: 12px;
      }
    }
  }

  .info {
    .photo {
      img {
        width: 250px;
      }
    }
  }
}

@media (max-width: 425px) {
  .info {
    .photo {
      img {
        width: 180px;
      }
    }
  }
}
</style>