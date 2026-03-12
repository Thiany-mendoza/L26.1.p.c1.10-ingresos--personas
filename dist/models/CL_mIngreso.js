export default class CL_mIngreso {
    _nombre;
    _ingreso;
    constructor({ nombre = "", ingreso = 0 } = {}) {
        this._nombre = nombre;
        this._ingreso = ingreso;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set ingreso(ingreso) {
        this._ingreso = +ingreso;
    }
    get ingreso() {
        return this._ingreso;
    }
}
//# sourceMappingURL=CL_mIngreso.js.map