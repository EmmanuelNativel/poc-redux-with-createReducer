import { createAction, nanoid } from "@reduxjs/toolkit";

export const sheetActions = {
  sheetAdded: createAction(
    "sheet/sheetAdded",
    function prepare(dashboardId: string) {
      return {
        payload: {
          dashboardId,
          sheet: {
            id: nanoid(),
            bgColor: "cyan",
            dashboardElementsIds: [],
          },
        },
      };
    }
  ),
};
