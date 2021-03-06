import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-users-form-profile',
  templateUrl: './users-form-profile.component.html',
  styleUrls: ['./users-form-profile.component.scss']
})
export class UsersFormProfileComponent implements OnInit {

  private formProfile: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private route: Router,
    private router: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.formProfile = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      userName: [null, Validators.minLength(3)],
      email: [null, [Validators.email, Validators.required]],
      location: [null]
    });
  }

  public onFormSubmit(): void {
    this.usersService.postProfile(this.formProfile.value).pipe(
      tap(() => this._snackBar.open('Usuário criado com sucesso!', 'OK', {
        duration: 2000,
      })),
      tap(() => this.route.navigate(['../'], { relativeTo: this.router }))
    ).subscribe();
  }

}
