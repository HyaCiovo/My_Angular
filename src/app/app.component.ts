import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My_Angular';
  menu = [
    {
      title: '首页',
      link: "/home"
    },
    {
      title: '介绍',
      link: "/about"
    },
    {
      title: '测试',
      link: "/test"
    },
    // {
    //   title: '内容三（默认展开）',
    //   open: true,
    //   children: [{ title: '子内容1(禁用)', disabled: true }, { title: '子内容2(默认激活)' }, { title: '子内容3' }],
    // },
  ];
}
