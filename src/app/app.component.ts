import { Component, OnInit } from '@angular/core';
import { FlatTree, FLAT_TREE_DATA } from './components/organization-chart/organization-chart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OrganizationChart';
  
  flatTrees: FlatTree[] = FLAT_TREE_DATA;

  ngOnInit(): void {
    this.flatTrees = FLAT_TREE_DATA.map(data => {
      return new FlatTree(
        data.id,
        data.label,
        data.childrenIds,
        data.disabled,
        () => this.clickOnNode(data)
      )
    })
  }
  
  private clickOnNode($event: FlatTree) {
    alert($event.label);
  }
}
