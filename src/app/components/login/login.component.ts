import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { StudentsService } from 'src/app/modules/shared/students/students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    studentService: StudentsService
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.auth
        .login({ username, password } as { username: string; password: string })
        .subscribe(
          (result) => {
            console.log(result.role);
            if (result.role === 'teacher') {
              this.router
                .navigate(['teacher'])
                .then(() => {
                  // Navigation successful
                  console.log('Navigation successful to teacher page');
                })
                .catch((err) => {
                  console.error(err);
                });
            } else if (result.role === 'student') {
              this.router
                .navigate(['student'])
                .then(() => {
                  console.log('Navigation successful to student page');
                })
                .catch((err) => {
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
