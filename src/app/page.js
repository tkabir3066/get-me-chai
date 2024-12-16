export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 text-white h-[44vh] ">
        <div className="text-5xl font-bold flex gap-2 justify-center items-center">
          Buy Me a Chai{" "}
          <span>
            <img width={88} src="./tea.gif" alt="" />
          </span>
        </div>
        <p>
          A Crowdfunding platform for creators. Get funded by your fans and
          followers. Start now
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white opacity-5 h-1"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">
          Your fans can buy you a chai
        </h2>
        <div className="flex justify-around gap-5">
          <div className="item flex flex-col justify-center items-center space-y-3 text-white">
            <img
              className="bg-slate-400 rounded-full p-3"
              width={88}
              src="./man.gif"
              alt=""
            />
            <p>Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item flex flex-col justify-center items-center space-y-3 text-white">
            <img
              className="bg-slate-400 rounded-full p-3"
              width={88}
              src="./coin.gif"
              alt=""
            />
            <p>Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item flex flex-col justify-center items-center space-y-3 text-white">
            <img
              className="bg-slate-400 rounded-full p-3"
              width={88}
              src="./group.gif"
              alt=""
            />
            <p>Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white opacity-5 h-1"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bNcp4re6J5s?si=EXcpVx4ZsBWCWxAS"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
