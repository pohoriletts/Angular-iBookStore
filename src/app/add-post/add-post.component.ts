import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TASK_MOCK_DATA } from '../list/book';
import { UsersService } from '../list/list.services';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm = fb.group({
      name: ["", Validators.required],
      title: ["", Validators.required],
      author: ["", Validators.required],
      country: "",
      publisYear: 0,
      price: [Validators.required],
      cover: ['', Validators.required],
      description: ""
    });
  }

  ngOnInit(): void {
  }
  createPost(): void {
    if (this.createForm.invalid) {
      console.error(this.createForm.errors);
      return;
    }
    console.log(this.createForm.value);
    TASK_MOCK_DATA.push(this.createForm.value);

    // for server
    // this.userService.createNewPost(this.createForm.value).subscribe(result => {
    //   console.log("Result" + result);
    // },
    //   error => {
    //     console.error(error);
    //   });
  }

}
