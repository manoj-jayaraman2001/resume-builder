import React from "react";
import { useState, useEffect } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { usePDF } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./preview.css";
import * as Resume from "../../index";
const PdfPreview = (props) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [Instance, update] = usePDF({
    document: props.Template,
  });
  const [url, setUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // const [loading, setLoading] = useState(true);
  function onDocumentLoadSuccess({ numPages }) {
    // setLoading(false);
    setNumPages(numPages);
    setPageNumber(1);
  }
  function handleLoadError() {
    // setLoading(false);
  }
  useEffect(() => {
    if (Instance.url) {
      setUrl(Instance.url);
    }
  }, [Instance]);
  const placeSpinner = {
    height: props.width + 150 ,
    width : props.width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div>
      
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={handleLoadError}
        noData={<div style={placeSpinner}><FontAwesomeIcon icon={faSpinner} spinPulse style={{fontSize: 60}}/></div>}
        loading={<div style={placeSpinner}><FontAwesomeIcon icon={faSpinner} spinPulse style={{fontSize: 60}}/></div>}
      >
        <Page pageNumber={pageNumber} width={props.width} size = 'A4' />
      </Document>
    </div>
  );
};

export default PdfPreview;
