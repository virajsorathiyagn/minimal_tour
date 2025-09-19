import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Link } from "@mui/material";

export default function FileUploadBox() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("Files uploaded:", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: "2px dashed #ccc",
        borderRadius: "12px",
        p: 5,
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: isDragActive ? "#f9f9f9" : "#f6f7f8",
        transition: "background-color 0.2s ease-in-out",
      }}
    >
      <input {...getInputProps()} />

      {/* {Image} */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
          alt="Upload"
          width={60}
        />
      </Box>

      {/* Main Title */}
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Drop or select files
      </Typography>

      {/* Subtitle */}
      <Typography variant="body2" sx={{ mt: 1, color: "grey.600" }}>
        Drag files here, or{" "}
        <Link underline="hover" sx={{ cursor: "pointer" }}>
          browse
        </Link>{" "}
        your device.
      </Typography>
    </Box>
  );
}
