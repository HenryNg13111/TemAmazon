import "./styles.css";
import Walmartlogo from "./assets/Walmart-Transparent-File.png";
import Amazonlogo from "./assets/Amazon_logo.png";
import Applelogo from "./assets/Apple_logo_black.svg";
import Msilogo from "./assets/Msi_Logo.png";

function BrandTable() {
  return (
    <div className=" border-y-[0.5px] border-solid border-gray-200 my-1 p-6 pb-12">
      <h2 className="text-2xl font-bold m-auto text-center">Explore some Brands!</h2>
      <div className="flex align-middle mt-3">
        <div className="w-48 flex align-middle">
          <img src={Msilogo} alt="MSI Logo" className="max-w-44 m-auto" />
        </div>
        <div className="w-48 flex align-middle">
          <img src={Walmartlogo} alt="Walmart Logo" className="max-w-44 m-auto" />
        </div>
        <div className="w-48 flex align-middle">
          <img src={Amazonlogo} alt="Amazon Logo" className="max-w-44 m-auto" />
        </div>
        <div className="w-48 flex align-middle">
          <img src={Applelogo} alt="Apple Logo" className="max-w-16 m-auto" />
        </div>
      </div>
    </div>
  )
}

export default BrandTable