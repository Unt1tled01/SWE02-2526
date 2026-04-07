$("#getRatingBtn").click(function () {
    var movieTitle = $("#movieInput").val();

    $.ajax({
        url: "https://imdb236.p.rapidapi.com/api/imdb/autocomplete",
        method: "GET",
        data: { query: movieTitle },
        headers: {
            "x-rapidapi-key": "key",
            "x-rapidapi-host": "imdb236.p.rapidapi.com"
        }
    }).done(function (response) {
        var movieId = response[0].id;

        $.ajax({
            url: "https://imdb236.p.rapidapi.com/api/imdb/" + movieId,
            method: "GET",
            headers: {
                "x-rapidapi-key": "key",
                "x-rapidapi-host": "imdb236.p.rapidapi.com"
            }
        }).done(function (detail) {
            $("#ratingOutput").text("Rating: " + detail.averageRating);
        });
    });
});