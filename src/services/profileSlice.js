import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  profile: [{ id:1, Username: 'Vidya', phonenumber: "9663291552",emailid:"vidyanaik1932@gmail.com" , password:"Vidya1932*" },
  { id:2, Username: 'Aayushi', phonenumber: "4223456789", emailid:"vidya2000@gmail.com" , password:"Vidya2000*" },
  { id:3, Username: 'Bhaskar ', phonenumber: "1623456789", emailid:"user1932@gmail.com" , password:"User1932*" },
]};

const fooditemSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    add(state, action) {
      // state.fooditem.push(action.payload);
      state.profile.push(action.payload);

    },
    edit(state , action){
      const data = action.payload;      
      const existingUser = state.profile.filter(user => user.emailid === data.emailid);
      if(existingUser){
        existingUser[0].password = data.password;
      }
    }

  },
});



export const { add , edit } = fooditemSlice.actions;
export default fooditemSlice.reducer;
