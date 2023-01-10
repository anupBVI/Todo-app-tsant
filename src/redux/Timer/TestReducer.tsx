interface IState {
  currentDate: string;
  loggedInAt: string;
  Totalbreaks: {
    break: string;
  };
}

const iState = {
  currentDate: "",
  loggedInAt: "",
  Totalbreaks: {
    break: "00:00:01",
  },
};

type Action = {
  type: string;
  payload?: string;
};

export const TestReducer = (state = iState, action: Action) => {
  switch (action.type) {
    case "one": {
      console.log(action.type);
        console.log(state.currentDate)
      return { 
        state
      };
    }
  }
};
