import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2';

export const getservice = createAsyncThunk("service/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/service/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addservice = createAsyncThunk("service/add", async (newservice) => {
  try {
    let result = await axios.post("http://localhost:5000/service/add", newservice, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    Swal.fire({
      title: "Success",
      text: "Service added successfully",
      icon: "success",
    });
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deleteservice = createAsyncThunk("service/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/service/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    Swal.fire({
      title: "Success",
      text: "Service deleted successfully",
      icon: "success",
    });
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editservice = createAsyncThunk(
  "service/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/service/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  servicelist: null,
  status: null,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getservice.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getservice.fulfilled, (state, action) => {
        state.status = "success";
        state.servicelist = action.payload.data.services;
      })
      .addCase(getservice.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addservice.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addservice.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addservice.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deleteservice.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteservice.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteservice.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editservice.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editservice.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editservice.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default serviceSlice.reducer;