
export interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    appointmentType: string;
  }

export interface SetFieldAction {
    type: 'SET_FIELD';
    field: keyof FormState;
    value: string;
  }

export type FormAction = SetFieldAction;