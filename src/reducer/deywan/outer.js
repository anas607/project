// import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
// import  axios  from 'axios';

// export const counterSlice = createSlice({
//     name: 'dewan_outer',
//     initialState:[
//   {
//     id: "#896643",
//     mailTitle: "طلب شهادة",
//     officeName: "دائرة شؤون الطلاب",
//     senderName: "أحمد ديب",
//     senderPhone: "+963944123456",
//     senderImg: "https://randomuser.me/api/portraits/men/45.jpg",
//     dateSubmitted: "1/5/2025",
//     dateReceived: "2/5/2025",
//   },
//   {
//     id: "#896644",
//     mailTitle: "تعديل بيانات",
//     officeName: "مديرية القبول",
//     senderName: "ليلى سعيد",
//     senderPhone: "+963944654321",
//     senderImg: "https://randomuser.me/api/portraits/women/65.jpg",
//     dateSubmitted: "28/4/2025",
//     dateReceived: "30/4/2025",
//   },
// ],
//     reducers: {
//     },
// extraReducers: builder => {
//         builder
//           .addCase(counterSlice.pending, (state, action) => {
//             state.isloading = true
//           })
//           .addCase(counterSlice.fulfilled, (state, action) => {
//             state.isloading = false
//             state.data = action.payload
//             state.error = false;
//           })
//           .addCase(counterSlice.rejected, (state, action) => {
//             state.isloading = false;
//             state.error = action.payload; 
//           })
          
//       }
//   })
//   export const {  decrement, incrementByAmount } = counterSlice.actions
//   export default counterSlice.reducer