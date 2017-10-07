import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string;
  password:string;

  constructor(
    private authService: AngularFireAuth,
    private router:Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.email);
    this.authService.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.flashMessagesService.show('New user registered', {cssClass:'alert-success', timeout:4000});
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessagesService.show(err.message, {cssClass:'alert-danger', timeout:4000});
        this.router.navigate(['/register']);
      });
  }

}
