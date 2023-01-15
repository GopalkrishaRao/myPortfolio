export default function Home() {
  return (
    <>
    <div className="flex justify-around mt-8">
    <div>
      <h1>Gopalkrishna Rao</h1>
    </div>
    <div>
      <img src={require("../images/gk.png")}  alt="profile_pic" className="rounded-[50%] h-72 w-72"/>
    </div>
    {/* <div>
        <h1>About</h1>
        <p></p>
    </div>
    <div>
      <h1>Projects</h1>
    </div> */}
    </div>
   </>
  )
};
