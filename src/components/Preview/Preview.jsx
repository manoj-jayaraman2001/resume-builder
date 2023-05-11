import PdfPreview from "./PdfPreview";
import { UserContext } from "../../App";
import { useState, useContext, useMemo } from "react";
import { save } from "../indexedDB";
import * as Resume from "../../index";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";
import Modal from "./Modal";
const Preview = (props) => {
  const context = useContext(UserContext);

  //file name for saving and downloading

  const [pdfBlob, setBlob] = useState(null);
  const [selectedFont, setFont] = useState("");

  // passing template key to get complete selected template

  const [localState, setlocalState] = useState(
    `Template${sessionStorage.getItem("selectedTemplate")}`
  );
  const FinalTemplate = Resume[localState];
  // getting Resume Data for PDF from session storage
  const personaldata = JSON.parse(sessionStorage.getItem("personaldata"));
  const workExp = JSON.parse(sessionStorage.getItem("workExp"));
  const education = JSON.parse(sessionStorage.getItem("education"));
  const keySkills = JSON.parse(sessionStorage.getItem("keySkills"));

  const memoizedTemplate = (
    <FinalTemplate
      personaldata={personaldata}
      workExp={workExp}
      education={education}
      keySkills={keySkills}
    />
  );

  return (
    <div
      className="previewPage"
      style={{
        display: "flex",
        margin: "1.5% auto",
        gap: 50,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div>{/* <SelectTemplates setTemplate={setlocalState} /> */}</div>
      <div className="preview">
        <PdfPreview
          Template={
            <FinalTemplate
              personaldata={personaldata}
              workExp={workExp}
              education={education}
              keySkills={keySkills}
            />
          }
          width={400}
        />
      </div>
      <div className="downloadBox">
        <DownloadBox selectedTemplate={memoizedTemplate} />
      </div>
    </div>
  );
};

const DownloadBox = (props) => {
  const [fileName, setName] = useState("");
  const [modal, setOpen] = useState("none");

  function handleModal() {
    setOpen("block");
    setTimeout(() => {
      setOpen("none");
    }, 2000);
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <>
      <div className="modal" style={{ display: modal }}>
        <Modal />
      </div>

      <TextField
        label="File Name"
        error={false}
        size="small"
        onChange={handleChange}
        helperText={fileName === "" ? "give a file name to save/download" : ""}
      />
      <hr />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <BlobProvider document={props.selectedTemplate}>
          {({ blob, url, loading, error }) => {
            if (blob) {
              return (
                <Button
                  variant="contained"
                  onClick={() => {
                    save(blob, fileName);
                    handleModal();
                  }}
                  disabled={fileName === "" ? true : false}
                >
                  Save
                </Button>
              );
            }
          }}
        </BlobProvider>

        <PDFDownloadLink document={props.selectedTemplate} fileName={fileName}>
          {({ blob, url, loading, error }) => (
            <Button
              variant="contained"
              disabled={fileName === "" ? true : false}
            >
              Download
            </Button>
          )}
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default Preview;
