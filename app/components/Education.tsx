function Education() {
  const education = [
    "self-taught",
    "ackee blockchain bootcamp",
    "devnest bootcamp",
    "the coding school",
    "UoPeople",
  ];
  return (
    <div className="flex flex-col lg:flex-row space-x-2">
      <p>education</p>
      {education.map((school, index) => {
        return (
          <div key={index} className="flex flex-col lg:flex-row">
            <p>{school}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
