import React from "react";
import { Document, Page, StyleSheet, Text, Font } from "@react-pdf/renderer";
import { Image } from "@react-pdf/renderer";
import raleway from "../assets/fonts/Raleway-Regular.ttf";
import { ImageComponent } from "./Template1";
Font.register({
  family: "raleway",
  src: raleway,
});
const styles = StyleSheet.create({
  header: {
    padding: "13px",
    backgroundColor: "#6c757d",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    fontFamily: "raleway",
  },
  name: {
    color: "white",
    fontSize: 24,
    marginTop: 0,
  },
  role: {
    fontSize: "13px",
    color: "white",
    margin: "0 auto",
  },
  contact: {
    color: "white",
    fontSize: 11,
    lineHeight: "1.3px",
  },
  page: {
    padding: 0,
    flexDirection: "column",
    backgroundColor: "#f8f9fa",
    lineHeight: 1.5,
    fontFamily: "raleway",
  },
  avatar: {
    marginTop: 0,
    width: "65px",
    height: "65px",
  },
  text: {
    fontSize: 12,
    padding: "0 10px",
    lineHeight: "1.5px",
    fontFamily: "raleway",
    margin: "0 auto",
  },
  subtitle: {
    fontSize: 14,
    color: "#495057",
    margin: "5px auto",
  },
  years: {
    fontSize: 14,
    display: "flex",
    gap: "7px",
    flexDirection: "column",
  },
  res: {
    display: "flex",
    flexDirection: "row",
    gap: "3px",
    fontSize: "12px",
    margin: "0 auto",
    padding: 10,
  },
});

const Template3 = (props) => {
  const personaldata = props.personaldata;
  const workExp = props.workExp;
  const education = props.education;
  const keySkills = props.keySkills;
  const rolesArray = workExp.map((value, Index) => {
    const roles = value.Role.map((role, Index) => {
      return (
        <div key={Index}>
          <div
            style={{
              display: "flex",
              gap: "3px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>{Index + 1}. </Text>
            <Text>{role}</Text>
          </div>
        </div>
      );
    });

    return (
      <div key={Index}>
        <Text style={{ margin: "0 auto" }}>
          {Index + 1 + " "}. {value.jobTitle}, {value.companyName} -{" "}
          {value.start} to {value.end}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#495057",
            marginTop: 7,
            margin: "0 auto",
          }}
        >
          Key Roles:
        </Text>
        <div style={styles.res}>
          <div>{roles}</div>
        </div>
      </div>
    );
  });

  const roles = rolesArray.map((value, Index) => {
    return (
      <div style={styles.res} key={Index}>
        <Text>{Index + 1}.</Text>
        <Text> {`${value}`}</Text>
      </div>
    );
  });
  return (
    <Document>
      <Page style={styles.page}>
        <div>
          <div style={styles.header}>
            <ImageComponent
              firstName={personaldata.firstName}
              lastName={personaldata.lastName}
              profilePic={personaldata.profilePic}
              color={"#6c757d"}
            />
            <div>
              <Text
                style={styles.name}
              >{`${personaldata.firstName} ${personaldata.lastName}`}</Text>
              <Text style={styles.role}>{personaldata.professionalTitle}</Text>
            </div>
            <div style={styles.contact}>
              <Text>
                Address: {personaldata.address}, {personaldata.city},{" "}
                {personaldata.state}
              </Text>
              <Text>
                Mobile No: {personaldata.mobileNo}, Email: {personaldata.email}
              </Text>
            </div>
          </div>
        </div>
        <div>
          <div style={{ padding: "0 10px" }}>
            <Text style={styles.subtitle}>Summary:</Text>
            <Text style={styles.text}>{personaldata.Objective}</Text>
          </div>

          <div style={{ backgroundColor: "#dee2e6", padding: "0 10px" }}>
            <Text style={styles.subtitle}>Professional Experience:</Text>
            <div style={styles.years}>{rolesArray}</div>
          </div>
          <div>
            <div style={{ padding: "0 10px" }}>
              <Text style={styles.subtitle}>Education: </Text>
              <div style={{ paddingBottom: 7, margin: "0 auto" }}>
                <Text style={{ fontSize: 14 }}>
                  {education.university} - {education.startYear} to{" "}
                  {education.endYear}
                </Text>
                <Text style={{ fontSize: 12, marginTop: 5 }}>
                  {education.type}, {education.degree}
                </Text>
              </div>
            </div>
            <div style={{ backgroundColor: "#dee2e6", padding: "0 10px" }}>
              <Text style={styles.subtitle}>Key Kills: </Text>
              <Text style={{ fontSize: 12, margin: "0 auto" }}>
                {keySkills.join(", ")} .
              </Text>
            </div>
          </div>
        </div>
      </Page>
    </Document>
  );
};

export default Template3;
