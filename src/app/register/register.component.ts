import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerform: FormGroup;

	register_validation_messages= {
		'name':[
			{ type: 'required', message: 'name is required'}
			
		],
		'email':[
			{ type: 'required', message: 'Email is required'},
			{ type: 'pattern', message: 'Enter the valid Email Address'}
		],
		'password':[
			{ type: 'required', message: 'password is required'},
			{ type: 'pattern', message: 'atleast 1 upperlower, 1 lowercase and 1 number'},
			{ type: 'minlength', message: 'atleast 8 character long'}

		]
	}

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  	this.signupForm();
  }

 	signupForm(){
 		this.registerform = this.fb.group({
 			name: new FormControl('', Validators.compose([
 				Validators.required
 			])),
 			email: new FormControl('', Validators.compose([
        		Validators.required,
        		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      		])),
      		password: new FormControl('', Validators.compose([
      			Validators.required,
      			Validators.minLength(8),
      			Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      		]))

 		})
 	}

 	onSubmitDetails() {
 		console.log(this.registerform.value);
 	}

}
