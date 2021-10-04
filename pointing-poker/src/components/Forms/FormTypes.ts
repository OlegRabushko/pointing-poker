export interface IConnectForm {
  userID: string;
  firstName: string;
  lastName: string;
  job: string;
  avatar: string;
  session?: string;
  dialer?: boolean;
}

export interface InputProps {
  labelClass?: string;
  inputClass?: string;
  labelText: string;
  type?: string;
  defaultValue?: string;
}

export interface ILabelProps {
  display?: string;
  maxWidth?: string;
  padding?: string;
}

export interface IInputProps {
  borderRadius?: string;
  margin?: string;
  maxWidth?: string;
}

export interface IPopupWrapper {
  textAlign?: string;
  justifyContent?: string;
  padding?: string;
}

// ISSUES DATA
export interface IIssueCard {
  issueId?: string;
  isCurrent?: boolean;
  priority: string;
  link?: string;
  title: string;
  isCompleted?: boolean;
}
