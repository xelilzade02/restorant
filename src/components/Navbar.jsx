import React, {forwardRef, useRef} from 'react'
import { AiOutlineShoppingCart, AiOutlineLine,AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { BsTelephoneInbound } from 'react-icons/bs'
import { Link } from 'react-scroll'




const Navbar = () => {
  const closeBtnRef = forwardRef()
  const overlayRef = useRef()
  const searchBtnRef = useRef()
  
  
  const closeOverlay = e => {
    const kliklenenElement =e.target

    if(kliklenenElement.classlist.contains('overlay-close')){
       overlayRef.current.classlist.remove('active')
    }
    
  }

  const openOverlay = e =>{
    const kliklenenElement = e.target

    if(kliklenenElement.classlist.contains('btn')) {
        overlayRef.current.classlist.add('active')
    }
    // alert('hello')
  }
  
    return (
    <>

    <div className="overlay " ref={overlayRef}>
    <AiOutlineClose className='overlay-close'  ref={closeBtnRef} onClick={closeOverlay} />
        <input type="text" className='overlay-search' placeholder='Search' />

    </div>
    <div className='Navbar-header container-fluid'>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="./LOGO.png" alt="" /></a>
            <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link activeClass="active" to="Menu" spy={true} smooth={true} offset={50} duration={500}>Menu</Link>
                    </li>
                    <li class="nav-item">
                        <Link activeClass="active" to="History" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                    </li>
                    <li class="nav-item">
                    <Link activeClass="active" to="galery" spy={true} smooth={true} offset={50} duration={500} >Booking</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#"><AiOutlineShoppingCart /></a>
                    </li>
                    <li class="nav-item">
                        <a href="#"> <img src="./line.png" alt="" /> </a>
                    </li>
                    <li class="nav-item">
                        <p className='telefon text-white'><BsTelephoneInbound /> +999-888-76-54 <br /> Contact us for eservations</p>

                    </li>



                </ul>
                {/* <AiOutlineSearch  className='s-icon' ref={searchBtnRef} onClick={openOverlay} size={25}/> */}
                    <button class="btn btn-outline-warning text-white  " ref={searchBtnRef} onClick={openOverlay}>Search</button>
                
            </div>
        </div>
    </nav>
    <div className="header">
        <p>Welcome to <br /> Our restaurant</p>
        <p>< AiOutlineLine size={35} /> THE HOUSE OF THE BEST FOOD < AiOutlineLine size={35}/></p>
        <button>View Menu</button>
    </div>

</div>

</>

  )
}

export default Navbar