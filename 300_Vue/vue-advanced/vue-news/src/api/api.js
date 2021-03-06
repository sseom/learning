// axios
import axios from 'axios';

// 1. HTTP request & response 와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수 들을 정리
function fetchNewsList() {
  // return axios.get('https://api.hnpwa.com/v0/news/1.json');
  return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchList(pageName) { 
  // 뉴스, 잡, 질문 api를 호출할때 공통으로 사용 할수있도록 
  // 페이지 네임만  인자로 따로 받음
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItem,
  fetchList,
}