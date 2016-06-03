// адрес нашего списка ресурсов (где идет вывод getResources)
var uri = '/katalog-rabot/';

$(document).ready(function() {
// загружаем начальный блок
loadCatalog(0, 1);

// клик на кнопку "Еще"
$('#more').on('click', function() {
var showPage = $(this).data('show');
var preloadPage = parseInt(showPage) + 1;
loadCatalog(showPage, preloadPage);
});
});

function loadCatalog(showPage, preloadPage) {
// скрываем кнопку "Еще"
$('#more').hide();

// показываем блок с ранее загруженным контентом и прокручиваем к нему
if (showPage != 0) {
$('#page' + showPage).show('slow');
$('html,body').animate({ scrollTop: $('#page' + showPage).offset().top - 100 }, 1000);
}

// создаем блок под новую загрузку
$('#catalog').append('<div id="page' + preloadPage + '"></div>');

uri = uri + '?page=' + preloadPage;
// загружаем ajax-ом контент следующей страницы, но не показываем его
$.ajax({
url: uri,
cache: false,
success: function(html) {
if (html != '') {
$('#more').data('show', preloadPage);
$('#more').show();
$('#page' + preloadPage).hide();
$('#page' + preloadPage).html(html);
if (preloadPage == 1) loadCatalog(1, 2);
}
}
});
}
