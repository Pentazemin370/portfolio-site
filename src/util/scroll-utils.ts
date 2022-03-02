export const customScroll = (ref) => {
  const scrollFactor = 20;
  const accuracyBuffer = 10;

  const bodyRect = document?.body?.getBoundingClientRect().top;
  const elementRect = ref.current.getBoundingClientRect().top;

  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition;
  const scrollStepUnit = offsetPosition/(scrollFactor);

  const scrollStepY = offsetPosition > window.scrollY ? scrollStepUnit : -scrollStepUnit;
  let speed = 20;
  const scrollInterval = function(){
    let targetRangeReached = offsetPosition - accuracyBuffer < window.scrollY;
    if(!targetRangeReached){
      window.scrollBy(0,scrollStepY);
      speed = Math.max(speed+(5-speed)*0.1,5);
      setTimeout(scrollInterval,speed);
    }
  }
  setTimeout(scrollInterval,speed);
}