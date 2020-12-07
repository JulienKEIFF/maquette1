'use strict'

let vueTranslation = {};
vueTranslation.install = function(Vue, translation){
  Vue.filter('translate', function(key, lang){
    if(typeof translation == "undefined"){
      console.info("translation file is undefined. Please define it before use the translation filter.")
      return
    }
    if(typeof translation[key] == "undefined") return key
    if(typeof translation[key][lang] == "undefined") return key
    return translation[key][lang]
  });
};

export default vueTranslation;