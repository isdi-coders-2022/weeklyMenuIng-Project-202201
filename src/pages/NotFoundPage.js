import Infoblock from "../components/Infoblock/Infoblock";

const NotFoundPage = () => {
  return (
    <>
      <main className="main">
        <Infoblock text="404!!" />
        <h1 className="not-found">
          Haiouuu!!! Nothing here. No food, no beer, no page!
        </h1>
      </main>
    </>
  );
};

export default NotFoundPage;
