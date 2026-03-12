import CL_mPersona from "../models/CL_mPersona.js";
import CL_vPersona from "../view/CL_vPersona.js";
import CL_cIngresos from "./CL_cIngresos.js";
export default class CL_cPersona {
    vPersona = new CL_vPersona();
    mPersona = new CL_mPersona();
    constructor() {
        this.vPersona.btNuevoIngreso.onclick = () => this.procesarIngreso();
    }
    procesarIngreso() {
        new CL_cIngresos({ callback: (ingreso) => {
                if (ingreso !== null) {
                    this.mPersona.procesarIngreso(ingreso);
                    this.vPersona.reportarPromedio({ promedio: this.mPersona.promedioIngresos() });
                    this.vPersona.reportarMenor({ menor: this.mPersona.menorIngreso() });
                    this.vPersona.reportarCantidad({ cantidad: this.mPersona.cantidadPersonas() });
                }
            } });
    }
    mostrarMenor() {
        this.vPersona.reportarMenor({ menor: this.mPersona.menorIngreso() });
    }
}
//# sourceMappingURL=CL_cPersona.js.map