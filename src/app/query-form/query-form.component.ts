import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService, QueryNode } from '../data.service';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {

  @Input() form: FormGroup;

  childNodes;

  constructor(private dataService: DataService) { 
  }

  get control() {
    return this.form.controls['selection'];

  }

  get childNodeControls() {
    return this.form.controls['children'] ? this.form.controls['children'].controls : null;
  }

  get node() {
    return this.form.controls['nodeData'].value;
  }

  ngOnInit() {
  }

  addChildNodes(childNodes) {
    this.form.removeControl('children');
    const formArray = new FormArray([]);
    for(const childNode of childNodes) {
      formArray
      .push(new FormGroup({
        'selection': new FormControl('', Validators.required),
        'nodeName': new FormControl(childNode.name),
        'nodeData': new FormControl(childNode)
      }));
    }
    this.form.addControl('children', formArray);
    this.childNodes = childNodes;
  }

  onNodeValueChange(event) {
    if(this.node.loadSubNodes) {
      const childNodes = this.dataService.getChildrenFor(event.value);
      this.addChildNodes(childNodes);
    }
  }

}