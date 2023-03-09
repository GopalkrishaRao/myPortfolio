import './home.css';
import Projects from '../projects/Projects'


export default function Home() {
  return (
    <>
  <div className="hero min-h-screen bg-base-200" id='home'>
  <div className=" hero-content flex-col lg:flex-row-reverse">
    <div className='image-container'>
    <img src={require("../../images/gk.png")} className="profile_pic max-w-sm rounded-[50%] shadow-2xl " />
    </div>
    <div>
      <h1 className="text-5xl font-bold">
        Gopalkrishna Rao
      </h1>
      <p className="py-6">
      I'm a newbie to the world of coding and programming with a Master's degree in Life Sciences.
        Learning and polishing coding skills by regular practice to gain command over the subject with a dream of pursuing a carrier in the field of programming and development
      </p>
    </div>
  </div>
</div>
   </>
  )
};
