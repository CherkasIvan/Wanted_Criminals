import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
  state,
  stagger,
  keyframes,
} from '@angular/animations';

export const AnimationRoute = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0, transform: 'none' })], {
      optional: true,
    }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '300ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 0, transform: 'none' })
          ),
        ],
        {
          optional: true,
        }
      ),
      query(
        ':enter',
        [
          animate(
            '600ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' })
          ),
        ],
        { optional: true }
      ),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state(
      'in',
      style({
        'max-height': '500px',
        opacity: '1',
        visibility: 'visible',
      })
    ),
    state(
      'out',
      style({
        'max-height': '0px',
        opacity: '0',
        visibility: 'hidden',
      })
    ),
    transition('in => out', [
      group([
        animate(
          '400ms ease-in-out',
          style({
            opacity: '0',
          })
        ),
        animate(
          '600ms ease-in-out',
          style({
            'max-height': '0px',
          })
        ),
        animate(
          '700ms ease-in-out',
          style({
            visibility: 'hidden',
          })
        ),
      ]),
    ]),
    transition('out => in', [
      group([
        animate(
          '1ms ease-in-out',
          style({
            visibility: 'visible',
          })
        ),
        animate(
          '600ms ease-in-out',
          style({
            'max-height': '500px',
          })
        ),
        animate(
          '800ms ease-in-out',
          style({
            opacity: '1',
          })
        ),
      ]),
    ]),
  ]),
];
