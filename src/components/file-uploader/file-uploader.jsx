import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../button/button";
import { IoCloseCircle } from "react-icons/io5";
import { toast } from "sonner";
import { FaPlus } from "react-icons/fa6";

const FileUploader = ({onFilesSelected, filesData, setFilesData}) => {
  const [files, setFiles] = useState([]);

  // Handle file drop
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      toast.error("Some files were rejected. Please upload valid image files.");
    }
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );

    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles, ...newFiles];
      onFilesSelected(updatedFiles); // ✅ Uses latest files
      return updatedFiles;
    });
    }, [onFilesSelected]);

  // React-Dropzone setup
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
      "image/webp": [".webp"],
    },
    multiple: true,
  });
  
  // Remove file preview URLs when unmounting
  React.useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

    // Remove a file from the list
    const removeFile = (index) => {
      const updatedFiles = files.filter((_, i) => i !== index);
      setFiles(updatedFiles);
      onFilesSelected(updatedFiles);
    };
  return (
    <div>
      {
        files.length > 0 ?
      (<div style={{ display: "flex", gap: "10px", marginTop: "10px", justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        {files.map((file, index) => (
          <div key={index} style={{width: '220px', display: 'flex', flexDirection: 'column', gap:'4px', alignItems: 'center', position: 'relative'}}>
            <img src={file.preview} alt="preview" style={{width: '200px', height: '200px', objectFit: 'cover'}} />
            <p style={{width: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{file.name}</p>
            <IoCloseCircle style={{width: '24px', height: '24px', position: 'absolute', top: '5px', right: '20px', color: '#fff', cursor: 'pointer'}} onClick={() => removeFile(index)} />
          </div>
        ))}
        <div
        {...getRootProps()}
        style={{
        alignSelf: 'end',
        border: "1px solid #333",
        padding: "12px",
        textAlign: "center",
        cursor: "pointer",
        borderRadius: '8px',
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
        }}
      >
        <input {...getInputProps()} />
        <FaPlus style={{width: '16px', height: '16px'}}/>
        <p style={{
            color: '#333',
            textAlign: "center",
            fontFamily: "Unitext Regular",
            fontSize: "1rem",
        }}>Add more</p>
      </div>
      </div>) :
      (<div
        {...getRootProps()}
        style={{
        alignSelf: 'stretch',
        border: "2px dashed #ccc",
        padding: "24px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        cursor: "pointer",
        gap: '24px',
        borderRadius: '8px',
        }}
      >
        <input {...getInputProps()} />
        <h3 style={{
            color: '#333',
            textAlign: "center",
            fontFamily: "Unitext Regular",
            fontSize: "1.5rem",
        }}>Drag image files to upload</h3>
        <p style={{
            color: '#333',
            textAlign: "center",
            fontFamily: "Unitext Regular",
            fontSize: "1rem",
        }}>or</p>
        <Button
            buttonType={{primaryBtn: false}}
        >Browse Files</Button>
        <p style={{
            color: '#333',
            textAlign: "center",
            fontFamily: "Unitext Regular",
            fontSize: "1rem",
        }}>Maximum file size: 100MB</p>
      </div>) 
    }
    </div>
  );
};

export default FileUploader;
