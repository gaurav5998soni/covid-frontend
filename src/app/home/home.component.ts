import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stateTrue=false;
  selectedState=null;
  selectedStateData=null;
  dataAvilable = false;
  data =null;
  states = [];
  
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.retriveDate().subscribe({
      next: (result) => {
        console.log(result);
        this.data = result;
      for(var key in this.data){
        console.log(this.data[key].total.confirmed);
        this.states.push(key);
      }
      console.log("state is ready",this.states);
      this.dataAvilable=true;
  }
});
}


  resetHandler(){
    this.stateTrue = false;
    this.selectedState=null;
  }
  stateHandler(x){
    console.log("I am executed!",x);
    this.stateTrue=true;
    this.selectedStateData = this.data[x];
    this.selectedState = x;
  }

}
