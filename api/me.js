import {
  txbRequest
} from '../utils/request.js'

/**
 * @return {Promise<Response>}
 */
export const getSchools = (data) => {
  return txbRequest({
    data: {
      ...data
    },
    url: '/wx/user/chooseSchool'
  })
}