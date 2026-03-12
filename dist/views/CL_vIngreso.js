export default class CL_vIngreso {
    inNombre;
    inIngreso;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.inNombre = document.getElementById("inNombre");
        this.vista = document.getElementById("articulo");
        this.inIngreso = document.getElementById("inIngreso");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
        this.mostrar();
    }
    get nombre() {
        return this.inNombre.value;
    }
    get ingreso() {
        return +this.inIngreso.value;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=CL_vIngreso.js.map