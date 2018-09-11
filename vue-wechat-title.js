(function () {
  function install (Vue) {
    var setWechatTitle = function (title, img) {
      if (title === undefined || window.document.title === title) {
        return
      }
      document.title = title
      var mobile = navigator.userAgent.toLowerCase()
      if (/iphone|ipad|ipod/.test(mobile)) {
        var iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        // 替换成站标favicon路径或者任意存在的较小的图片即可
        iframe.setAttribute('src', img || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
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
    Vue.directive('wechat-title', function (el, binding) {
      setWechatTitle(binding.value, el.getAttribute('img-set') || null)
    })
  }

  if (typeof exports === 'object') {
    module.exports = install
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return install
    })
  } else if (window.Vue) {
    Vue.use(install)
  }
})()
