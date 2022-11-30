import { Component, Input, OnInit } from '@angular/core';
import { FlatTree, FLAT_TREE_DATA, TreeNode } from './organization-chart.model';

@Component({
  selector: 'organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss']
})
export class OrganizationchartComponent implements OnInit {
  @Input() model!: FlatTree[];

  nestedTree!: TreeNode;

  constructor() { }

  ngOnInit(): void {
    this.convertFlatTreeToNestedTree(this.model);
  }

  private convertFlatTreeToNestedTree(items: FlatTree[]): void {
    const root = items.find(item => !item.parentId) as FlatTree;
    let nestedTree = new TreeNode(root);
    this.setNestedTree(items, nestedTree, root.childrenIds);
    this.nestedTree = nestedTree;
  }

  private setNestedTree(items: FlatTree[], nestedTree: TreeNode, childrenIds: number[]): void {
    for (let index = 0; index < childrenIds?.length; index++) {
      const childId = childrenIds[index];
      const flatTree = items.find(item => item.id === childId) as FlatTree;
      let childNestedTree = new TreeNode(flatTree);
      childNestedTree.parent = nestedTree;
      if(flatTree.childrenIds.length > 0) {
        this.setNestedTree(items, childNestedTree, flatTree.childrenIds)
      }

      nestedTree.children?.push(childNestedTree);
    }
  }
}
