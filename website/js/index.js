 // ----切换背景图----
 var btn = document.querySelector('.btn');
 var bgimg = document.querySelector('#bgimg');
 var flag = 0;
 btn.onclick = function() {
     if (flag == 0) {
         bgimgs.className = 'open';
         bgimg.className = 'open';
         btn.innerText = '关闭';
         flag = 1;
     } else {
         bgimgs.className = 'close';
         bgimg.className = 'close';
         btn.innerText = '换肤';
         flag = 0;

     }
 }
 var bgimgs = document.querySelector('#bgimg').querySelectorAll('img');
 for (var i = 0; i <= bgimgs.length; i++) {
     bgimgs[i].onclick = function() {
         document.body.style.backgroundImage = 'url(' + this.src + ')';
     }

 }