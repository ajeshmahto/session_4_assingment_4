interface IUser {
  username:string;


}

export class User<T extends IUser> {

    
    username:string;
    
     setName(person:IUser) {

         this.username=person.username;

        }
         
   
   getName() {
       return this.username;
   }
  
}

class GenericUser<T> {
    username:T;
    setName(username:T) {this.username=username};
    getName():T {
        return this.username;
    }
}



let myUser = new GenericUser();
myUser.setName("ajesh");
console.log(myUser.getName());


let person:IUser= {
    username:"testname"
}


let secondUser = new User();
secondUser.setName(person);
console.log(secondUser.getName());




