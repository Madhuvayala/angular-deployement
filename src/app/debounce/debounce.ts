import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, from,map,of, switchMap } from 'rxjs';
import { UserService } from '../user-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-debounce',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './debounce.html',
  styleUrl: './debounce.css',
})
export class Debounce {
  constructor(private userService: UserService,
    private http: HttpClient
  ) {
this.noListForTo$.subscribe(res=>{
console.log(res);
})
this.noListForTo$.pipe(
  map(arr=>arr.filter(value=> value % 2 === 0))
).subscribe(res=>{
  console.log(res);
   })

    this.noList$.subscribe((res: number) => {
      console.log(res);
    })
    this.noList$.pipe(
      filter(value=> value % 2 === 0)
    ).subscribe((res: number) => {
      console.log(res);
    })
    this.source$.subscribe((value: number) => {
      console.log(value);
    })

    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value) => this.userService.searchUsers(value || ''))
    ).subscribe({
      next: (res) => {
        this.users.set(res);

      },
      error: (err) => {
        console.log('Error fetching users:', err);
      }
    });
  }

  ngOnInit(): void {
    this.userss();
    this.getUsers();
  }

userArray:any[] = [];
  getUsers(){
    this.userService.searchUsers('').subscribe(res=>{
      console.log(res);
      this.userArray = res;
      const names = res.map((user: any) => user.name);

      console.log(names);

    })
  }
  
  searchControl = new FormControl('');
  users = signal<any[]>([]);
  noList$ = from([11, 12, 13, 14, 15, 17, 18, 19, 20]);
  noListForTo$ = of([11, 12, 13, 14, 15, 17, 18, 19, 20]);
  source$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


  
  userss() {
    this.userService.searchUsers('').subscribe({
      next: (res) => {
        this.users.set(res);
      },
      error: (err) => {
        console.log('Error fetching users:', err);
      }
    })
  }

}
