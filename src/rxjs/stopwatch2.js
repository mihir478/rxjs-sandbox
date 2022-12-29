import { fromEvent, interval, skipUntil, takeUntil, scan } from "rxjs";
import { setCount, startButton, pauseButton } from "./utilities";
const start$ = fromEvent(startButton, "click");
const pause$ = fromEvent(pauseButton, "click");

const counter$ = interval(1000).pipe(
  skipUntil(start$),
  scan((total) => total + 1, 0),
  takeUntil(pause$),
  scan((n) => console.log(n))
);

counter$.subscribe(setCount);
