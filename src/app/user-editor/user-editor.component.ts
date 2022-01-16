import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserEditorService} from "../services/user-editor.service";
import {userInfoClass} from "../users-table/user-info.class";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  recievedId!: string;
  editForm!: FormGroup;
  user!: userInfoClass;
  editUser!: userInfoClass;
  errMessage: string | undefined;

  constructor(private editService: UserEditorService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private location:Location) {
  }

  ngOnInit(): void {
    this.recievedId = this.route.snapshot.params['id'];
    this.editService.getUser(this.recievedId).subscribe
    ({
      next: (data: userInfoClass) => {
        this.user = data;
        this.createForm();
      },
      error: error => this.errMessage = error
    });

  }

  createForm() {
    this.editForm = this.fb.group({
      email: new FormControl(this.user.email.toString(), [Validators.required, Validators.email]),
      first_name: new FormControl(this.user.first_name.toString(), Validators.required),
      last_name: new FormControl(this.user.last_name.toString(), Validators.required)
    })
  }

  onSubmit(): void {

    this.editUser = this.editForm.value;
    const tempObj = {
      id: this.user.id,
      email: this.editUser.email,
      first_name: this.editUser.first_name,
      last_name: this.editUser.last_name,
      avatar: this.user.avatar
    }
    this.editService.updateForm(this.user.id, tempObj).subscribe((user: userInfoClass) => {
      this.user = user
    });
  }

  goBack(): void {
    this.location.back();
  }

}
