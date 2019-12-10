import {
  txbRequest
} from '../utils/request.js'

/**
 * @return {Promise<any>}
 */
export const uploadCommodity = data => txbRequest({
  data,
  url: '/wx/release/onShelves'
})
