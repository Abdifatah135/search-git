import { Component, OnInit } from '@angular/core';
import { GithubService} from "../github.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})
export class GithubComponent implements OnInit {

  constructor(private githubservice:GithubService) { }

  ngOnInit() {
  }

}
