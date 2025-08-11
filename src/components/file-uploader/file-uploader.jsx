import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import Button from "../button/button";
import { IoCloseCircle } from "react-icons/io5";
import { toast } from "sonner";
import { FaPlus } from "react-icons/fa6";
import imageCompression from "browser-image-compression";
import { ClipLoader } from "react-spinners";

// Style constants
const styles = {
  previewContainer: {
    display: "flex",
    gap: "10px",
    width: "100%",
    height: "80%",
    flexWrap: "wrap",
  },
  fileItem: {
    width: "40%",
    display: "flex",
    gap: "4px",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  fileName: {
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: "0px",
    fontFamily: "Unitext Regular",
    fontSize: "1rem",
  },
  removeIcon: {
    width: "24px",
    height: "24px",
    position: "absolute",
    top: "5px",
    right: "5%",
    color: "#fff",
    cursor: "pointer",
  },
  dropAreaEmpty: {
    alignSelf: "stretch",
    border: "2px dashed #ccc",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    gap: "24px",
    borderRadius: "8px",
  },
  dropAreaWithFiles: {
    alignSelf: "end",
    padding: "12px",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "8px",
    display: "flex",
    gap: "4px",
    alignItems: "center",
  },
  dragActive: {
    borderColor: "#007bff",
    backgroundColor: "#eaf4ff",
  },
};

const FileUploader = ({ onFilesSelected, showUI = true }) => {
  const btnRef = useRef(null);
  const [showLoader, setShowLoader] = useState(false);
  const [filesData, setFilesData] = useState([]);

  const onDrop = useCallback(
    async (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles?.length > 0) {
        toast.error(
          "Some files were rejected. Please upload valid image files."
        );
      }

      const MAX_FILES = 10;

      if (btnRef.current) btnRef.current.disabled = true;
      setShowLoader(true);

      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        };

        const compressedFiles = await Promise.all(
          acceptedFiles.map((file) => imageCompression(file, options))
        );

        const newFiles = compressedFiles
          .filter(
            (newFile) => !filesData.some((file) => file.name === newFile.name)
          )
          .map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          );

        const totalFiles = filesData.length + newFiles.length;
        if (totalFiles > MAX_FILES) {
          toast.error(`You can only upload a maximum of ${MAX_FILES} files.`);
          return;
        }
        onFilesSelected(newFiles);

        setFilesData((prevFiles) => {
          return [...prevFiles, ...newFiles];
        });
        // // For the
        // setImageFiles((prevFiles) => ([
        //   ...prevFiles, ...newFiles
        // ]))
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while processing files.");
      } finally {
        setShowLoader(false);
        if (btnRef.current) btnRef.current.disabled = false;
      }
    },
    [filesData, onFilesSelected, setFilesData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
      "image/webp": [".webp"],
    },
    multiple: true,
  });

  const removeFile = (index) => {
    URL.revokeObjectURL(filesData[index].preview);
    const updatedFiles = filesData.filter((_, i) => i !== index);
    setFilesData(updatedFiles);
    onFilesSelected(updatedFiles);
  };

  return (
    <div>
      {filesData.length > 0 ? (
        <div style={styles.previewContainer}>
          {filesData.map((file, index) => (
            <div key={index} style={styles.fileItem}>
              <img
                src={file.preview}
                alt="preview"
                style={styles.imagePreview}
              />
              <p style={styles.fileName}>{file.name}</p>
              <p style={styles.fileName}>{(file.size / 1024).toFixed(2)} KB</p>
              <IoCloseCircle
                style={styles.removeIcon}
                onClick={() => removeFile(index)}
              />
            </div>
          ))}
          {showUI && (
            <div
              {...getRootProps()}
              style={{
                ...styles.dropAreaWithFiles,
                ...(isDragActive ? styles.dragActive : {}),
              }}
            >
              <input {...getInputProps()} />
              <Button
                btnRef={btnRef}
                buttonType={{ primaryBtn: false }}
                type="button"
              >
                {showLoader ? (
                  <>
                    Adding image... <ClipLoader size={25} color="#333" />
                  </>
                ) : (
                  <>
                    <FaPlus style={{ width: "16px", height: "16px" }} /> Add
                    More
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div
          {...getRootProps()}
          style={{
            ...styles.dropAreaEmpty,
            ...(isDragActive ? styles.dragActive : {}),
          }}
        >
          <input {...getInputProps()} />
          <h3
            style={{
              color: "#333",
              fontFamily: "Unitext Regular",
              fontSize: "1.5rem",
            }}
          >
            Drag image files to upload
          </h3>
          <p
            style={{
              color: "#333",
              fontFamily: "Unitext Regular",
              fontSize: "1rem",
            }}
          >
            or
          </p>
          <Button
            btnRef={btnRef}
            buttonType={{ primaryBtn: false }}
            type="button"
          >
            {showLoader ? (
              <>
                Adding image... <ClipLoader size={25} color="#333" />
              </>
            ) : (
              "Browse Files"
            )}
          </Button>
          <p
            style={{
              color: "#333",
              fontFamily: "Unitext Regular",
              fontSize: "1rem",
            }}
          >
            Maximum file size: 100MB
          </p>
        </div>
      )}
    </div>
  );
};

FileUploader.propTypes = {
  onFilesSelected: PropTypes.func.isRequired,
  filesData: PropTypes.array,
  setFilesData: PropTypes.func,
};

FileUploader.defaultProps = {
  filesData: [],
};

export default FileUploader;
