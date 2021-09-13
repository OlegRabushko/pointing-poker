export interface IConnectForm {
  firstName: string;
  lastName: string;
  job: string;
  role: boolean;
}

export interface InputProps {
  labelClass?: string;
  inputClass?: string;
  labelText: string;
  type?: string;
  defaultValue?: string;
}
