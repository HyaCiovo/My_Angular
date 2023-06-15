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
      title: "Home",
      link: "/home",
    },
    {
      title: "About",
      children: [{ title: "About", link: "/about" }],
    },
    {
      title: "Test",
      children: [
        { title: "Test1", link: "/test1" },
        { title: "Test2", link: "/test2" },
        { title: "Test3", link: "/test3" },
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
