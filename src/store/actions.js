// 通过mutation间接更新state的多个方法的对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_TEACHERS
} from './mutation-types'
import {
    reqAddress,
    reqKemuTypes,
    reqTeachers
} from '../api'

export default{
    // 1.异步获取地址
    async getAddress({commit,state}){
        // 2.发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        // 3.提交一个commit
        if(result.code === 0){
            const address = result.data
            commit(RECEIVE_ADDRESS,{address})  //这里的address按照mutation的address写，为固定的
        }
    },
    // 1.异步获取地址
    async getCategory({commit,state}){
        // 2.发送异步ajax请求
        const result = await reqKemuTypes()
        // 3.提交一个commit
        if(result.code === 0){
            const category = result.data
            commit(RECEIVE_CATEGORY,{category})  //这里的address按照mutation的address写，为固定的
      }
    },  
    // 1.异步获取地址
    async getAddress({commit,state}){
        // 2.发送异步ajax请求
        const {longitude,latitude} = state
        const result = await reqTeachers(longitude,latitude)
        // 3.提交一个commit
        if(result.code === 0){
            const teachers = result.data
            commit(RECEIVE_TEACHERS,{teachers})  //这里的address按照mutation的address写，为固定的
        }
    }
    
}