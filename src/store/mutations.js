// 直接更新state的多个方法的对象

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_TEACHERS
} from './mutation-types'

export default{
    [RECEIVE_ADDRESS] (state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORY] (state,{category}){
        state.address = category
    },
    [RECEIVE_TEACHERS] (state,{teachers}){
        state.address = teachers
    }
}