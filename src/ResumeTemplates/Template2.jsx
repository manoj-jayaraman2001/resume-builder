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
    backgroundColor: "#da1e37",
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
    marginLeft: "auto",
    color: "white",
    fontSize: 11,
    lineHeight: "1.3px",
  },
  page: {
    padding: 0,
    flexDirection: "column",
    backgroundColor: "#fff0f3",
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
    color: "#da1e37",
    margin: "5px 0",
  },
  years: {
    fontSize: 15,
    display: "flex",
    gap: "7px",
    flexDirection: "column",
  },
  res: {
    display: "flex",
    flexDirection: "row",
    gap: "3px",
    fontSize: "12px",
  },
});

const Template2 = (props) => {
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
        <Text>
          {Index + 1 + " "}. {value.jobTitle}, {value.companyName} -{" "}
          {value.start} to {value.end}
        </Text>
        <Text style={{ fontSize: 15, color: "#da1e37", marginTop: 7 }}>
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
        <div style={styles.header}>
          <ImageComponent
              firstName={personaldata.firstName}
              lastName={personaldata.lastName}
              profilePic={personaldata.profilePic}
              color  = {'#da1e37'}
            />
          <div>
            <Text
              style={styles.name}
            >{`${personaldata.firstName} ${personaldata.lastName}`}</Text>
            <Text style={styles.role}>Frontend Developer</Text>
          </div>
          <div style={styles.contact}>
            <Text>{personaldata.address}</Text>
            <Text>{personaldata.city}</Text>
            <Text>{personaldata.state}</Text>
            <Text>{personaldata.mobileNo}</Text>
            <Text>{personaldata.email}</Text>
          </div>
        </div>
        <div>
          <div style={{ padding: "10px" }}>
            <Text style={styles.subtitle}>Summary:</Text>
            <Text style={styles.text}>{personaldata.Objective}</Text>
          </div>

          <div style={{ backgroundColor: "#fae0e4", padding: 10 }}>
            <Text style={styles.subtitle}>Professional Experience:</Text>
            <div style={styles.years}>{rolesArray}</div>
          </div>
          <div>
            <div style = {{padding: 10}}>
              <Text style={styles.subtitle}>Education: </Text>
              <div style={{ paddingBottom: 7 }}>
                <Text style={{ fontSize: 15 }}>
                  {education.university} - {education.startYear} to{" "}
                  {education.endYear}
                </Text>
                <Text style={{ fontSize: 12, marginTop: 5 }}>
                  {education.type}, {education.degree}
                </Text>
              </div>
            </div>
            <div style={{ backgroundColor: "#fae0e4", padding: 10 }}>
              <Text style={styles.subtitle}>Key Kills: </Text>
              <Text style={{ fontSize: 12 }}>{keySkills.join(", ")} .</Text>
            </div>
          </div>
        </div>
      </Page>
    </Document>
  );
};

export default Template2;
