// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function getBookDetails(isbn) {

    // Query the book database by ISBN code.
    isbn = isbn || "9781451648546"; // Steve Jobs book

    var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;

    var response = UrlFetchApp.fetch(url);
    var results = JSON.parse(response);

    if (results.totalItems) {

        // There'll be only 1 book per ISBN
        var book = results.items[0];
        var title = (book["volumeInfo"]["title"]);
        var subtitle = (book["volumeInfo"]["subtitle"]);
        var authors =   (book["volumeInfo"]["authors"]);
        var printType = (book["volumeInfo"]["printType"]);
        var pageCount = (book["volumeInfo"]["pageCount"]);
        var publisher = (book["volumeInfo"]["publisher"]);
        var publishedDate = (book["volumeInfo"]["publishedDate"]);
        var webReaderLink = (book["accessInfo"]["webReaderLink"]);
        alert(title);

        // For debugging
        Logger.log(book);

    }
}

var books_form = {
    load: function() {
        $('#isbn').on('change', function() {
            // alert('field changed'); // works
            var value = $(this).val();
             $.getScript('isbn_lookup?isbn=' + value);

        });
    }
}