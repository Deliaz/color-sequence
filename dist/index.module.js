function t(t,r){var e,n;if(0===r.length)return t;for(e=0,n=r.length;e<n;e++)t=(t<<5)-t+r.charCodeAt(e),t|=0;return t<0?-2*t:t}export default function(r,e,n){void 0===e&&(e=0);var u=n.hueStep||5,f=n.lightness||52,i=n.saturation||63,o=n.reverse?-1:1,c=parseInt(function(t,r){for(;t.length<8;)t="0"+t;return t}(function r(e,n,u,f){var i=t(t(t(e,u),Object.prototype.toString.call(n)),typeof n);if(null===n)return t(i,"null");if(void 0===n)return t(i,"undefined");if("object"==typeof n||"function"==typeof n){if(-1!==f.indexOf(n))return t(i,"[Circular]"+u);f.push(n);var o=function(t,e,n){return Object.keys(e).sort().reduce(function(t,u){return r(t,e[u],u,n)},t)}(i,n,f);if(!("valueOf"in n)||"function"!=typeof n.valueOf)return o;try{return t(o,String(n.valueOf()))}catch(r){return t(o,"[valueOf exception]"+(r.stack||r.message))}}return t(i,n.toString())}(0,r,"",[]).toString(16)),16);return function(t,r,e){return"hsl("+t+","+r+"%,"+e+"%)"}((parseInt(c%359)+e*u*o)%360,i,f)}
//# sourceMappingURL=index.module.js.map