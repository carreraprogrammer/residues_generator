import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

