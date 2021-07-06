import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-job-query-builder',
  templateUrl: './job-query-builder.component.html',
  styleUrls: ['./job-query-builder.component.css']
})
export class JobQueryBuilderComponent implements OnInit {

  @Input() ruleSetForm;
  parentFlag = false;
  

  constructor(private dataService: DataService) {}

  get rules() {
    return this.ruleSetForm.controls['rules'].controls;
  }

  get childRuleSets() {
    return this.ruleSetForm.controls['childRuleSets'].controls;
  }

  ngOnInit() {
    if(!this.ruleSetForm) {
      this.parentFlag = true;
      this.ruleSetForm = this.createRuleSet();
    }
  }

  createRuleSet() {
    return new FormGroup({
      operator: new FormControl('', Validators.required),
      rules: new FormArray([
        this.createRule()
      ]),
      childRuleSets: new FormArray([])
    });
  }

  addRuleSet() {
    (this.ruleSetForm.controls['childRuleSets'] as FormArray).push(this.createRuleSet());
  }

  addRule() {
    (this.ruleSetForm.controls['rules'] as FormArray).push(this.createRule());
  }

  createRule() {
    const startNode = this.dataService.getStartNode();
    const queryForm = new FormGroup({
      selection: new FormControl('', Validators.required),
      nodeName: new FormControl(startNode.name),
      nodeData: new FormControl(startNode)
    });
    return queryForm;
  }

}