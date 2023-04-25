import React from "react";
import { Document, Page, StyleSheet, Text, Font } from "@react-pdf/renderer";
import { Image } from "@react-pdf/renderer";
import { ImageComponent } from "./Template1";
import raleway from "../assets/fonts/Raleway-Regular.ttf";
Font.register({
  family: "raleway",
  src: raleway,
});
const styles = StyleSheet.create({
  header: {
    padding: "13px",
    backgroundColor: "#c19ee0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
    fontFamily: "raleway",
  },
  name: {
    color: "white",
    fontSize: 24,
  },
  role: {
    fontSize: "13px",
    color: "white",
  },
  contact: {
    width: "100%",
    fontSize: 11,
    padding: 10,
    lineHeight: "1.3px",
  },
  page: {
    padding: 0,
    flexDirection: "column",
    backgroundColor: "#dec9e9",
    lineHeight: 1.5,
    fontFamily: "raleway",
  },
  avatar: {
    marginTop: 0,
    width: "70px",
    height: "70px",
  },
  text: {
    fontSize: 12,
    padding: 10,
    lineHeight: "1.5px",
    fontFamily: "raleway",
  },
  subtitle: {
    fontSize: 16,
    color: "#6247aa",
    margin: "5px 0",
  },
  years: {
    fontSize: 15,
    display: "flex",
    gap: "7px",
    padding: "0 10px",
    flexDirection: "column",
  },
  res: {
    display: "flex",
    flexDirection: "row",
    gap: "3px",
    fontSize: "12px",
  },
});

const Template4 = (props) => {
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
              alignItems: "flex-start",
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
        <Text>
          {Index + 1 + " "}. {value.jobTitle}, {value.companyName} -{" "}
          {value.start} to {value.end}
        </Text>
        <Text style={{ fontSize: 15, color: "#6247aa", marginTop: 7 }}>
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
  const skills = keySkills.map((value, Index) => {
    return (
      <Text key={Index}>
        {Index + 1}. {value}
      </Text>
    );
  });
  return (
    <Document>
      <Page style={styles.page}>
        <div style={styles.header}>
          <ImageComponent
            firstName={personaldata.firstName}
            lastName={personaldata.lastName}
            profilePic={personaldata.profilePic}
            color={"#c19ee0"}
          />
          <div>
            <Text
              style={styles.name}
            >{`${personaldata.firstName} ${personaldata.lastName}`}</Text>
            <Text style={styles.role}>Frontend Developer</Text>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div
            style={{
              width: "40%",
              backgroundColor: "#d2b7e5",
              height: "100vh",
            }}
          >
            <div style={styles.contact}>
              <Text style={styles.subtitle}>Address: </Text>
              <Text>{personaldata.address}</Text>
              <Text>{personaldata.city}</Text>
              <Text>{personaldata.state}</Text>
              <Text>{personaldata.mobileNo}</Text>
              <Text>{personaldata.email}</Text>
            </div>
            <div>
              <div style={{ padding: 10 }}>
                <Text style={styles.subtitle}>Education: </Text>
                <div style={{ paddingBottom: 7 }}>
                  <Text style={{ fontSize: 14 }}>{education.university}</Text>
                  <Text style={{ fontSize: 12 }}>
                    {education.startYear} to {education.endYear}
                  </Text>
                  <Text style={{ fontSize: 12, marginTop: 5 }}>
                    {education.type}
                  </Text>
                  <Text style={{ fontSize: 12, marginTop: 5 }}>
                    {education.degree}
                  </Text>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                padding: 10,
              }}
            >
              <Text style={styles.subtitle}>Key Kills: </Text>
              <div style={{ fontSize: 12 }}>{skills}</div>
            </div>
          </div>
          <div style={{ width: "70%" }}>
            <div style={{ padding: "0 10px" }}>
              <Text style={styles.subtitle}>Summary:</Text>
              <Text style={styles.text}>{personaldata.Objective}</Text>
            </div>

            <div style={{ backgroundColor: "", padding: "0 20px 0 10px" }}>
              <Text style={styles.subtitle}>Professional Experience:</Text>
              <div style={styles.years}>{rolesArray}</div>
            </div>
          </div>
        </div>
      </Page>
    </Document>
  );
};

export default Template4;
