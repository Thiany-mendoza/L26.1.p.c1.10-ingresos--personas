export default class CL_vPersona {
    lblPromedio;
    lblMenor;
    btNuevoIngreso;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoIngreso = document.getElementById("body_btNuevoIngreso");
        this.lblPromedio = document.getElementById("body_lblPromedio");
        this.lblMenor = document.getElementById("body_lblMenor");
    }
    reportarPromedio({ promedio }) {
        this.lblPromedio.textContent = `Promedio de ingresos: ${promedio.toFixed(2)}`;
    }
    reportarMenor({ menor }) {
        this.lblMenor.textContent = `Menor ingreso: ${menor.toFixed(2)}`;
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