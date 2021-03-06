
// 设置 rem 函数 
function setRem () { 
  if(document.documentElement.clientWidth < 600){
    baseSize = 16
    pageSize = 600
  }else{
    baseSize = 16
    pageSize = 1440
  }
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。 
  const scale = document.documentElement.clientWidth / pageSize 
  // 设置页面根节点字体大小 
  document.documentElement.style.fontSize = (baseSize *  Math.min(scale,1)) + 'px' 
} 
// 初始化 
var baseSize
var pageSize
setRem() 
// 改变窗口大小时重新设置 rem 
window.onresize = function () { 
  setRem() 
}

