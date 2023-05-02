import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   tasks: { name: string; time: string; classAndTask: string }[] = [
    {
      name: 'Denis Miškolci',
      time: '9 min ago',
      classAndTask: '1.N - RESTapi',
    },
    {
      name: 'Denis Miškolci',
      time: '9 min ago',
      classAndTask: '1.N - RESTapi',
    },
    {
      name: 'Denis Miškolci',
      time: '9 min ago',
      classAndTask: '1.N - RESTapi',
    },
    {
      name: 'Denis Miškolci',
      time: '9 min ago',
      classAndTask: '1.N - RESTapi',
    },
    {
      name: 'Denis Miškolci',
      time: '9 min ago',
      classAndTask: '1.N - RESTapi',
    },
    {
      name: 'Denis Miškolci',
      time: '9 min ago',
      classAndTask: '1.N - RESTapi',
    },
    {
      name: 'Denis Miškolci',
      time: '9 min ago',
      classAndTask: '1.N - RESTapi',
    },
    {
      name: 'Denis Miškolci',
      time: '9 min ago',
      classAndTask: '1.N - RESTapi',
    },
    {
      name: 'Denis Miškolci',
      time: '9 min ago',
      classAndTask: '1.N - RESTapi',
    },
  ];

  ngOnInit() {

  }

}
