import { Component, OnInit } from "@angular/core";
import { SpaceXDataService } from "src/app/service/space-xdata.service";

@Component({
  selector: "app-space-xlist",
  templateUrl: "./space-xlist.component.html",
  styleUrls: ["./space-xlist.component.scss"],
})
export class SpaceXlistComponent implements OnInit {
  public spacexData: any = [];
  public loading: boolean = true;
  constructor(private spacexDataService: SpaceXDataService) {}

  ngOnInit(): void {
    this.getSpacexList();
    this.spacexDataService.filteredLaunches.subscribe((response) => {
      if(Array.isArray(response)) {
        this.spacexData = response || [];
      }
    });
  }

  public getSpacexList(): void {
    const filters = {};
    this.spacexDataService.getSpaceXList(filters).subscribe((response) => {
      if(Array.isArray(response) && response.length > 0) {
        this.loading = false;
        this.spacexData = response;;
      }
    });
  }
}
