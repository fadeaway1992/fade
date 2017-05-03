export const bubbleSort = (Array) => {
  let d
  for(let i=0;i<Array.length;i++){
    for(let j=0;j<Array.length;j++){
      if(Array[j].date<Array[i].date){
        d=Array[j]
        Array[j]=Array[i]
        Array[i]=d
      }
    }
  }
  return Array
}

export const turnToDate = (date) => {
  let now = new Date().getTime()
  let postTime = now - date
  if(postTime<300000) return '刚刚'
    else if(postTime<3600000) return parseInt(postTime/60000)+'分钟前'
      else if(postTime<86400000) return parseInt(postTime/3600000)+'小时前'
        else if(postTime<604800000) return parseInt(postTime/86400000)+'天前'
        else if(postTime<31536000000) return parseInt(postTime/604800000)+'周前'
          else return '一年前'
}

/*
    获取字符串长度，英文字符=1，中文字符=1
 */
export const getStrLength = function(str) {
  if (!str) {
    return 0
  }else {
    return  str.length
    }
}

// 判断浏览器
export const myBrowser = function (){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  return "Chrome";
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}
