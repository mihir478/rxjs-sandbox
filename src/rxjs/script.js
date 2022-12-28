import { fromEvent, interval } from "rxjs";
import { setCount, startButton, pauseButton } from "./utilities";

const start$ = fromEvent(startButton, "click");
const pause$ = fromEvent(pauseButton, "click");

let interval$ = interval(1000);
let subscription;

start$.subscribe(() => {
  subscription = interval$.subscribe(setCount);
});

pause$.subscribe(() => {
  subscription.unsubscribe();
});
