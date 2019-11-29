/**
 * 函数防抖构造器
 * @param fn {function} 需要防抖的函数
 * @param wait {number} 防抖时间
 * @return {function} 防抖函数
 */
export function debounce(fn, wait) {
  let timer = null;
  return function() {
    const context = this
    const args = arguments
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

/**
 * 函数节流构造器
 * @param fn {function} 需要节流的函数
 * @param gapTime {number} 间隔时间
 * @return {function} 节流函数
 */
export function throttle(fn, gapTime) {
  let _lastTime = null;

  return function() {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime
    }
  }
}

/**
 * 格式化数字，给小于十的数字前加个0
 * @param n {number} 数字
 * @return {string} 加上了前置0的字符串
 */
export const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 格式化时间
 * @param date {Date} 日期对象
 * @return {string} 格式化结果
 */
export const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 格式化时间戳至用户友好时间
 * @param timestamp {number} 十三位时间戳
 * @return {string}
 */
export const formatTime = timestamp => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const now = new Date()

  // 如果不在今年
  if (now.getFullYear() - year > 0)
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':')

  // 如果大于三天
  if (now.getMonth() + 1 - month > 0 || now.getDate() - day > 3)
    return [month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':')

  // 如果大于1天
  if (now.getDate() - day > 0)
    return `${now.getDate() - day} 天前`

  // 如果大于1小时
  if (now.getHours() - hour > 0)
    return `${now.getHours() - hour}小时前`

  if (now.getMinutes() - minute > 0)
    return `${now.getMinutes() - minute}分钟前`

  return `${now.getSeconds() - second}秒前`
}


/**
 * 图片上传路径处理
 * @param filePath {string} 文件本地缓存路径
 * @return {string} 云端路径
 */
export const formatPath = filePath => {
  return 'upload/' + Date.now() +
    '.' + Math.floor(Math.random() * 9999) + filePath.match(/\.[^.]+?$/)[0]
}
