import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component(
  {
    templateUrl: './pagina-inicial.component.html',
    styleUrls: ['./pagina-inicial.component.scss'],
    selector: 'pagina-inicial'
  }
)
export class PaginaInicial{
  constructor(private readonly router:Router){}
public goToGithub(){
  window.open("https://github.com/mariana-antonietto",'_blank')
}
public goToLinkedin(){
  window.open("https://www.linkedin.com/in/mariana-antonietto/", '_blank')
}
public goToCurriculo(){
  window.open("https://drive.google.com/file/d/1IobS8jXXRQCMzqYKcnA5RFnYh2Zr9cfB/view?usp=drivesdk", '_blank')
}
public goToProjeto(){
 this.router.navigate(['form']);
}
}
