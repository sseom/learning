// 액션즈는 코드에서는 
// store.js에서 임폴트한 api들의 함수들을 내용을 참고하는것들이 있기때문에 
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem, fetchList  } from '@/api/api.js';

export default {
  // actions에서는 context 인자 제공디 되는데 mutations로 넘기기위한것
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then(response => { // 데이터를 받아와서
        // mutations으로 data넘기기 
        // SET_NEWS에 response.dat 넘기기
        // console.log(response);
        context.commit('SET_NEWS', response.data); 
        return response; // 객체반환
      })
      .catch(error => {
        console.log(error);
      });
  },
  // 디스트럭처링  
  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then( ({ data }) => {
        commit('SET_JABS', data);
      })
      .catch(error =>{
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then( ({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error =>{
        console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then( ({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItem(id)
      .then( ({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      });
  }, 
  // # 시점 2
  FETCH_LIST({ commit }, pagename) { // 하이 오더 컴포넌트 
    // 천번째인자로 커밋을 디스트럭쳐링

    // # 시점 3 : return 을 해줘야함 데이터 순서 보장
    // 리턴 : dispatch로 호출을 해서 체이닝작업을 하려면 넘어오는 데이터가 있어야함 그래야 비동기처리 가능
    // 컨텍스트에서 커밋 꺼내와서 fetchList 호출
    return fetchList(pagename)
      .then( ( response ) => {
        // # 시점 4
        console.log('시점 4');
        commit('SET_LIST', response.data);
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  },
};