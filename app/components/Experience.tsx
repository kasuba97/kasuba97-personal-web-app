function Experience() {
  return (
    <div className="flex flex-col lg:flex-row space-x-2">
      <p>work</p>
      <div className="flex flex-col lg:flex-row space-x-2">
        <a
          href="https://soundwork.io"
          target="_blank"
          className="hover:bg-slate-400"
        >
          (paused dev) soundwork
        </a>

        <a href="/#" className="hover:bg-slate-400">
          (internship) techsprung
        </a>
      </div>
    </div>
  );
}

export default Experience;
