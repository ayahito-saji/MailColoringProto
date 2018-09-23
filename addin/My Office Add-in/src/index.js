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
        //            item.body.getAsync("text", {
        //                    asyncContext: "This is passed to the callback"
        //                },
        //                function callback(asyncResult) {

        var mailText = "へろ"; //asyncResult.value;
        var request = new XMLHttpRequest();
        request.onload = function (e) {
            div.append("hey");
            div.append(this.responseText.body);
        }
        /* ... */

        var url = "https://cd6a63f1.ngrok.io/?text=helloABCD";
        request.open("GET", url, true);
        request.responseType = "document";

        //                    request.addEventListener("load", (event) => {
        //                        //                        if (event.target.status !== 200) {
        //                        //                            console.log(`${event.target.status}: ${event.target.statusText}`);
        //                        //                            return;
        //                        //                        }
        //                        alert(event.responseXML);
        //                        div.append(event.responseXML);
        //                    });
        try {
            request.send(null);
            //div.append("debug");
            //                });
        } catch (e) {
            div.append(e.message);
        }

    }

    function makeTableRow(name, value) {
        return $("<tr><td><strong>" + name +
            "</strong></td><td class=\"prop-val\"><code>" +
            value + "</code></td></tr>");
    }

})();
