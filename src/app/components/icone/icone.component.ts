import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'icone',
  template: '',
  styleUrls: ['./icone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconeComponent {
  @HostBinding('class.cont-icon') public contIcon = true;
  @Input() public color: string;

  @HostBinding('style.width.px')
  @HostBinding('style.height.px')
  @Input() public size?: number;
  @Input() public icon: string;


  @HostBinding('style.background-color')
  public get currentColor(): string {
    return this.color === 'default' ? 'transparent' : this.color;
  }

  @HostBinding('style.background-color')
  public get backgroundColor(): string {
    return this.color === 'default' ? 'transparent' : this.color;
  }

  @HostBinding('style.background-image')
  public get backgroundImage(): string {
    return this.color === 'default' ? `url(./../assets/icons/${this.icon}.svg)` : undefined;
  }

  @HostBinding('style.-webkit-mask-image')
  public get maskImage(): string {
    return this.color === 'default' ? undefined : `url(./../assets/icons/${this.icon}.svg)`;
  }

  @HostBinding('style.display')
  public get display(): string {
    return typeof this.icon === 'undefined' ? 'none' : 'block' ;
  }
}
