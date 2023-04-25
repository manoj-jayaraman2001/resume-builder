import Images from "../templates/images";
const SelectTemplates = (props) => {
  const SelectTemplate = {
    padding: "1em",
    backgroundColor: "whitesmoke",
    boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    fontFamily: "Karla, sans-serif",
    borderRadius: "8px",
  };

  function handleClick(event) {
    props.setTemplate(`Template${event.target.id}`);
  }

  const selectedTemplate = Number(sessionStorage.getItem(`selectedTemplate`));
  const allTemplates = Images();
  let imgArray = [...allTemplates];
  const remainingTemplates = imgArray.map((value, Index) => {
    return (
      <img
        key={Index}
        src={value}
        alt={`Template${Index + 1}`}
        width={100}
        height={150}
        id={Index + 1}
        onClick={handleClick}
        style={{ boxShadow: SelectTemplate.boxShadow }}
      />
    );
  });
  remainingTemplates.splice(selectedTemplate - 1, 1);

  return (
    <div style={SelectTemplate}>
      <h3>Choose a template to View Changes</h3>
      <hr />
      <div>
        <h4>Selected template:</h4>
        <br />
        <img
          src={allTemplates[selectedTemplate - 1]}
          width={100}
          height={150}
          alt="Template"
          style={{ boxShadow: SelectTemplate.boxShadow }}
        />
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {remainingTemplates}
      </div>
    </div>
  );
};

export default SelectTemplates;
