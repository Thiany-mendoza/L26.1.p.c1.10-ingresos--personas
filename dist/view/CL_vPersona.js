export default class CL_vPersona {
    lblPromedio;
    lblMenor;
    lblCantidad;
    btNuevoIngreso;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoIngreso = document.getElementById("body_btNuevoIngreso");
        this.lblPromedio = document.getElementById("body_lblPromedio");
        this.lblCantidad = document.getElementById("body_lblCantidad");
        this.lblMenor = document.getElementById("body_lblMenor");
    }
    reportarPromedio({ promedio }) {
        this.lblPromedio.textContent = `Promedio de ingresos: ${promedio.toFixed(2)}`;
    }
    reportarMenor({ menor }) {
        this.lblMenor.textContent = `Menor ingreso: ${menor.toFixed(2)}`;
    }
    reportarCantidad({ cantidad }) {
        this.lblCantidad.textContent = `Cantidad de personas: ${cantidad}`;
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
//# sourceMappingURL=CL_vPersona.js.map