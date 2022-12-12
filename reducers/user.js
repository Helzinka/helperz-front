import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: { email: "", password: "" },
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		signIn: (state, action) => {
			state.value.email = action.payload
		},
	},
})

export const { signIn } = userSlice.actions
export default userSlice.reducer
