import { Injectable } from '@angular/core';


export interface QueryNode {
  name: string;
  type: 'text' | 'dropdown' | 'path';
  options?: string[];
  loadSubNodes?: boolean;
  children?: QueryNode[];
  value?: any;
}

@Injectable()
export class DataService {

  nodes: QueryNode[];

  constructor() { 
    this.nodes = [
      {
        name: 'SelectType',
        type: 'dropdown',
        options: [
          'PhysicalLocation',
          'SiteVisit',
        ],
        loadSubNodes: true
     },
     {
        name: 'PhysicalLocation',
        type: 'path',
        children: [
          {
            name: 'Operator',
            type: 'dropdown',
            options: [
              'Within'
            ],
            loadSubNodes: true
          }
        ]
     },
     {
        name: 'Within',
        type: 'path',
        children: [
          {
            name: 'Miles',
            type: 'text'
          },
          {
            name: 'Location',
            type: 'dropdown',
            options: [
              'New York',
              'Canada',
              'India'
            ],
          }
        ]
     },
     {
        name: 'SiteVisit',
        type: 'path',
        children: [
          {
            name: 'Operator',
            type: 'dropdown',
            options: [
              'Equal To',
              'Less Than',
              'Greator Than'
            ],
          },
          {
            name: 'TimeinLast',
            type: 'text'
          },
          {
            name: 'Days',
            type: 'text'
          },
          {
            name: 'ForSiteKey',
            type: 'dropdown',
            options: [
              '1002',
              '1332',
              '1233',
              '1111'
            ],
          }
        ]
     }
    ];
  }


  getStartNode() {
    return this.nodes.find(node => node.name === 'SelectType');
  }

  getNode(nodeName: string) {
    return this.nodes.find(node => node.name === nodeName);
  }

  getChildrenFor(value: string) {
    return this.nodes.find(node => node.name === value).children;
  }
}