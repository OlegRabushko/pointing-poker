export interface IConnectForm {
  firstName: string;
  lastName: string;
  job: string;
  avatar: string;
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
export interface IIssueStatus {
  id: string;
  status: string;
  content: string;
}

export interface ICreateIssueForm {
  title: string;
  link: string;
  priority: string;
  voitingResults: IIssueStatus[];
}
