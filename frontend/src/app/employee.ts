export class Employee {

	public firstName : string;
	public lastName : string;
	public age : number;
	public number : number;

	constructor(
		id : number,
		firstName : string,
		lastName : string,
		age : number,
		number : number
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.number = number;
	}
}