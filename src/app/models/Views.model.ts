export default interface MatForView {
    padre: string;
    sigla: string;
    enf: string;
    hijos: {
      id: number;
      materia: string;
      especial: string;
      def: string;
      seccion: string;
      profesor: string[];
      isItemChecked: boolean;
    }[];
  }