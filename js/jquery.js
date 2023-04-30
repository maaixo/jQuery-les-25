$(".verzendknop").click(function() {
    var naam = $("#naamgebruiker").val();
    window.alert("Hallo " + naam + "!");
    });

$(".klikhierniet").click(function() {
    $("form").hide();
    $("p").text("Laad de pagina opnieuw");
});
