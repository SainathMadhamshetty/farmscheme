import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from '../login-user.service';
import { Register } from '../register';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdb:Register=new Register();
  user:User = new User();

  constructor(private loginUserservice: LoginUserService,private router: Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user)
    
    this.loginUserservice.getUserById(this.user,this.userdb.email).subscribe(data=>{
      this.userdb=data;
      if (this.user.password === this.userdb.password){
        if (this.userdb.role=== "farmer"){
          this.router.navigate(['/farmer-page']);
        }else if(this.userdb.role=== "bidder"){
          this.router.navigate(['/bidder-page']);
        }

      }else{
        alert("wrong password")
      }
      
      //this.router.navigate(['/farmer-page']);
    },error=>{alert("Id not found")});  
  }
}
