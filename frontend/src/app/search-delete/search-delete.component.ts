import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeCreationService } from '../employee-creation.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  employees : any;

  constructor(private service:EmployeeCreationService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    let resp = this.service.getEmployees();
    resp.subscribe((data) => this.employees = data);
  }

  public delete(id:number){
    let resp= this.service.delete(id);
    resp.subscribe((data)=>this.employees=data);
    this.router.navigate(['/search']);
  }

  public functionOnWhichRedirectShouldHappen(id : number){
    this.router.navigate(['/update/' + id]);
  }

  public create(){
    this.router.navigate(['/create']);
  }

}
