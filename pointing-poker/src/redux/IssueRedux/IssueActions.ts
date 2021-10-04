import { IssueData } from '../../types/interfaces';
import {
  IActionSetCompleted,
  IActionSetCurrIssueID,
  IActionSetIssue,
  IActiontDeleteIssue,
  IActionUpdateIssue,
  SET_COMPLETED,
  SET_CURR_ISSUE_ID,
  SET_DELETED_ISSUE,
  SET_ISSUE,
  SET_UPDATED_ISSUE,
} from './IssueTypes';

export const setCurrIssueID = (id: string): IActionSetCurrIssueID => ({
  type: SET_CURR_ISSUE_ID,
  payload: id,
});

export const setIssue = (issueInfo: IssueData): IActionSetIssue => ({
  type: SET_ISSUE,
  payload: issueInfo,
});

export const setCompletedIssue = (issueId: string): IActionSetCompleted => ({
  type: SET_COMPLETED,
  payload: issueId,
});

export const setUpdatedIssue = (updatedIssue: IssueData): IActionUpdateIssue => ({
  type: SET_UPDATED_ISSUE,
  payload: updatedIssue,
});

export const setDeletedIssue = (deletedId: string): IActiontDeleteIssue => ({
  type: SET_DELETED_ISSUE,
  payload: deletedId,
});
