import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface dragdrop {
  label: String | any;
}
function Drag(props: dragdrop) {
  const { label } = props;

  const onDrop = useCallback(() => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-sm text-text-primary-50">
          Drop the files here{" "}
          <span className="text-text-secondary-50">...</span>
        </p>
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
export default Drag;
