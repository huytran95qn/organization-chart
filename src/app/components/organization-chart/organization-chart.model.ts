export class FlatTree {
    id!: number;
    label!: string;
    childrenIds!: number[];
    disabled?: boolean;
    parentId?: number;
    command?: () => void

    constructor(id: number, label: string, childrenIds: number[], disabled?: boolean , callBack?: () => void) {
        this.id = id;
        this.label = label;
        this.childrenIds = childrenIds;
        this.disabled = disabled;
        this.command = callBack;
    }
}

export const FLAT_TREE_DATA: FlatTree[] = [
    {
        id: 1,
        label: 'Root',
        childrenIds: [2, 7],
        disabled: true
    },
    {
        id: 2,
        label: 'Child 1',
        parentId: 1,
        childrenIds: [3, 4, 5, 6]
    },
    {
        id: 3,
        label: 'Grandchild 1.1',
        parentId: 2,
        childrenIds: []
    },
    {
        id: 4,
        label: 'Grandchild 1.2',
        parentId: 2,
        childrenIds: []
    },
    {
        id: 5,
        label: 'Grandchild 1.3',
        parentId: 2,
        childrenIds: []
    },
    {
        id: 6,
        label: 'Grandchild 1.4',
        parentId: 2,
        childrenIds: []
    },
    {
        id: 7,
        label: 'Child 2',
        parentId: 1,
        childrenIds: [8, 9]
    },
    {
        id: 8,
        label: 'Child 2.1',
        parentId: 7,
        childrenIds: []
    },
    {
        id: 9,
        label: 'Child 2.2',
        parentId: 7,
        childrenIds: [10, 11, 12]
    },
    {
        id: 10,
        label: 'Child 2.1.1',
        parentId: 9,
        childrenIds: []
    },
    {
        id: 11,
        label: 'Child 2.1.2',
        parentId: 9,
        childrenIds: []
    },
    {
        id: 12,
        label: 'Child 2.1.3',
        parentId: 9,
        childrenIds: []
    },
    {
        id: 13,
        label: 'Child 2.1.4',
        parentId: 9,
        childrenIds: []
    }
]

export class TreeNode {
    label!: string;
    data!: FlatTree;
    children?: TreeNode[];
    disabled?: boolean;
    parent?: TreeNode;
    
    constructor(data?: FlatTree) {
        if(data) {
            this.label = data?.label;
            this.children = [];
            this.data = data;
            this.disabled = data.disabled;
        }
    }
}