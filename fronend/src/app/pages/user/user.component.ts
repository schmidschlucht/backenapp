import {Component, inject, OnInit} from '@angular/core';
import {User, UserService} from '../../services/user.service';
import {CreateUserComponent} from './create-user/create-user.component';

@Component({
  selector: 'ots-user',
  standalone: true,
  imports: [
    CreateUserComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  private userService: UserService = inject(UserService);
  users: User[] = [];
  errormessage: string = '';
  ngOnInit(): void {
      this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.allUser().subscribe(
      {
        next: (users: User[]) => this.users = users,
        error: (error:any) => {
          this.errormessage = error.message;
        }
      },
    )
  }

}
