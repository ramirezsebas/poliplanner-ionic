import Career from "./Career";
import Subject from "./Subject";

class Docente {
  public formateado: String []
  constructor(
    private tit: string,
    private apellido: string,
    private nombre: string,
    public correo: string
  ) {
    this.formateado = this.toShow()
  }

  toShow(): string[] {
    let prof = [];
    let tit = this.tit?.split("\n");
    for (let i = 0; i < tit?.length; i++) {
      prof.push(
        `${this.tit.split("\n")[i]} ${this.nombre.split("\n")[i]} ${
          this.apellido.split("\n")[i]
        }`
      );
    }
    return prof;
  }

  toString(): string {
    const profs = this.toShow();
    let text = "";
    for (const p of profs) {
      text += p + "\n";
    }
    return text;
  }
}

class Fecha {
  constructor(public dia: string, public hora: string) {}
}

class Mesa {
  constructor(
    public presidente: string,
    public miembro1: string,
    public miembro2: string
  ) {}
}

class Dias {
  constructor(
    public lunes: string,
    public martes: string,
    public miercoles: string,
    public jueves: string,
    public viernes: string,
    public sabado: string,
    public sabNoche: string
  ) {}
}

export default class Schedule {
  constructor(
    public item: number,
    public asignatura: Subject,
    public career: Career,
    public turno: string,
    public seccion: string,
    public plataforma: string,
    public docente: Docente,
    public primerParcial: Fecha,
    public segundoParcial: Fecha,
    public primerFinal: Fecha,
    // public revPrimerFinal: Fecha,
    public segundoFinal: Fecha,
    // public revSegundoFinal: Fecha,
    public mesa: Mesa,
    public dias: Dias
  ) {}

  static parse(dato: any) {
    const schedule: Schedule = new Schedule(
      dato[0],
      new Subject(
        undefined,
        undefined,
        dato[1],
        dato[2],
        dato[3],
        dato[4],
        undefined,
        undefined
      ),
      new Career(undefined, dato[5], dato[6], dato[7], undefined, false),
      dato[8],
      dato[9],
      dato[10],
      new Docente(dato[11], dato[12], dato[13], dato[14]),
      new Fecha(dato[15], dato[16]),
      new Fecha(dato[17], dato[18]),
      new Fecha(dato[19], dato[20]),
      // new Fecha(dato[21], dato[22]),
      new Fecha(dato[21], dato[22]),
      // new Fecha(dato[25], dato[26]),
      new Mesa(dato[23], dato[24], dato[25]),
      new Dias(
        dato[26],
        dato[27],
        dato[28],
        dato[29],
        dato[30],
        dato[31],
        dato[32]
      )
    );

    return schedule;
  }

}
