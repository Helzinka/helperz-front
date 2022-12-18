import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: { user: {}, announces: [] },
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		sign: (state, action) => {
			state.value.user = action.payload
		},
		addUsersAnnounces: (state, action) => {
			state.value.announces.push(action.payload)
		},
		removeUsersAnnounces: (state, action) => {
			state.value.announces = state.value.announces.fitler((e) => e._id != action.payload._id)
		},
	},
})

export const { sign, addUsersAnnounces, removeUsersAnnounces } = userSlice.actions
export default userSlice.reducer
