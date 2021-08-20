import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeCreationService } from '../employee-creation.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  employee : Employee = new Employee(0, "", "", 0, 0);
  message : any;

  constructor(private service : EmployeeCreationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public create() {
    let resp = this.service.create(this.employee);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['/search']);
  }

}
