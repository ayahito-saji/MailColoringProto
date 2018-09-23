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
        var tbody = $('.prop-table');

        // Add a row to the table for each message property

        tbody.append(makeTableRow("Id", item.itemId));
        tbody.append(makeTableRow("Subject", item.subject));
        tbody.append(makeTableRow("Message Id", item.internetMessageId));
        tbody.append(makeTableRow("From", item.from.displayName + " &lt;" +
            item.from.emailAddress + "&gt;"));

        item.body.getAsync("text", {
                asyncContext: "This is passed to the callback"
            },
            function callback(asyncResult) {
                tbody.append(makeTableRow("Body", asyncResult.value));
            });

    }

    function makeTableRow(name, value) {
        return $("<tr><td><strong>" + name +
            "</strong></td><td class=\"prop-val\"><code>" +
            value + "</code></td></tr>");
    }

})();
