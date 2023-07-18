import { createReducer } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Dashboard } from "../../types/types";
import { dashboardActions } from "./actions";
import { sheetActions } from "../sheet/actions";

export type DashboardState = Record<string, Dashboard>;

const initialState: DashboardState = {};

export const dashboardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(dashboardActions.dashboardAdded.type, (state, action) => {
      console.log("test4 dashboardAdded", action);
      state[action.payload.dashboard.id] = action.payload.dashboard;
    })
    .addCase(sheetActions.sheetAdded.type, (state, action) => {
      console.log("test4 sheetAdded from Dashboard", action);
      state[action.payload.dashboardId].sheetsIds.push(action.payload.sheet.id);
    });
});

export const selectDashboards = (state: RootState) =>
  state.dashboardRoot.present.dashboards;

export default dashboardReducer;
