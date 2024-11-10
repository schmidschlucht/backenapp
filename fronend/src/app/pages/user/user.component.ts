import {Component, inject, OnInit} from '@angular/core';
import {User, UserService} from '../../services/user.service';

@Component({
  selector: 'ots-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  private userService: UserService = inject(UserService);
  users: User[] = [];
  ngOnInit(): void {
      this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.allUser().subscribe((users:User[]) => this.users = users);
  }

}
