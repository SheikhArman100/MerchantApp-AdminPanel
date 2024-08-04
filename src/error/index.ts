export class CustomError extends Error {
  code: number;
  name: string;
  constructor(code: number, name: string, message: string) {
    super(message);
    this.code = code;
    this.name = name;
  }
}

//how to declare error
//   const session=null
//   if(!session) throw new CustomError(500,"You have to login first")
