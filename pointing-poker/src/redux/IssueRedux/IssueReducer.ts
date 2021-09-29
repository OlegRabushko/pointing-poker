import { IssueState, SET_CURR_ISSUE_ID, SET_ISSUE, TActionsIssues } from './IssueTypes';

const issueState: IssueState = {
  currIssueId: '',
  issues: {},
};

export const issueReducer = (state = issueState, action: TActionsIssues) => {
  switch (action.type) {
    case SET_CURR_ISSUE_ID:
      return {
        ...state,
        currIssueId: action.payload,
      };
    case SET_ISSUE:
      return {
        ...state,
        issues: { ...state.issues, [action.payload._id]: action.payload },
      };
    default:
      return state;
  }
};
