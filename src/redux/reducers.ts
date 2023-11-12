import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    appointmentType: string;
  }
  
  // Define the initial state
  const initialState: FormState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    appointmentType: '',
  };

  // Define the form slice using createSlice
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      setFormInput: (state, action: PayloadAction<{ field: keyof FormState; value: string }>) => {
        const { field, value } = action.payload;
        return { ...state, [field]: value };
      },
      setResetForm: () => {
        return initialState
      }
    },
  });

export const { setFormInput, setResetForm } = formSlice.actions

export const formReducer = formSlice.reducer;