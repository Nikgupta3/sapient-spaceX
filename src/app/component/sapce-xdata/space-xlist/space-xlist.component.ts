import { Component, OnInit } from '@angular/core';
import { SpaceXDataService } from 'src/app/service/space-xdata.service';

@Component({
  selector: 'app-space-xlist',
  templateUrl: './space-xlist.component.html',
  styleUrls: ['./space-xlist.component.scss']
})
export class SpaceXlistComponent implements OnInit {

  public spacexData: any = [];
  constructor(
    private spacexDataService: SpaceXDataService
    ) { }

  ngOnInit(): void {
    this.getSpacexList();
    this.spacexDataService.filteredLaunches.subscribe(response=>{
      this.spacexData = response || [];
    })
  }

  public getSpacexList(): void{
    const filters = {};
    this.spacexDataService.getSpaceXList(filters).subscribe((resposne)=>{
      this.spacexData = resposne || [];
    })
  }
}
