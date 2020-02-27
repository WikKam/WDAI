import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';

  export const fader = trigger('routeAnimations',[
      transition('main => *',fadeTo()),
      transition('* <=> isRight', fadeTo())
  ])
  function fadeTo(){
    return[
        
            query(':enter',[
                style({
                    position: 'absolute',
                    width: '100%',
                    opacity: 0,
                    transform : 'translateX(100%)'
                }),
            ]),
            query(':leave',[
                style({
                    position: 'absolute',
                    width: '100%',
                    opacity: 0,
                    transform : 'translateX(0)'
                })
            ]),
            group([
            query(':leave',[
                animate('700ms ease', style({
                    //opacity: 0,
                    transform: 'translateX(-100%)'
                }))
            ]),
            /*query(':enter',[
                animate('700ms ease', style({
                    opacity: 1,
                    transform: 'translateX(0)'
                }))
            ])*/,
           
            ]
            )
    ]
  }
  export const slider = trigger('routeAnimations', [
    transition('main => courseList, :enter',slide(100,'X')),
    transition('courseList => isRight, :enter',slide(100,'X')),
    transition('isRight => courseList, :enter',slide(-100,'X')),
    transition('courseList => main, :enter', slide(-100,'X')),
    transition('* => log, * => reg, :enter', slide(-100,'Y')),
    transition('log => *, reg => *, :enter', slide(100,'Y')),
    transition('log => reg, :enter',slide(100,'X'))])
    function slide(val, axis: 'X' | 'Y'){
        return [
            query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
            query(':enter', style({ transform: `translate${axis}(${val}vw)` }), { optional: true }),
            query(':leave', style({ transform: `translate${axis}(0vw)` }), { optional: true }),
      
            group([
              query(':leave', [
                animate('500ms ease-in-out', style({
                  transform: `translate${axis}(${-val}vw)`
                }))
              ], { optional: true }),
              query(':enter', [
                animate('500ms ease-in-out', style({
                  transform: `translate${axis}(0)`
                }))
              ], { optional: true })
            ])
          ]
    }