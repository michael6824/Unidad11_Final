export class workshop {
    constructor(
        public _id:string,
        public type: string,
        public address: String,
        public description: String,
        public contact: String,
        public phone: Number,
        public city: String,
        public  departament: String,
        public specialty: Number // 0. baterias, 1 frenos, 2 aceite, 3 correas, 4 amortiguadores, 5 alineacion, 6 motor, 7 revision, 8 sincronizacion
    ) {}
}
