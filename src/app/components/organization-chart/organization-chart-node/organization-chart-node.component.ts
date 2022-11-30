import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreeNode } from '../organization-chart.model';

@Component({
  selector: 'organization-chart-node',
  templateUrl: './organization-chart-node.component.html',
  styleUrls: ['./organization-chart-node.component.scss']
})
export class OrganizationChartNodeComponent implements OnInit {
  @Input() node!: TreeNode;

  @Output() selected: EventEmitter<TreeNode> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectedNode(): void {
    if(!this.node.disabled) {
      this.selected.emit(this.node);
      this.node.data.command?.();
    }
  }
}
