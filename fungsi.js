var a =  document.getElementById('a')
    a.onclick = function () {
                var sound = document.getElementById("do").innerHTML='<audio autoplay src="audio/do.wav";></audio>';
                }
    var b =  document.getElementById('b')
    b.onclick = function () {
                var sound = document.getElementById("re").innerHTML='<audio autoplay src="audio/re.wav";></audio>';
                }
    var c =  document.getElementById('c')
    c.onclick = function () {
                var sound = document.getElementById("mi").innerHTML='<audio autoplay src="audio/mi.wav";></audio>';
                }
    var d =  document.getElementById('d')
    d.onclick = function () {
                var sound = document.getElementById("fa").innerHTML='<audio autoplay src="audio/fa.wav";></audio>';
                }
    var e =  document.getElementById('e')
    e.onclick = function () {
                var sound = document.getElementById("sol").innerHTML='<audio autoplay src="audio/sol.wav";></audio>';
                }
    var f =  document.getElementById('f')
    f.onclick = function () {
                var sound = document.getElementById("la").innerHTML='<audio autoplay src="audio/la.wav";></audio>';
                }
    var g =  document.getElementById('g')
    g.onclick = function () {
                var sound = document.getElementById("si").innerHTML='<audio autoplay src="audio/si.mp3";></audio>';
                }
    var h =  document.getElementById('h')
    h.onclick = function () {
                var sound = document.getElementById("do2").innerHTML='<audio autoplay src="audio/do2.wav";></audio>';
                } 
    var aa = document.getElementById('aa')
    aa.onclick = function () {
                var sound = document.getElementById("cminor").innerHTML='<audio autoplay src="audio/cminor.mp3";></audio>';
                }
    var bb = document.getElementById('bb')
    bb.onclick = function () {
                var sound = document.getElementById("dminor").innerHTML='<audio autoplay src="audio/dminor.mp3";></audio>';
                }
    var dd = document.getElementById('dd')
    dd.onclick = function () {
                var sound = document.getElementById("fminor").innerHTML='<audio autoplay src="audio/fminor.mp3";></audio>';
                }
    var ee = document.getElementById('ee')
    ee.onclick = function () {
                var sound = document.getElementById("gminor").innerHTML='<audio autoplay src="audio/gminor.mp3";></audio>';
                }
    var ff = document.getElementById('ff')
    ff.onclick = function () {
                var sound = document.getElementById("aminor").innerHTML='<audio autoplay src="audio/aminor.mp3";></audio>';
                }


    document.onkeydown = function(press) {  
      switch (press.keyCode) { 
          case 65: 
              var sound = document.getElementById("do").innerHTML='<audio autoplay src="audio/do.wav";></audio>';
              break;
          case 83: 
              var sound = document.getElementById("re").innerHTML='<audio autoplay src="audio/re.wav";></audio>';
              break;
          case 68: 
              var sound = document.getElementById("mi").innerHTML='<audio autoplay src="audio/mi.wav";></audio>';
              break; 
          case 70: 
              var sound = document.getElementById("fa").innerHTML='<audio autoplay src="audio/fa.wav";></audio>';
              break;  
          case 71: 
              var sound = document.getElementById("sol").innerHTML='<audio autoplay src="audio/sol.wav";></audio>';
              break;
          case 72: 
              var sound = document.getElementById("la").innerHTML='<audio autoplay src="audio/la.wav";></audio>';
              break;
          case 74: 
              var sound = document.getElementById("si").innerHTML='<audio autoplay src="audio/si.mp3";></audio>';
              break;
          case 75: 
              var sound = document.getElementById("do2").innerHTML='<audio autoplay src="audio/do2.wav";></audio>';
              break;                                         
          case 87: 
              var sound = document.getElementById("cminor").innerHTML='<audio autoplay src="audio/cminor.mp3";></audio>';
              break; 
          case 69: 
              var sound = document.getElementById("dminor").innerHTML='<audio autoplay src="audio/dminor.mp3";></audio>';
              break;                            
          case 84: 
              var sound = document.getElementById("fminor").innerHTML='<audio autoplay src="audio/fminor.mp3";></audio>';
              break; 
          case 89: 
              var sound = document.getElementById("gminor").innerHTML='<audio autoplay src="audio/gminor.mp3";></audio>';
              break; 
          case 85: 
              var sound = document.getElementById("aminor").innerHTML='<audio autoplay src="audio/aminor.mp3";></audio>';
              break;                    
         }  
}