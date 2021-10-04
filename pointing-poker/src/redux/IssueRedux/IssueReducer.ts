import {
  IssueState,
  SET_COMPLETED,
  SET_CURR_ISSUE_ID,
  SET_DELETED_ISSUE,
  SET_ISSUE,
  SET_UPDATED_ISSUE,
  TActionsIssues,
} from './IssueTypes';

const issueState: IssueState = {
  currIssueId: '',
  issues: {},
  completedIssue: [],
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
    case SET_COMPLETED:
      return {
        ...state,
        completedIssue: [...state.completedIssue, action.payload],
      };
    case SET_UPDATED_ISSUE:
      return {
        ...state,
        issues: { ...state.issues, [action.payload._id]: action.payload },
      };
    case SET_DELETED_ISSUE:
      // eslint-disable-next-line no-case-declarations
      const { [action.payload]: deleted, ...newIssues } = state.issues;
      return {
        ...state,
        issues: newIssues,
      };
    default:
      return state;
  }
};
