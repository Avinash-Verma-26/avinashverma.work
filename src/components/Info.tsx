const Info = () => {
  return (
    <div className="w-full flex flex-col gap-4 pt-5 font-secondary">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/avinash-v-58a7a512a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-zinc-300 px-3 py-1 hover:border-brand transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="/cv.pdf"
            download
            className="text-sm border border-brand text-brand px-3 py-1 hover:bg-brand hover:text-white! transition-colors duration-200"
          >
            Download PDF
          </a>
        </div>
      </div>

      <iframe
        src="/cv.pdf"
        className="w-full border border-zinc-300"
        style={{ height: "80vh" }}
        title="Avinash Verma CV"
      />
    </div>
  );
};

export default Info;
