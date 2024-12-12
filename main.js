document.addEventListener("DOMContentLoaded", function() {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Estudiante de ISC')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Si puedes imaginarlo, puedes programarlo...')
        .pauseFor(2500)
        .deleteAll()
        .start();
});
