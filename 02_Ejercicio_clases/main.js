//La clase siempre tiene que ir definida antes que invocada


class AppController {

    $onInit() {
        this.numero = 10;
        this.resultado = +this.numero
    }

    botonSuma() {
        this.resultado += +this.numero

    }
    botonResta() {
        this.resultado -= +this.numero

    }
}

//Fin de la clase AppController

angular.module("miAplicacion", [])
    .controller("AppController", AppController)