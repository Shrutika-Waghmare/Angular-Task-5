import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from "rxjs";

@Injectable()
export class HttpHandlerService{
    apiUrl = "https://angular-task-5-e254a-default-rtdb.firebaseio.com/user-data.json";
    currentAuthResp: any;

    constructor(private http : HttpClient){}

    postUser(userObj : any){
        return this.http.post(this.apiUrl, userObj);
    }
    getUsers(){
        return this.http.get(this.apiUrl,{
                observe : 'body'  // body, response, events
            }
        ).pipe(map((rawData : any)=>{
            let arr = [];
            for(let user in rawData){
                arr.push({...rawData[user], id : user})
            }
            return arr
        }),
        catchError((errD : any)=>{
            return throwError(errD.message)
        })
        )
    }

    registerNewUser(credentials : any){
        let payload = {
            firstName : credentials.firstName,
            lastName : credentials.lastName,
            email : credentials.email,
            contact : credentials.contact,
            department : credentials.department,
            userName : credentials.userName,
            password : credentials.password,
            returnSecureToken : true
        }
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcb9OiWgXAsQZoSpqeekAHh3jNZlCRZVY',payload)

    }

    registerNewHodUser(credentials : any){
        let payload = {
            position : credentials.position,
            firstName : credentials.firstName,
            lastName : credentials.lastName,
            email : credentials.email,
            contact : credentials.contact,
            department : credentials.department,
            userName : credentials.userName,
            password : credentials.password,
            returnSecureToken : true
        }
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcb9OiWgXAsQZoSpqeekAHh3jNZlCRZVY',payload)

    }

    loginUser(credentials : any){
        let payload = {
            email : credentials.userName,
            password : credentials.password,
            returnSecureToken : true
        }
        return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcb9OiWgXAsQZoSpqeekAHh3jNZlCRZVY",payload).pipe(tap((data : any)=>{
            this.currentAuthResp = data;
        }))
    }
}