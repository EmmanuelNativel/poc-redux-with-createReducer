import { createReducer } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { DashboardElement } from "../../types/types";
import { dashboardElementActions } from "./actions";

export type DashboardElementState = Record<string, DashboardElement>;

const initialState: DashboardElementState = {};

export const dashboardElementReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(
      dashboardElementActions.dashboardElementAdded.type,
      (state, action) => {
        console.log("test4 dashboardElementReducer", action);
        state[action.payload.dashboardElement.id] =
          action.payload.dashboardElement;
      }
    );
  }
);

export const selectDashboardElements = (state: RootState) =>
  state.dashboardRoot.present.dashboardElements;

export const selectDashboardElementById = (
  state: RootState,
  dashboardElementId: string
) => state.dashboardRoot.present.dashboardElements[dashboardElementId];

export default dashboardElementReducer;
