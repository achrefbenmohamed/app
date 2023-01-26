import { Carousel } from "react-bootstrap"
const Home=()=>{
    return(
        <div className="imaghom">  
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/M/MV5BNWEyOThlZTAtMzExMy00NDBhLTk4Y2QtMDg3OTRkNzgyNjEyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://asianwiki.com/images/8/82/Jung-E-p2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQamrFccb2WvWTaMEI0Jt5n6gWIavlCP68MvuqYj8rWQDaDbOM4OEQPnXwa6sX_Wl70W32VPtltaW-ct1On4XJ9yefsf8mLF_vAwcCNiJ7hdEwng7C4C2IifNhVQK69ahS0V2mcRCVVk_J5_BbaQ0STCe.jpg?r=9bd"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
        </div>
    )
}

export default Home