import { IssueData } from '../../types/interfaces';
import { IActionSetCurrIssueID, IActionSetIssue, SET_CURR_ISSUE_ID, SET_ISSUE } from './IssueTypes';

export const setCurrIssueID = (id: string): IActionSetCurrIssueID => ({
  type: SET_CURR_ISSUE_ID,
  payload: id,
});

export const setIssue = (issueInfo: IssueData): IActionSetIssue => ({
  type: SET_ISSUE,
  payload: issueInfo,
});
