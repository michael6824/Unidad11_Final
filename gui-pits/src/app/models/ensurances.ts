export class ensurance {
    constructor(
        public _id:string,
        public plate: String,
        public status: Boolean,
        public type: Boolean, //0: Soat, 1: Seguro Todo Riesgo
        public description: String,
        public value: Number,
        public date: String
    ) {}
}
