import {
  txbRequest
} from '../utils/request.js'

/**
 * @return {Promise<Response>}
 */
export const getCmds = (data) => {
  return txbRequest({
    data,
    url: '/wx/goods/getGoodsList'
  })
}