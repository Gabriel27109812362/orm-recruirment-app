import {
  trigger,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

export const disappear = trigger('disapear', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.3s ease-out', style({ opacity: 0 })),
  ]),
]);

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
          transform: 'scale(.5)',
        }),
      ],
      { optional: true },
    ),
    query(
      ':enter',
      [
        animate(
          '.6s ease',
          style({ opacity: 1, transform: 'scale(1)' }),
        ),
      ],
      { optional: true },
    ),
  ]),
]);
