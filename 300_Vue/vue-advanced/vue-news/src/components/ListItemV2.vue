<template>
  <div>
    <ul class="item_list">
      <li v-for="(item, index) in listItems" :key="item.id" class="post">
        <span class="item_points">{{ item.points || index + 1 }}</span>
        <div>
          <p class="item_title">
            <!-- 페이지에 따라 분기 처리 해줘야함 
              뉴스,직업은 a : 도메인이 있을경우
              질문 router-link : 유저들의 질문정도만 담겨있기에 도메인이 없음
            -->
            <a v-if="item.domain" :href="item.url" target="_blank">{{ item.title }}</a>
            <router-link v-else :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="itme_info">
            {{ item.time_ago }} by

            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link_user">
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url" class="link_user">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li> 
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      return this.$store.state[name];
    }
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    // this.$store.dispatch('FETCH_JOBS');

    // todo. 뉴스 질문 직업 분기 처리
    // 패스값을 가지고 온다 
    // 라우터 path의 정보값을 가져오던가 라우트 설정하는 파일에 가서 네임값을 넣어서 그것을 이용
    const name = this.$route.name;
    let fetchName = '';
    if(name === 'news') {
      fetchName = 'FETCH_NEWS';
    }else if(name === 'jobs') {
      fetchName = 'FETCH_JOBS';
    }else if(name === 'ask') {
      fetchName = 'FETCH_ASK';
    }
    this.$store.dispatch(fetchName);
  },
}
</script>

<style lang="sass" scoped>
.item_list
  margin: 0
  padding: 0
.post
  list-style: none
  display: flex
  align-items: center
  border-bottom: 1px solid #eee
.item_points
  width: 80px
  height: 80px
  display: flex
  align-items: center
  justify-content: center
  color: #42b883
.item_title
  margin: 0
.itme_info
  color: #35495e
.link_user
  color: #35495e
</style>