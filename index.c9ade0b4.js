!function(){var e=document.querySelector(".button"),t=document.querySelector(".message-win"),r=document.querySelector(".message-lose"),n=document.querySelector(".message-start"),o=document.querySelector(".game-score"),a=document.querySelectorAll(".field-cell"),c=0,s=Array.from({length:4},function(){return[,,,,].fill(0)});function i(){var e;c=0,o.textContent=c,t.classList.add("hidden"),r.classList.add("hidden"),n.classList.remove("hidden"),e=[],s.forEach(function(t,r){t.forEach(function(t,n){e.push({row:r,col:n})})}),e.forEach(function(e){var t=e.row,r=e.col;s[t][r]=0})}function f(){var e=[];if(s.forEach(function(t,r){t.forEach(function(t,n){0===t&&e.push({row:r,col:n})})}),e.length>0){var t=e[Math.floor(Math.random()*e.length)],r=t.row,n=t.col;s[r][n]=.9>Math.random()?2:4,u()}}function u(){s.forEach(function(e,t){e.forEach(function(e,r){var n=a[4*t+r];n.textContent=e>0?e:"",n.className="field-cell field-cell--".concat(e)})})}function l(e){var n=!1;function a(){s=s[0].map(function(e,t){return s.map(function(e){return e[t]})}).reverse()}function i(e){for(var t=e.filter(function(e){return 0!==e}),r=[],n=0;n<t.length;n++)if(n<t.length-1&&t[n]===t[n+1]){var o=2*t[n];r.push(o),c+=o,n++}else r.push(t[n]);for(;r.length<e.length;)r.push(0);return r}switch(e){case"up":a();for(var l=0;l<4;l++){var h=i(s[l]);n||d(h,s[l])||(n=!0),s[l]=h}a(),a(),a();break;case"down":a(),a(),a();for(var v=0;v<4;v++){var m=i(s[v]);n||d(m,s[v])||(n=!0),s[v]=m}a();break;case"left":for(var g=0;g<4;g++){var w=i(s[g]);n||d(w,s[g])||(n=!0),s[g]=w}break;case"right":a(),a();for(var L=0;L<4;L++){var p=i(s[L]);n||d(p,s[L])||(n=!0),s[L]=p}a(),a()}n&&(u(),o.textContent=c,f(),s.flat().includes(2048)&&t.classList.remove("hidden"),!function(){for(var e=0;e<4;e++)for(var t=0;t<4;t++)if(0===s[e][t]||t<3&&s[e][t]===s[e][t+1]||e<3&&s[e][t]===s[e+1][t])return!0;return!1}()&&r.classList.remove("hidden"))}function d(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}document.addEventListener("keydown",function(e){if(e.preventDefault(),n.classList.contains("hidden"))switch(e.key){case"ArrowUp":l("up");break;case"ArrowDown":l("down");break;case"ArrowLeft":l("left");break;case"ArrowRight":l("right")}}),e.addEventListener("click",function(){i(),e.classList.remove("start"),e.classList.add("restart"),e.textContent="Restart",n.classList.add("hidden"),f(),f()}),i()}();
//# sourceMappingURL=index.c9ade0b4.js.map