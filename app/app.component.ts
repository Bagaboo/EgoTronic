import {Component} from 'angular2/core';
import {Patient} from './patient';



@Component({
    selector: 'egotronic',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent{
        title = 'EgoTronic';
        public patients = PATIENTS;
        selectedPatient: Patient;
    
    onSelect(patient: Patient) {this.selectedPatient = patient; }
}

var PATIENTS: Patient[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
