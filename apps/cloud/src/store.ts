import { currentUserReducer, teamReducer } from "@flowagent-public/user-data"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    team: teamReducer,
  },
})

export type FLOWAGENTRootState = ReturnType<typeof store.getState>
