import { Direction } from '../types/GridTypes';

/**
 * Returns a set of values that direct the change along an x and y axis
 * during the pre-render phase of a game loop for an object.
 *
 * The value of x and y are 0, 1 or -1
 * { x : 0 | 1 | -1 , y : 0 | 1 | -1 }
 *
 * example: up {x:0, y:1}
 *
 * @param direction Direction
 * @returns StepValue
 */
export default function getStepValue(direction: Direction): StepValue {
  switch (direction) {
    case 'up':
      return { x: 0, y: 1 };
    case 'down':
      return { x: 0, y: -1 };
    case 'left':
      return { x: -1, y: 0 };
    case 'right':
      return { x: 1, y: 0 };
    case 'upLeft':
      return { x: -1, y: 1 };
    case 'downLeft':
      return { x: -1, y: -1 };
    case 'downRight':
      return { x: 1, y: -1 };
    case 'upRight':
      return { x: 1, y: 1 };
  }
}

type StepValueRange = 0 | 1 | -1;

export type StepValue = { x: StepValueRange; y: StepValueRange };
