export default class CL_mPersona {
    acIngresos;
    conPersona;
    menor;
    constructor() {
        this.acIngresos = 0;
        this.conPersona = 0;
        this.menor = 0;
    }
    procesarIngreso(ing) {
        this.conPersona++;
        this.acIngresos += ing.ingreso;
        if (this.conPersona === 1) {
            this.menor = ing.ingreso;
        }
        else if (ing.ingreso < this.menor) {
            this.menor = ing.ingreso;
        }
    }
    promedioIngresos() {
        if (this.conPersona > 0) {
            return this.acIngresos / this.conPersona;
        }
        return 0;
    }
    menorIngreso() {
        return this.menor;
    }
    cantidadPersonas() {
        return this.conPersona;
    }
}
//# sourceMappingURL=CL_mPersona.js.map