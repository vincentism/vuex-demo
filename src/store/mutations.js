import { INCREMENT } from './types'

// 必须是同步函数
const mutations = {
    [INCREMENT] (state) {
        state.count++
    }
};

export default mutations;