export default class CL_vPersona {
    lblPromedio: HTMLLabelElement;
    lblMenor: HTMLLabelElement;
    lblCantidad: HTMLLabelElement;
    btNuevoIngreso: HTMLButtonElement;
    vista: HTMLElement | null;
    constructor(){
        this.vista = document.getElementById("body") as HTMLElement;
        this.btNuevoIngreso = document.getElementById("body_btNuevoIngreso") as HTMLButtonElement;
        this.lblPromedio = document.getElementById("body_lblPromedio") as HTMLLabelElement;
        this.lblCantidad = document.getElementById("body_lblCantidad") as HTMLLabelElement;
        this.lblMenor = document.getElementById("body_lblMenor") as HTMLLabelElement;
    }
    reportarPromedio({promedio}: { promedio: number }): void {
        this.lblPromedio.textContent = `Promedio de ingresos: ${promedio.toFixed(2)}`;
}
    reportarMenor({menor}: { menor: number }): void {
        this.lblMenor.textContent = `Menor ingreso: ${menor.toFixed(2)}`;
    }
    reportarCantidad({ cantidad }: { cantidad: number }): void {
        this.lblCantidad.textContent = `Cantidad de personas: ${cantidad}`;
    }
    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;
  }
    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;
  }
}