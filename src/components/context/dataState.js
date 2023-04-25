
export const reducers = {
  updateProfilePic: function (url) {
    setData((value) => ({ ...value, profilePic: url }));
  },
  updatePersonalData: function (event) {
    let element = event.target;
    setData((value) => {
      return { ...value, [element.id]: element.value };
    });
  },

  updateExp: function (event, action, number) {
    let element = event.target;
    if (action === "add") {
      setExp((value) => {
        return [
          ...value,
          {
            id: value.length + 1,
            jobTitle: "",
            companyName: "",
            start: "",
            end: "",
            Role: "",
          },
        ];
      });
    } else if (action === "onChange") {
      setExp((value) => {
        let expArr = [...value];
        expArr[number - 1][element.id] = element.value;
        return expArr;
      });
    } else if (action === "remove") {
      setExp((value) => {
        let expArr = [...value];
        expArr.pop();
        return expArr;
      });
    }
  },

  updateEducation: function (event) {
    let element = event.target;
    setEducation((value) => {
      return { ...value, [element.id]: element.value };
    });
  },

  updateSkills: function (event, action) {
    if (action === "onchange") {
      setSkills((value) => {
        console.log(event.target.id);
        const arr = [...value];
        arr[Number(event.target.id)] = event.target.value;
        return arr;
      });
    } else if (action === "add") {
      setSkills((value) => {
        const arr = [...value];
        arr.push("");
        return arr;
      });
    } else if (action === "remove") {
      setSkills((value) => {
        const arr = [...value];
        arr.pop();
        return arr;
      });
    }
  },
};
