import Slider from "@/Component/Home/Slider";
import About from "@/Component/Home/About";
import Servises from "@/Component/Home/Servises";
import Time from "@/Component/Home/Time";
import Feture_product from "@/Component/Home/Feture_product";

export default function Home() {
  return (
    <>
      <section className="w-[90%] px-5 mx-auto my-10">
        <Slider></Slider>
      </section>

      <section className="w-[90%] px-5 mx-auto my-10">
        <About></About>
      </section>
      <Servises />
      <Time/>
      <Feture_product/>

    </>
  );
}
