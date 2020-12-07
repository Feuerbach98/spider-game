export const listenPositions = (state) => {
  const xs = [state.fly.left, state.spider.left].sort((a, b) => b - a);
  const ys = [state.fly.top, state.spider.top].sort((a, b) => b - a);

  if (
    xs[0] - xs[1] < state.spider.width / 2 &&
    ys[0] - ys[1] < state.spider.width / 2
  ) {
    return true;
  } else {
    return false;
  }
};

export const randomizeFly = (state) => {
  return {
    ...state.fly,
    left: randomInteger(0, state.fieldSize.width - state.fly.width),
    top: randomInteger(0, state.fieldSize.height - state.fly.width)
  }
}

export const flyCatched = (state) => {
  let newLevel = state.level;

  if ((state.score + 1) % 5 === 0 && state.score !== 0) {
    newLevel += 1;
    saveLevels(newLevel);
  }

  return {
    ...state,
    score: state.score + 1,
    fly: randomizeFly(state),
    step: state.step + 0.1,
    level: newLevel ? newLevel : state.level
  };
}

const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
}

const saveLevels = (level) => {
  let existLevels = localStorage.getItem("spider_levels");

  if(+existLevels > +level) {
    return
  } else {
    existLevels = level;
  }

  localStorage.setItem(
    "spider_levels",
    existLevels
  );
}

export const saveToLocalStorage = (name, value) => {
  let existScores = localStorage.getItem("spider_scores");

  let newScores = existScores +
  (existScores.length ? "," : "") +
  `${name ? name : "no-name"}:${value}`;

  if (existScores) {
    newScores = newScores
      .split(",")
      .map((score) => score.split(":"))
      .sort((a, b) => b[1] - a[1])
      .map((score) => score.join(":"))
      .slice(0, 9)
      .join(",");
  }

  localStorage.setItem(
    "spider_scores",
    newScores
  );
};
