<template>
  <div>
    <h2>질문 상세 페이지</h2>
    <div class="itme_cont">
      <UserProfile>
        <div slot="username">
          <router-link v-if="fetchedItem.user" :to="`/user/${fetchedItem.user}`" class="link_user">
            {{ fetchedItem.user }}
          </router-link>
        </div>
        <div slot="time">{{ fetchedItem.time_ago }}</div> 
      </UserProfile>
      <h2 class="item_title">
        {{ fetchedItem.title }}
      </h2>
      <p v-html="`${fetchedItem.content}`"></p>
    </div>
    
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style>

</style>