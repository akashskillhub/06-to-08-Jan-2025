import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/notes" })

export const createTodo = createAsyncThunk("createTodo", async todoData => {
    try {
        await api.post("/", todoData)
    } catch (error) {
        console.log(error)
    }
})
export const readTodo = createAsyncThunk("readTodo", async () => {
    try {
        const { data } = await api.get("/")
        return data // to save in reduxStore
    } catch (error) {
        console.log(error)
    }
})
export const deleteTodo = createAsyncThunk("deleteTodo", async id => {
    try {
        await api.delete("/" + id)
    } catch (error) {
        console.log(error)
    }
})