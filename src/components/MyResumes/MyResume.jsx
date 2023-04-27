import React from "react";
import "./MyResume.css";
import { useState, useEffect } from "react";
import { getResumes } from "../indexedDB";
import { Document, Page, pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { removeResume } from "../indexedDB";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResumePreview = (props) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [pdfUrl, setPdfUrl] = useState(null);

  const placeSpinner = {
    width: 180,
    height: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  useEffect(() => {
    const url = URL.createObjectURL(props.pdfData.blob);
    setPdfUrl(url);

    //  Clean up the URL object when the component unmounts
    return () => URL.revokeObjectURL(url);
  }, []);
  function openPdf() {
    window.open(pdfUrl, "_blank");
  }
  function deleteResume() {
    removeResume(props.pdfData.id);
    props.setData(() => {
      let newData = [...props.ResumeData];
      newData.splice(props.Index, 1);
      return newData;
    });
  }
  return (
    <div className="resume_component">
      <Document
        file={pdfUrl}
        noData={
          <div style={placeSpinner}>
            <FontAwesomeIcon
              icon={faSpinner}
              spinPulse
              style={{ fontSize: 40 }}
            />
          </div>
        }
        loading={
          <div style={placeSpinner}>
            <FontAwesomeIcon
              icon={faSpinner}
              spinPulse
              style={{ fontSize: 40 }}
            />
          </div>
        }
      >
        <Page pageNumber={1} width={170} onClick={openPdf} />
      </Document>
      <div className="resume_details">
        <div>
          <h5>{props.pdfData.id}</h5>
          <p>{props.pdfData.time}</p>
        </div>
        <div className="icons">
          <a
            href={pdfUrl}
            download={props.pdfData.id}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FontAwesomeIcon
              className="icon"
              icon={faCircleArrowDown}
              title="Download"
            />
          </a>

          <FontAwesomeIcon
            className="icon"
            icon={faTrashCan}
            title="Delete"
            onClick={deleteResume}
          />
        </div>
      </div>
    </div>
  );
};

const MyResumes = () => {
  const [ResumeData, setData] = useState(null);
  useEffect(() => {
    window.indexedDB.databases().then(databases => {
      if (databases.length !== 0){
        getResumes().then((data) => {
          setData(data);
        });
      }
    })

    
  }, []);

  const ResumeDataState = () => {
    if (ResumeData === null) return false;
    else if (ResumeData.length === 0) return false;
    else true;
  };

  const Resumes =
    ResumeData && ResumeData.length ? (
      ResumeData.map((resume, Index) => {
        return (
          <ResumePreview
            key={Index}
            pdfData={resume}
            ResumeData={ResumeData}
            setData={setData}
          />
        );
      })
    ) : (
      <NoResume />
    );

  return <div className="myResume">{Resumes}</div>;
};

const NoResume = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");

    console.log("exected");
  }
  return (
    <div style={{textAlign: 'center', marginTop: '10%' }}>
      <p
        style={{
          fontSize: "2em",
          opacity: 0.4,
          fontFamily: "Karla, sans-serif",
          fontWeight: 600,
          marginBottom: '3%'
        }}
      >
        No Resume to Display Here
      </p>
      <Button onClick={handleClick} variant = "contained" sx = {{backgroundColor: '#f02d3a' }}>
        Create Resume
      </Button>
    </div>
  );
};
export default MyResumes;
