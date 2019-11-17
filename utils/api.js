
import {
  dbConfessions,
  dbUserList
} from './cloud-db.js'

const uploadConfession = data => {
  return dbConfessions.add(data)
}

/**
 * 获取表白
 * @param condition {Object} 筛选条件
 * @return {Promise<Result>}
 */
const getConfessions = (condition) => {
  const whereFilter = {};
  if (condition.openid) {
    whereFilter.openid = condition.openid
  }

  if (condition.time) {
    // console.log('...')
  }

  return dbConfessions.where(whereFilter).get()
}

/**
 * 从数据库获取用户信息
 * @param openid {string} 用户的openid
 * @return {Promise<any>}
 */
const getUserInfoFromDb = openid => {
  if (!openid) {
    reject(Promise.reject(new Error('errMsg:invalidOpenId')))
    return
  }
  return dbUserList.where({
    _openid: openid
  }).get()
}

/**
 * 注册
 * @praram data {Object} 注册信息，直接从getUserInfo的返回值中获取
 * @return {Promise<Result>} promise信息
 */
const signUp = async(openid, data) => {
  // let res;
  try {

    const res = await getUserInfoFromDb(openid)
    if (res.data.length) {
      console.error('用户已存在，不需要重新注册')
      return new Error('errMsg:userHadSignUp')
    }
    return await dbUserList.add({
      data: {
        ...data,
        signature: '该用户什么都没有留下',
        selling: [],
        buying: [],
        schoolInfo: {
          school: '',
          campus: '',
          major: '',
          isVerified: false,
          id: '',
          realName: ''
        }
      }
    })

  } catch (e) {
    console.error(e);
  }
}
