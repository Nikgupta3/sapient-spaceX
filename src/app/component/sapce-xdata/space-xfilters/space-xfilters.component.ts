import { Component, OnInit } from "@angular/core";
import { SpaceXDataService } from "src/app/service/space-xdata.service";

@Component({
  selector: "app-space-xfilters",
  templateUrl: "./space-xfilters.component.html",
  styleUrls: ["./space-xfilters.component.scss"],
})
export class SpaceXfiltersComponent implements OnInit {
  private filterYears: Array<string> = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  private yearToFilter: string = "";
  private launchFilter: any;
  private landingFilter: any;
  constructor(private spacexDataService: SpaceXDataService) {}

  ngOnInit(): void {}

  public filterByYear(year): void {
    this.yearToFilter = year;

    this.getSpacexLaunches();
  }
  public filterByLaunch(value): void {
    if (value === "true") {
      this.launchFilter = true;
    } else {
      this.launchFilter = false;
    }

    this.getSpacexLaunches();
  }
  public filterByLanding(value): void {
    if (value === "true") {
      this.landingFilter = true;
    } else {
      this.landingFilter = false;
    }
    this.getSpacexLaunches();
  }

  public getSpacexLaunches(): void {
    const filters: object = {};
    if (this.yearToFilter) {
      filters["launch_year"] = this.yearToFilter;
    }
    if (this.launchFilter !== undefined) {
      filters["launch_success"] = this.launchFilter;
    }
    if (this.landingFilter !== undefined) {
      filters["land_success"] = this.landingFilter;
    }
    this.spacexDataService.getSpaceXList(filters).subscribe((response) => {
      if (response) {
        this.spacexDataService.updateFilteredLaunches(response);
      }
    });
  }
}
