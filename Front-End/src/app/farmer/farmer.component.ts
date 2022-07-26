import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  register:Register = new Register();

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.register);
    this.registerService.registerUser(this.register).subscribe(data=>{
      alert("Successfulley User is registerd?")
      this.router.navigate(['/login']);
    },error=>alert("Sorry User not register"));
  }

  

}
