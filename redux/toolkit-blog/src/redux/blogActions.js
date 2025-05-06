import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:5000' })

export const getBlogs = createAsyncThunk(
    "getBlogs",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/articles")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const addBlog = createAsyncThunk(
    "addBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/articles", blogData)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const deleteBlog = createAsyncThunk(
    "deleteBlog",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete("/articles/" + id)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })