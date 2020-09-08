const reducers = (state = {}, action) => {
  const { taskList } = state;
  switch (action.type) {
    case "SET_TASK_LIST": {
      const newList = [...taskList, ...action.payload];
      return { ...state, taskList: newList };
    }

    case "DELETE_TASK_LIST": {
      const newList = [
        ...taskList.filter((item, index) => action.payload !== index),
      ];
      return { ...state, taskList: newList };
    }

    case "SET_INDEX_EDIT_TASK": {
      return { ...state, indexTaskSelect: action.payload };
    }

    case "EDIT_TASK_LIST": {
      taskList[state.indexTaskSelect] = action.payload;
      return { ...state, taskList };
    }

    case "ACTIVE_FORM": {
      return { ...state, activeForm: action.payload };
    }

    case "SET_TYPE_FORM": {
      return { ...state, typeForm: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default reducers;
