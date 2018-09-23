(function () {

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            //loadItemProps(Office.context.mailbox.item);
            loadItemProps(Office.context.mailbox.item);
        });
    };


    function loadItemProps(item) {
        // Get the table body element
        var div = $("#mailTextId");
        //var div = document.getElementById("mailTextId");

        // Add a row to the table for each message property

        /*tbody.append(makeTableRow("Id", item.itemId));
        tbody.append(makeTableRow("Subject", item.subject));
        tbody.append(makeTableRow("Message Id", item.internetMessageId));
        tbody.append(makeTableRow("From", item.from.displayName + " &lt;" +
            item.from.emailAddress + "&gt;"));*/

        //        try {
        item.body.getAsync("text", {
                asyncContext: "This is passed to the callback"
            },
            function callback(asyncResult) {
                var mailText = asyncResult.value;
                //div.append(mailText);
                //var mailText = "ぜひ直接ご説明させていただきたいと思いますので、\
                //名古屋大学付属図書館に、5月21日（火）の10時からお打ち合わせできますでしょうか。\
                //"; //asyncResult.value;
                var request = new XMLHttpRequest();
                /*request.onload = function (e) {
                    div.append("hey");
                    div.append(this.responseText.body);
                }*/
                /* ... */
                //var url = "https://tsuinoshirushi-server.herokuapp.com/users/create?name=heroku";
                var url = "https://64878619.ngrok.io/?text=" + encodeURIComponent(mailText);
                //var url = "https://google.co.jp/";
                request.open("GET", url, true);
                request.responseType = "document";
                //request.responseType = "json";

                request.onreadystatechange = () => {

                    if (request.readyState == 4 && request.status == 200) {
                        div.append(request.response.body.getElementsByTagName("DIV")[0].innerHTML);
                    }
                }

                //                    request.addEventListener("load", (event) => {
                //                        //                        if (event.target.status !== 200) {
                //                        //                            console.log(`${event.target.status}: ${event.target.statusText}`);
                //                        //                            return;
                //                        //                        }
                //                        alert(event.responseXML);
                //                        div.append(event.responseXML);
                //                    });
                request.send(null);
                //div.append("debug");
                //                });
            });

    }

    function makeTableRow(name, value) {
        return $("<tr><td><strong>" + name +
            "</strong></td><td class=\"prop-val\"><code>" +
            value + "</code></td></tr>");
    }

})();
