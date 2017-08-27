import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent{
    myForm: FormGroup;
    
        onSubmit(){
            console.log(this.myForm);
            this.myForm.reset();
        }
    
        ngOnInit(){
            this.myForm = new FormGroup({
                email: new FormControl(null, [
                    Validators.required,
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]),
                password: new FormControl(null, Validators.required),
                
            });
        }
    
}