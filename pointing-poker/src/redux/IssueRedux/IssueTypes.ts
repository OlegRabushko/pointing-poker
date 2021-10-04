import { IssueData, Issues } from '../../types/interfaces';

export const SET_CURR_ISSUE_ID = 'SET_CURR_ISSUE_ID';
export const SET_ISSUE = 'SET_ISSUE';
export const SET_COMPLETED = 'SET_COMPLETED';
export const SET_UPDATED_ISSUE = 'SET_UPDATED_ISSUE';
export const SET_DELETED_ISSUE = 'SET_DELETED_ISSUE';

export interface IssueState {
  currIssueId: string;
  issues: Issues;
  completedIssue: string[];
}

export type TActionsIssues =
  | IActionSetCurrIssueID
  | IActionSetIssue
  | IActionSetCompleted
  | IActionUpdateIssue
  | IActiontDeleteIssue;

export interface IActionSetCurrIssueID {
  type: 'SET_CURR_ISSUE_ID';
  payload: string;
}

export interface IActionSetIssue {
  type: 'SET_ISSUE';
  payload: IssueData;
}

export interface IActionSetCompleted {
  type: 'SET_COMPLETED';
  payload: string;
}

export interface IActionUpdateIssue {
  type: 'SET_UPDATED_ISSUE';
  payload: IssueData;
}

export interface IActiontDeleteIssue {
  type: 'SET_DELETED_ISSUE';
  payload: string;
}

export interface IActionDeleteUser {
  type: 'SET_DELETED_USER';
  payload: string;
}
