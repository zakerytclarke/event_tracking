(function() {
    var events = [];
    var mouse = {
        x: 0,
        y: 0
    }
    //Interaction Tracking
    document.onclick = function(e) {
        return track(e.srcElement)
    };
    //Mouse Position Tracking
    document.onmousemove=function(e){
      mouse.x=e.offsetX;
      mouse.y=e.offsetY;
    }
    //Record the interactions in the webpage
    function track(element) {
        events.push({
          session_id:getSessionId(),
          element_hash:window.btoa(JSON.stringify({
            id:element.id,
            url:window.location.hostname,
            tag: element.tagName,
            body: element.innerText
          })),
          url:window.location.hostname,
          metadata:{
            element_index:getElementIndex(element),
            url_path:window.location.pathname,
            url_params:window.location.href,
            page_html:getHTML(),
            id: element.id,
            tag: element.tagName,
            body: element.innerText,
            mouse:mouse,
            scroll:{
              x:window.scrollX, 
              y:window.scrollY
            },
            viewport:{
              width:window.innerWidth,
              height:window.innerHeight
            }  
          },
          utc:Date.now()

        });
        console.log(JSON.stringify(events, null, 2))

    }

    function getElementIndex(element){
      var elements=document.querySelectorAll("*");
      for(var i=0;i<elements.length;i++){
        if(element == elements[i]){
          return i;
        }
      }
      return -1;
    }

    function getHTML() {
        return document.body.innerHTML;
    }

    function getSessionId() {
      var sid=getCookie("session_id");
      if(sid){
        return sid;
      }
      var array = new Uint32Array(4);
      window.crypto.getRandomValues(array);
      sid=array.join("-");
      setCookie("session_id",sid,1);
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
})();