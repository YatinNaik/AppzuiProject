import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
// import {AppComponent} from'./app.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


// @NgModule({declarations:[AppComponent],
// import :[
//   BrowserModule,
//   NgMultiSelectDropDownModule
// ];});
//meta data for the class, component decorater is function for the class
//component are ui building block for angular

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  // myName="snack";
  // String time;
  isSnack= true;
  getName(name: any){
    if(name == "snack"){
       this.isSnack =true;
        alert(name)
    }
    // else if(name == "lunch"){
    //   var isLunch = true;
    //   alert(name);
    // }

    // datePickerConfig: Partial<BsDatepickerConfig>;
    // minMode: BsDatepickerViewMode = 'day';
    // constructor() {
    //   this.datePickerConfig = Object.assign(
    //     {},
    //     {
    //       containerClass: 'theme-dark-blue',
    //       showWeekNumbers: false,
    //       minMode: this.minMode,
    //     }
    //   );
    // }
  }

  // dropdownList = [];
  // dropdownSettings:IDropdownSettings={};
  // ngOnInit() {
  //   this.dropdownList = [
  //     { item_id: 1, item_text: 'Item1' },
  //     { item_id: 2, item_text: 'Item2' },
  //     { item_id: 3, item_text: 'Item3' },
  //     { item_id: 4, item_text: 'Item4' },
  //     { item_id: 5, item_text: 'Item5' }
  //   ];
  //   this.dropdownSettings = {
  //     idField: 'item_id',
  //     textField: 'item_text',
  //   };
  // }
}

