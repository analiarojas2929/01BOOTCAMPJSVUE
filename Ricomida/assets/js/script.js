$(function() {

    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var boton = this.hash;

            $("html, body").animate({
                scrollTop: $(boton).offset().top
            }, 800, function() {
                window.location.hash = boton;
            });
        }
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(document).ready(function() {
        $('#enviarCorreo').click(function() {
            alert('El correo fue enviado correctamente...');
        });
    });

    $(document).ready(function() {
        // Seleccionar todos los elementos h3 que contienen el texto "INGREDIENTES"
        $('h3:contains("INGREDIENTES")').on("dblclick", function() {
            $(this).css("color", "red");
        });

        // Seleccionar todos los elementos h3 que contienen el texto "PREPARACIÓN"
        $('h3:contains("PREPARACIÓN")').on("dblclick", function() {
            $(this).css("color", "red");
        });
    });



    $('.card-title').on("click", function() {
        // Seleccionar el elemento padre con la clase "card" y toggle el contenido
        $(this).parents('.card').find('.card-body').toggle();
    });
});