$(document).ready(function() {
            var option = 'intro-tekst';
            var url = window.location.href;
            option = url.match(/option=(.*)/)[1];
            showDiv(option);
        });
        function showDiv(option) {
            $('.boxes').hide();
            $('#' + option).show();
            $('#intro-tekst').hide();
        }
