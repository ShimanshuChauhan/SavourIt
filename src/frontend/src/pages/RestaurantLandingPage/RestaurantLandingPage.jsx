import Footer from "../../components/Footer";
import bannerimage from "../../assets/Restau.jpg";
import { DishCard } from "../../pages/LandingPage/components/DishesCard";
import { Nav } from "../../nav";

const RestaurentLandingPage = () => {
  return (
    <>
      <Nav />
      <img className="h-[70vh] w-[100vw] object-cover" src={bannerimage}></img>
      <div className="flex ml-12">
        <div className="p-5">
          <h1 className="text-7xl">Restaurent Name</h1>
          <p className="mt-8 text-2xl">Restaurent Address</p>
          <p className="mt-8 text-2xl">Contact Number</p>
          <p className="mt-8 text-2xl">Email Address</p>
          <div>
            <p className="mt-8 text-2xl flex items-center">
              Rating:&nbsp;
              <div className="rating rating-lg">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </p>
          </div>
          <p className="mt-8 text-2xl">Menu</p>
          <br />
          <div className="flex gap-8">
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RestaurentLandingPage;
