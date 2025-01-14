import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage.js'
import { getUserChannelsAPI } from '@/api/userAPI.js'

Vue.use(Vuex)
const TOKEN_KEY = 'TOUTIAO_USER'
export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_KEY),
    channels: []
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      setItem(TOKEN_KEY, state.user)
    },
    updateUserChannels(state, payload) {
      state.channels = payload
    }
  },
  actions: {
    async getUserChannels(context) {
      try {
        const { data: res } = await getUserChannelsAPI()
        context.commit('updateUserChannels', res.data.channels)
      } catch (err) {
        this.$toast('获取频道数据失败')
      }
    }
  },
  getters: {},
  modules: {}
})
