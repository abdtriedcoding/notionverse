import NextTopLoader from "nextjs-toploader";

const TopLoaderBar = () => {
  return (
    <>
      <NextTopLoader
        color="#D67BFF"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
      />
    </>
  );
};

export default TopLoaderBar;
