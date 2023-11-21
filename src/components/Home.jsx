function Home({ handleStart }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5">
      <div className="w-75">
        <div className="text-center">
          <h1>Welcome to Resu-Maid!</h1>
        </div>
        <div className="my-3 text-center">
          <p>
            Whether you have a career in mind, or just need a place to start,
            Resu-Maid is here to help craft a rich and visually appealing
            document.
          </p>
        </div>
        <div className="my-5 text-center">
          <h2 className="">How To:</h2>
          <p>
            Simply click &quot;Start Building&quot; button below to get started!
            The application will guide you through each section outlining
            required (*) and optional fields. Navigation buttons will be present
            on each section, note that you may be unable to proceed if certain
            criteria has not been met.If you feel that you need to go backwards
            and make some updates you can do so at any point.
          </p>
        </div>
        <div className="my-5 text-center">
          <h2 className="">Disclaimer:</h2>
          <p>
            To protect any personal or sensitive data, no attempts to save data
            outside of the final PDF download exist. We recommend setting aside
            15-20 minutes to craft and design your document. If the webpage is
            refreshed or reloaded at any point during the process all data will
            be lost and you will need to start over.
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-primary"
            data-section="General Information"
            onClick={handleStart}
          >
            Start Building
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
