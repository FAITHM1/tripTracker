import { Link } from "react-router-dom";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
// import styled, { css } from "styled-components";
function Home() {
  // const Container = styled.div`
  //   border: 1px solid red;
  //   position: relative;
  //   overflow: hidden;
  //   width: 300px;
  //   height: 150px;
  // `;
  const CarouselUI = ({ children }) => <div className="caro">{children}</div>;
  const Carousel = makeCarousel(CarouselUI);
  return (
    <div className="home">
      <section className="homeText">
        <div>
          <h3>Where are you going next?</h3>
          <h4>Track your next trip</h4>
        </div>
        <Link to="/new">
          <i class="fas fa-map-marker"></i>
        </Link>
      </section>
      <section>
        <Carousel defaultWait={3000}>
          <Slide right>
            <div>
              <img src="https://i.imgur.com/pljjzSJ.png" />
            </div>
          </Slide>
          <Slide right>
            <div>
              <img src="https://www.gannett-cdn.com/presto/2021/06/10/NDAC/f96b7814-2483-4a6e-adf1-8ac29fed10a0-Road_trip.jpg?width=2560" />
            </div>
          </Slide>
          <Slide right>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/1200px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg" />
            </div>
          </Slide>
          <Slide right>
            <div>
              <img src="https://static.toiimg.com/photo/81270853.cms" />
            </div>
          </Slide>
        </Carousel>
      </section>
    </div>
  );
}
export default Home;
