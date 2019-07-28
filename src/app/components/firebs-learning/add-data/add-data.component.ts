import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Mydata } from 'src/app/models/mydata';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  form=new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  
  data:Mydata={
    title:'',
    description:''
  }
  constructor(public firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.data.title!='' && this.data.description!=''){
      this.firebaseService.addData(this.data);
      this.data.title='';
      this.data.description='';
    }else{
      alert('NO Data');
    }
  }

}
