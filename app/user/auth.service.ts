import { Injectable } from '@angular/core'
import {IUser } from './user.model'
@Injectable()
export class AuthService{
    currentUser:IUser
    loginUser(username:string, password:string){
        this.currentUser = {
            id:1,
            userName: username,
            firstName: 'Alpha',
            lastName: 'Beta' 
        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lasltName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lasltName
    }
}
