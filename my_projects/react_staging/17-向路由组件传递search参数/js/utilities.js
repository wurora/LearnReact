export function parseObj(str) {
  let res = {}
  try {
    const arr = (str[0] === '?' ? str.slice(1) : str).split('&')
    for (let i of arr) {
      const pair = i.split('=')
      res[pair[0]] = pair[1]
    }
  }
  catch (e) {
    console.log(e)
  }
  return res
}

export function parseSearch(obj) {
  let res = '?'
  try {
    for (let i in obj) {
      res += i + '=' + obj[i] + '&'
    }
  }
  catch (e) {
    console.log(e)
  }
  return res.slice(0, res.length - 1)
}