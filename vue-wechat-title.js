(function () {
  var setWechatTitle = function (title) {
    document.title = title
    var mobile = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(mobile)) {
      var iframe = document.createElement('iframe')
      iframe.style.visibility = 'hidden'
      // 替换成站标favicon路径或者任意存在的较小的图片即可
      iframe.setAttribute('src', '/static/logo.png')
      var iframeCallback = function () {
        setTimeout(function () {
          iframe.removeEventListener('load', iframeCallback)
          document.body.removeChild(iframe)
        }, 0)
      }
      iframe.addEventListener('load', iframeCallback)
      document.body.appendChild(iframe)
    }
  }
  function install (Vue) {
    Vue.directive('wechat-title', {
      bind: setWechatTitle,
      update: setWechatTitle
    })
  }

  if (typeof exports === 'object') {
    module.exports = install
  } else if (typeof define === 'function' && define.amd) {
    define([], function(){ return install })
  } else if (window.Vue) {
    Vue.use(install)
  }

})()
