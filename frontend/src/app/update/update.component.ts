import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeCreationService } from '../employee-creation.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  employee : Employee = new Employee(0, "", "", 0, 0);
  message : any;
  employees : any;

  constructor(private service : EmployeeCreationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));

    // Find the product that correspond with the id provided in route.
    let resp = this.service.find(idFromRoute);
    resp.subscribe((data) => this.employees = data);
  }

  public update(id : number) {
    let resp = this.service.update(id, this.employee);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['/search']);
  }

}
