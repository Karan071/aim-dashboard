import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define types for the assessment data
interface Assessment {
  id: string;
  title: string;
  // Add other assessment properties based on API response
}

interface AssessmentState {
  assessments: Assessment[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: AssessmentState = {
  assessments: [],
  loading: false,
  error: null,
};

// Create async thunk for fetching assessments
export const fetchAssessments = createAsyncThunk(
  "assessment/fetchAssessments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://a.aimshala.com/api/acetest/listing"
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An error occurred while fetching assessments");
    }
  }
);

// Create the assessment slice
const assessmentSlice = createSlice({
  name: "assessment",
  initialState,
  reducers: {
    clearAssessments: (state) => {
      state.assessments = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssessments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAssessments.fulfilled,
        (state, action: PayloadAction<Assessment[]>) => {
          state.loading = false;
          state.assessments = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchAssessments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearAssessments } = assessmentSlice.actions;
export default assessmentSlice.reducer;

// Selectors
export const selectAssessments = (state: { assessment: AssessmentState }) =>
  state.assessment.assessments;
export const selectAssessmentLoading = (state: {
  assessment: AssessmentState;
}) => state.assessment.loading;
export const selectAssessmentError = (state: { assessment: AssessmentState }) =>
  state.assessment.error;
