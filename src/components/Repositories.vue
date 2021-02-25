 <script>
export default {
  data () {
    return {
      myGitHubData: {},
      info: []
    }
  },
  methods: {
    getReposInfo() {
      const axios = require("axios");
      let githubURL = "https://api.github.com/users/chloe-guo/repos";
      axios
        .get(githubURL)
        .then(response => (this.info = response.data))
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getReposInfo();
  }
}
</script>

<template>
  <section id="Repositories">
    <h2 class="main-title">GitHub Public Repositories</h2>
    <p class="number">專案數量：<span>{{ info.length }}</span></p>
    <ul class="menu">
      <li class="list" v-for="item in info" :key="item.name">
        <h2 class="title">{{ item.name }}</h2>
        <p class="description">{{ item.description }}</p>
        <p class="link"><span>GitHub 連結：</span><a :href="item.html_url" target="_blank">{{ item.html_url }}</a></p>
        <p class="link"><span>網站展示連結：</span><a :href="item.homepage" target="_blank">{{ item.homepage }}</a></p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
#Repositories {
  width: 100%;
  padding-top: calc(10vh + 25vh);
  padding-bottom: 10vh;
}

.main-title {
  color: #8594cf;
  font-size: 2.5vw;
  line-height: 3.5vw;
  font-weight: 700;

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

.list {
  margin: 25px 0;

  .title {
    font-size: 22px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 10px;

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
      background: #707070;
    }
  }

  .description, .link > * {
    color: #929292;
  }

  .link {
    a {
      display: inline;
      text-decoration: underline;

      &:hover,
      &:active,
      &:focus {
          color: #8594cf;
      }
    }
  }
}

@media (max-width: 960px) {
  .main-title {
    font-size: 24px;
    line-height: 32px;
    &::before {
      bottom: 9px;
      height: 6px;
      left: -18px;
      width: 12px;
    }
  }

  #Repositories {
    width: 100%;
    padding-top: 175px;
    padding-bottom: 125px;
  }
}
</style>