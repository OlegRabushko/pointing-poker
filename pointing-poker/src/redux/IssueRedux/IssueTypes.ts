import { IssueData, Issues } from '../../types/interfaces';

export const SET_CURR_ISSUE_ID = 'SET_CURR_ISSUE_ID';
export const SET_ISSUE = 'SET_ISSUE';

export interface IssueState {
  currIssueId: string;
  issues: Issues;
}

export type TActionsIssues = IActionSetCurrIssueID | IActionSetIssue;

export interface IActionSetCurrIssueID {
  type: 'SET_CURR_ISSUE_ID';
  payload: string;
}

export interface IActionSetIssue {
  type: 'SET_ISSUE';
  payload: IssueData;
}
