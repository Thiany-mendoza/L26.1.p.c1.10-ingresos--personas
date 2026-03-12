import CL_mIngreso from "../models/CL_mIngreso.js";
import CL_vIngreso from "../view/CL_vIngreso.js";
export default class CL_cIngresos {
    vista = new CL_vIngreso();
    callback;
    constructor({ callback }) {
        this.callback = callback;
        this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
        this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new CL_mIngreso({ nombre: this.vista.nombre,
            ingreso: this.vista.ingreso }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=CL_cIngresos.js.map