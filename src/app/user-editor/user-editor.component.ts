import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserEditorService} from "../services/user-editor.service";
import {userEntity} from "../users-table/userEntity";
import {FormBuilder,FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  recievedId!: string;
  editForm!: FormGroup;
  visibility ='shown';
  user!: userEntity;
  editUser!: userEntity;
  errMessage!: string;
  @ViewChild('fform') editFormDirective: any;

  constructor( private editService: UserEditorService,
               private route: ActivatedRoute,
               private fb: FormBuilder,
               private router:Router) {}

  ngOnInit(): void {
    this.recievedId = this.route.snapshot.params['id'];
    this.editService.getUser(this.recievedId).subscribe({next:(data:userEntity)=>{this.user = data; this.jsonCheck() },error: error => this.errMessage = error});
    //
  }

  validationMessages = {
    'email':{
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    }
  };

  createForm() {

    this.editForm = this.fb.group({
      email: new FormControl(this.user.email.toString(), [Validators.required, Validators.email]),
      first_name:new FormControl(this.user.first_name.toString(), Validators.required),
      last_name: new FormControl(this.user.last_name.toString(), Validators.required)
    })
  }

  jsonCheck(){
    this.createForm();
  }

  onSubmit() {
    console.log('update');
    this.editUser = this.editForm.value;
    var tempObj ={
      id: this.user.id,
      email: this.editUser.email,
      first_name: this.editUser.first_name,
      last_name: this.editUser.last_name,
      avatar: this.user.avatar
    }
    console.log(tempObj);
    this.editService.updateForm(this.user.id, tempObj).subscribe( ()=>this.router.navigate(['/table']));


  }

}