function animar(){
    $('.donuts').find(".animado").each(function(i){
        var thiss = $(this);
        setTimeout(function() {
            thiss.addClass("load");
        }, (400*i));
    });
}

function disparaDoughnut(){

    var dona1 = null;
    var dona2 = null;
    var dona3 = null;
    var dona4 = null;

    setTimeout(function() {
        var dona2 = new Chart(document.getElementById("dona2").getContext("2d")).Doughnut(doughnutData2,options);
    }, 300);

    setTimeout(function() {
        var dona4 = new Chart(document.getElementById("dona4").getContext("2d")).Doughnut(doughnutData4,options);
    }, 900);

}

function disparaDona(){  // La de Historia

    var dona1 = null;
    var dona2 = null;
    var dona3 = null;
    var dona4 = null;

    setTimeout(function() {
        var dona2 = new Chart(document.getElementById("dona2").getContext("2d")).Doughnut(doughnutData2,options);
    }, 300);

}

$(document).ready(function(){

    $("#contactform").validate();

    $('#temp').change(function(){
        var v = $(this).val();
        $('.equipos').hide().attr('disabled','disabled');
        $('#temp'+v).show().removeAttr('disabled');
    }).change();

    $('.equipoclub').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
              breakpoint: 768,
              settings: {
                centerMode: false,
                slidesToShow: 2
              }
            },{
              breakpoint: 992,
              settings: {
                centerMode: false,
                slidesToShow: 3
              }
            }
          ]
    });

    // FIXTURES SLIDER
    $('#semana .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });


    //Fixture panel
    $('#fixturetabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    $(document).on('click', '.yamm .dropdown-menu', function(e) {
      e.stopPropagation()
    })


    $("a.fancybox").fancybox({
        padding:0,
        helpers : {
            title   : {
                type: 'outside'
            },
            thumbs  : {
                width   : 80,
                height  : 50
            },
            overlay : {
                css : {
                    'background' : 'rgba(13, 3, 2, 0.95)'
                }
            }
        }
    });

    $("a.fancybox-download").fancybox({
        padding:0,
        afterLoad: function() {
            this.title = '<a class="download" href="/dlfotos.php?id=' + this.title + '"><i class="fa fa-download"></i> Descargar</a>   ES OBLIGATORIO EL USO DEL CREDITO - PERMITIDO SOLO USO EDITORIAL Y/O PERIODISTICO ';
        },
        helpers : {
            thumbs  : {
                width   : 80,
                height  : 50
            },
            overlay : {
                css : {
                    'background' : 'rgba(13, 3, 2, 0.95)'
                }
            }
        }
    });

    $("a[rel^='lightbox']").fancybox({
        padding:0,
        helpers : {
            title   : {
                type: 'outside'
            },
            overlay : {
                css : {
                    'background' : 'rgba(13, 3, 2, 0.95)'
                }
            }
        }
    });


    $("img.lazy").lazyload({
        effect : "fadeIn"
    });

    $('.donuts canvas').each(function() {
        var width = $(this).parent().width();
        $(this).attr("width",width);
    })

    $('.donuts').waypoint({
        offset: 800,
        triggerOnce: true,
          handler: function(direction) {
            disparaDoughnut();
            animar();
        }
    });

    $('.videocats').on( 'click',  function() {
        var idcat = $(this).data('idcat');
        $('.videocats').removeClass("active");
        $(this).addClass("active");
        var cacheBuster = new Date().getTime();  //Get timestamp
        $('#slidervideos').cycle('destroy');
        $('#slidervideos').load('/ligaargentina/ajax/videos.php?idcat=' + idcat + '&v='+ cacheBuster, function() {
            $('#slidervideos').cycle();
        })
    });

    var cacheBuster = new Date().getTime();  //Get timestamp

    if(window.location.search) {
      var url = '/tna/ajax/videos.php'+ window.location.search +'&v='+ cacheBuster;
    } else {
      var url = '/tna/ajax/videos.php?v='+ cacheBuster;
    }

    $('#slidervideos').load(url, function() {
        $('#slidervideos').cycle();
    })

    $('#sliderhistoria').cycle();

    $('#data_table').dataTable({
        "language": { "url": "//cdn.datatables.net/plug-ins/1.10.7/i18n/Spanish.json" },
        "orderMulti": false,
        "order": [[ 1, "desc" ]]
    });

    $('#fixture_data_table').dataTable({
        "language": { "url": "//cdn.datatables.net/plug-ins/1.10.7/i18n/Spanish.json" },
        "orderMulti": false,
        "order": [[ 0, "asc" ]]
    });


    // La de Historia

    $('.dona canvas').each(function() {
        var width = $(this).parent().width();
        $(this).attr("width",width);
    });

    $('.dona').waypoint({
        offset: 800,
        triggerOnce: true,
        handler: function(direction) {
            disparaDona();
            animar();
        }
    });

});
