var req = new XMLHttpRequest();
req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) { // 通信の完了時
        //alert("通信できたお");
//        alert(req.response);
        document.getElementsByClassName("wide-content-host")[0].innerHTML = req.response;

    }else{
//      alert("通信中。");
    }
};




var old_text = "";
setInterval(function(){
    var text = document.getElementsByClassName("wide-content-host")[0].innerText;
    if (text && text != old_text){

        req.open('POST', 'https://64878619.ngrok.io/api', true);
        req.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=UTF-8');
        //req.responseType = "document";
        req.send("text=" + encodeURIComponent(text));
        //req.abort();

        old_text = text;
    }
}, 1000);


// var text = document.getElementsByClassName("PlainText")[0].innerHTML;
// alert(text);

// chrome.runtime.sendMessage({
//     value: document.getElementsByClassName('PlainText')[0].outerText
// });