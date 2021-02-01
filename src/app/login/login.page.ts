import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.formGroup = this.formBuider.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.formGroup.valid) {
      this.router.navigate(['/tabs']);
    }
    
  }

}
