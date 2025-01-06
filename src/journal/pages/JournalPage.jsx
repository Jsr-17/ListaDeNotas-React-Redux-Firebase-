import { IconButton, Typography } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/journalLayout";
import { NothingSelectedView } from "../view/NothingSelectedView";
import { NoteView } from "../view/NoteView";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <NothingSelectedView></NothingSelectedView>
        {/* <NoteView></NoteView> */}
        <IconButton
          size="large"
          sx={{
            color: "white",
            backdropFilter: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }}></AddOutlined>
        </IconButton>
      </JournalLayout>
    </>
  );
};
