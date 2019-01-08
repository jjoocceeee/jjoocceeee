
function isArray(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
}

function processForm(e, url) {
    $("#submitButton").prop("disabled", true);

    $.ajax({
        url: url,
        dataType: 'text',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: $(e.target).serialize(),
        success: function(data, textStatus, jQxhr) {
            var json = JSON.parse(data);
            $('#response').html(json.message);
        },
        error: function(jqXhr, textStatus, errorThrown) {
            $("#submitButton").prop("disabled", false);
            var json = JSON.parse(jqXhr.responseText);
            $('#response').html(json[0].message);
        }
    });

    e.preventDefault();
}