import { createReducer } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Sheet } from "../../types/types";
import { sheetActions } from "./actions";
import { dashboardActions } from "../dashboard/actions";
import { dashboardElementActions } from "../dashboardElement/actions";

export type SheetState = Record<string, Sheet>;

const initialState: SheetState = {};

export const sheetdReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(sheetActions.sheetAdded.type, (state, action) => {
      console.log("test4 sheetdReducer", action);
      state[action.payload.sheet.id] = action.payload.sheet;
    })
    .addCase(dashboardActions.dashboardAdded.type, (state, action) => {
      console.log("test4 dashboardAdded from Sheet", action);
      const sheetId = action.payload.dashboard.sheetsIds[0];
      state[sheetId] = {
        id: sheetId,
        bgColor: "cyan",
        dashboardElementsIds: [],
      };
    })
    .addCase(
      dashboardElementActions.dashboardElementAdded.type,
      (state, action) => {
        console.log("test4 dashboardElementAdded from Sheet", action);
        const sheetId = action.payload.sheetId;
        state[sheetId].dashboardElementsIds.push(
          action.payload.dashboardElement.id
        );
      }
    );
});

export const selectSheets = (state: RootState) =>
  state.dashboardRoot.present.sheets;
export const selectSheetById = (state: RootState, sheetId: string) =>
  state.dashboardRoot.present.sheets[sheetId];

export default sheetdReducer;
