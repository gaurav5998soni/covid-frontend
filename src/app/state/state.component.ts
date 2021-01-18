import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  @Input('selectedState')
  selectedState;
  @Input('selectedStateData')
  selectedStateData;
  constructor() { }

  ngOnInit(): void {
  }

}
