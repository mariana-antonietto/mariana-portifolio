import { Component } from "@angular/core";

@Component(
  {
    templateUrl: './pag-inicial.component.html',
    styleUrls: ['pag-inicial.component.scss'],
    selector: 'pag-inicial'
  }
)
export class PagInicial{
public goToGithub(){
  window.open("https://github.com/mariana-antonietto",'_blank')
}
public goToLinkedin(){
  window.open("https://www.linkedin.com/in/mariana-antonietto/", '_blank')
}
public goToCurriculo(){
  window.open("https://drive.google.com/file/d/1IobS8jXXRQCMzqYKcnA5RFnYh2Zr9cfB/view?usp=drivesdk", '_blank')
}
}
