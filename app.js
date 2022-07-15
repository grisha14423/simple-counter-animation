const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const counte = +counter.innerText;

    const increment = target / 200;

    if (counte < target && counte !== NaN) {
      counter.innerText = `${Math.ceil(counte + increment)}`;
      setTimeout(updateCounter, 4);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
