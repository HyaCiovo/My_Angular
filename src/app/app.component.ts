import { Component } from "@angular/core";
import { AccordionMenuItem, AccordionMenuType } from "ng-devui";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title: string = "My_Angular";
  menu: AccordionMenuType = [
    {
      title: "首页",
      link: "/home",
    },
    {
      title: "介绍",
      children: [{ title: "介绍", link: "/about" }],
    },
    {
      title: "测试",
      children: [
        { title: "测试1", link: "/test1" },
        { title: "测试2", link: "/test2" },
        { title: "测试3", link: "/test3" },
      ],
    },
    {
      title: "Rxjs",
      link: "/rxjs",
    },
  ];
  renderMenus = (menu: AccordionMenuType): AccordionMenuType => {
    return menu.reduce((pre: AccordionMenuType, cur: AccordionMenuItem) => {
      if (cur.children && cur.children.length === 0) {
        return pre;
      } else {
        return pre.concat(cur);
      }
    }, []);
  };
}
