class AppController {

    $onInit() {
        this.palabra = "";
        this.respuesta = "";
    }

    botonComprobar() {
        this.repuesta = this.algo
    }

    botonBorrar() {
        this.botonBorrar = ""
    }
}

angular.module("miAplicacion", [])
    .controller("AppController", AppController)