import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" })

export const addTodo = createAsyncThunk("addTodo", async (todoData) => {
    try {
        await api.post("/notes", todoData)
    } catch (error) {
        console.log(error)
    }
})
export const getTodo = createAsyncThunk("getTodo", async (todoData) => {
    try {
        const { data } = await api.get("/notes")
        return data
    } catch (error) {
        console.log(error)
    }
})