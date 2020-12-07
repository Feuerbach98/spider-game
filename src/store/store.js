import { createStore } from "redux";
import {
  listenPositions,
  flyCatched,
  saveToLocalStorage,
  randomizeFly,
} from "../components/helpers";

const START = "ON_START";
const TOP = "ON_TOP";
const BOTTOM = "ON_BOTTOM";
const LEFT = "ON_LEFT";
const RIGHT = "ON_RIGHT";
const SAVE = "ON_SAVE";
const CHANGE = "ON_CHANGE";
const END = "ON_ENDGAME";
const LEVEL = "CHANGE_LEVEL";
const GOTO = "CHANGE_GOTO";
const SETID = "SET_INTERVAL_ID"

if (localStorage.getItem("spider_scores") === null) {
  localStorage.setItem("spider_scores", "");
}

if (localStorage.getItem("spider_levels") === null) {
  localStorage.setItem("spider_levels", "1");
}

const initialState = {
  spider: {
    width: 50,
    heigth: 50,
    left: 40,
    top: 200,
    transform: `rotate(0deg)`,
  },
  speed: 30,
  hp: 10,
  step: 1.5,
  fly: {
    width: 50,
    heigth: 50,
    left: 0,
    top: 0,
  },
  levels: localStorage.getItem("spider_levels"),
  level: 1,
  goTo: 1,
  score: 0,
  fieldSize: {
    width: 400,
    height: 400,
  },
  highScores: localStorage.getItem("spider_scores"),
  name: "",
  endGame: false,
  moveIntervalId: null
};

export const actions = {
  start: () => ({
    type: START,
  }),
  right: () => ({
    type: RIGHT,
  }),
  left: () => ({
    type: LEFT,
  }),
  bottom: () => ({
    type: BOTTOM,
  }),
  top: () => ({
    type: TOP,
  }),
  save: () => ({
    type: SAVE,
  }),
  change: (name, value) => ({
    type: CHANGE,
    name,
    value,
  }),
  end: () => ({
    type: END,
  }),
  changeLevel: (level) => ({
    type: LEVEL,
    level,
  }),
  changeGoTo: (level) => ({
    type: GOTO,
    level,
  }),
  setId: (id) => ({
    type: SETID,
    id
  })
};

const reducer = (state, action) => {
  switch (action.type) {
    case RIGHT: {
      if (listenPositions(state)) {
        return flyCatched(state);
      }

      if (state.spider.left + state.spider.width > state.fieldSize.width) {
        return state;
      }

      return {
        ...state,
        spider: {
          ...state.spider,
          left: state.spider.left + state.step,
          transform: `rotate(90deg)`,
        },
      };
    }

    case LEFT: {
      if (listenPositions(state)) {
        return flyCatched(state);
      }

      if (state.spider.left < 0) {
        return state;
      }

      return {
        ...state,
        spider: {
          ...state.spider,
          left: state.spider.left - state.step,
          transform: `rotate(270deg)`,
        },
      };
    }

    case BOTTOM: {
      if (listenPositions(state)) {
        return flyCatched(state);
      }

      if (state.spider.top + state.spider.heigth > state.fieldSize.height) {
        return state;
      }

      return {
        ...state,
        spider: {
          ...state.spider,
          top: state.spider.top + state.step,
          transform: `rotate(180deg)`,
        },
      };
    }

    case TOP: {
      if (listenPositions(state)) {
        return flyCatched(state);
      }

      if (state.spider.top < 0) {
        return state;
      }

      return {
        ...state,
        spider: {
          ...state.spider,
          top: state.spider.top - state.step,
          transform: `rotate(0deg)`,
        },
      };
    }

    case SAVE: {
      saveToLocalStorage(state.name, state.score);

      return {
        ...state,
        highScores: localStorage.getItem("spider_scores"),
      };
    }

    case CHANGE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }

    case END: {
      return {
        ...state,
        endGame: !state.endGame,
      };
    }

    case START: {
      return {
        ...initialState
      };
    }

    case LEVEL: {
      return {
        ...state,
        level: state.goTo,
        step: state.goTo * 0.1 + state.step
      }
    }

    case GOTO: {
      return {
        ...state,
        goTo: action.level 
      }
    }

    case SETID: {
      return {
        ...state,
        moveIntervalId: action.id
      }
    }

    default: {
      return state;
    }
  }
};

export const store = createStore(reducer, initialState);
