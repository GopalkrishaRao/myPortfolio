import './contact.css'
export default function Contact() {

  return (
    <>
     <div className="blank_container  h-[100px] lg:h-[70px]" id='contact'>
    </div>
    <div className='btnimg h-[400px] w-[400px] ' >
        <img src={require("../../images/gk.png")}/>
    </div>
      <div>Contact Informaton</div>
      <h1>E-mail: 
        <span>hrgkrao[at]gmail[dot]com</span>
      </h1>
      <h1>LinkedIn: 
        <span>
          <a target={'_blank'} href='https://www.linkedin.com/in/gopalkrishna-rao-199b99265/'>
          &#128279; Gopalkrishna Rao
          </a>
        </span>
      </h1>
      <h1>GitHub:
        <span>
          <a target={'_blank'} href='https://github.com/GopalkrishaRao'>
            &#128279; GK Rao
          </a>
        </span>
      </h1>
      
      
    </>
    )
}
