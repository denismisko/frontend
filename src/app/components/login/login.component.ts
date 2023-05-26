import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/modules/shared/students/students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  constructor(
    private auth: AuthService,
    private router: Router,
    studentService: StudentsService
  ) {}

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.auth
        .login({ username, password } as { username: string; password: string })
        .subscribe(
          (result) => {
            if (result.role === 'teacher') {
              this.router.navigate(['teacher']).catch((err) => {
                console.error(err);
              });
            } else if (result.role === 'student') {
              this.router.navigate(['student']).catch((err) => {
                console.error(err);
              });
            }
          },
          (err) => {
            console.error(err);
          }
        );
    }
  }
}
