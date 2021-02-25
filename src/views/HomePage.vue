<script>
import Header from "@/components/Header.vue";
import Repositories from "@/components/Repositories.vue";
import About from "@/components/About.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    Repositories,
    About
  },
  data() {
    return {
      scrollTop: 0
    }
  },
  created() {
    window.addEventListener("scroll", this.page_scroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.page_scroll, true);
  },
  methods: {
    page_scroll: function () {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      this.$refs.parallax1.parallax(this.scrollTop);
      this.$refs.parallax2.parallax(this.scrollTop);
    }
  }
};
</script>

<template>
  <section id="HomePage">
    <Header ref="parallax1"/>
    <div class="content">
      <Repositories />
      <About ref="parallax2"/>
    </div>
    <footer>
      <p>©Chloe Guo, 2021. All rights reserved.</p>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.content {
  margin: auto;
  left: 0;
  right: 0;
  width: 960px;
  min-height: 120vh;
  text-align: left;
}

footer {
  p {
    padding: 5px 15px;
    font-size: 10px;
    color: rgba(#929292, .8);
    text-align: right;
  }
}

@media (max-width: 1280px) {
  .content {
    width: 768px;
  }
}

@media (max-width: 960px) {
  .content {
    width: 80vw;
  }
}

@media (max-width: 425px) {
  .content {
    width: 90vw;
    padding-left: 5vw;
  }
}
</style>