 <script>
export default {
  data () {
    return {
      myGitHubData: {}
    }
  },
  mounted: function () {
    this.GitHubAPI.get('/user/repos', {}, [this.myGitHubData, 'repositories'])
  },
  computed: {
    repositoriesCount: function () {
      if (this.myGitHubData.repositories) {
        return this.myGitHubData.repositories.length
      }
      return 'none yet...'
    },
    repositories: function () {
      if (this.myGitHubData.repositories) {
        return this.myGitHubData.repositories
      }
      return 'none yet...'
    }
  }
}
</script>

<template>
  <section id="Repositories">
    <h2 class="main-title">GitHub Public Repositories</h2>
    <p class="number">專案數量：<span>{{ repositoriesCount }}</span></p>
    <ul class="menu">
      <li class="list" v-for="repository in repositories" :key="repository.name">
        <!-- title (標題)、description (專案描述)、url (專案網址)，其餘資訊自行決定 -->
        <h2 class="title">{{ repository.name }}</h2>
        <p class="description">{{ repository.description }}</p>
        <p class="link"><span>網站連結：</span><a :href="repository.html_url" target="_blank">{{ repository.html_url }}</a></p>
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