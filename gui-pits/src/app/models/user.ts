export class User {
    constructor(
        public _id:string,
        public firstName:string,
        public lastName: string,
        public email: string, 
        public age: number,
        public role: string
    ) {}
}
