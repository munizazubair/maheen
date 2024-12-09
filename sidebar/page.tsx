import Image from "next/image"
import icon1 from "/public/clarity_grid-view-solid.png"
import icon2 from "/public/fa-solid_list.png"
import starfilled from "/public/ant-design_star-filled.png"
import starnotfilled from "/public/ant-design_star-filled (1).png"
import logos from "/public/Group 35.png"
import check from "/public/uil_check.png"
import check2 from "/public/uil_check2.png"
import check3 from "/public/uil_check3.png"
import check4 from "/public/uil_check4.png"
import check5 from "/public/uil_check5.png"
import check6 from "/public/uil_check 6.png"
import check7 from "/public/uil_check7.png"
import search from "/public/uil_search.png"

interface ProductInterface {
    name: string,
    image:string,
}
export default function Sidebar() {
    const productData: ProductInterface[] = [
        {name:"Accumsan tincidunt" ,image: "/Rectangle 32.png"},
        {name: "In nulla", image: "/Rectangle 33.png"},
        {name: "Vel sem", image: "/Rectangle 32 (1).png"},
        {name: "Porttitor cum", image: "/Rectangle 32 (2).png"},
        {name: "Nunc in", image: "/Rectangle 32 (3).png"},
        {name: "Vitae facilisis", image: "/Rectangle 32 (4).png"},
        {name: "Curabitur lectus", image: "/Rectangle 32 (5).png"}
    ] 
    function stars (){

        return(
            <div className="flex items-center">
            <Image className="h-[12px] w-[12px]" width={13.25} height={13.25} src={starfilled} alt="star filled"></Image>
            <Image className="h-[12px] w-[12px]" width={13.25} height={13.25}  src={starfilled} alt="star filled"></Image>
            <Image className="h-[12px] w-[12px]" width={13.25} height={13.25} src={starfilled} alt="star filled"></Image>
            <Image className="h-[12px] w-[12px]" width={13.25} height={13.25}  src={starfilled} alt="star filled"></Image>
            <Image className="h-[12px] w-[12px]" width={13.25} height={13.25}  src={starnotfilled} alt="star not filled"></Image>
            </div>
        )
    }
    return(
        <div className="bg-white ">

        <div className="lg:h-[286px] h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
            <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
                <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">Shop List</h1>
                <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">Home . Pages <span className="text-[#FB2E86]">. Shop Left Sidebar</span></p>
            </div>

        </div>

        <div className="lg:h-[44px] h-[35px] md:h-[40px] xl:w-[1171px] flex lg:flex-row flex-col gap-3 lg:gap-0 justify-around ">
            <div className="pl-2">
                <h1 className="text-[#151875] lg:text-[22px] text-[14px] md:text-[18px] font-semibold">Ecommerce Acceories & Fashion item </h1>
                <p className="text-[#8A8FB9] lg:text[12px] text-[8px] md:text[10px]">About 9,620 results (0.62 seconds)</p>
            </div>

            <div className="flex items-center lg:gap-4  gap-2 justify-center lg:justify-end ">
                <div className="flex lg:gap-2 gap-1">
                    <h3 className="lg:text-[16px] text-[8px] md:text-[14px] text-[#3F509E]">Per Page:</h3>
                    <div className="lg:h-[25px] lg:w-[55px] w-[15px] h-[10px] md:h-[18px] md:w-[35px] border-[1px] border-[#E7E6EF]"></div>
                </div>
                <div className=" flex lg:gap-2 gap-1">
                <h3 className="lg:text-[16px] text-[8px]  md:text-[14px] text-[#3F509E]">Sort By:</h3>
                    <select name="sorts" id="sorts" className=" text-[#8A8FB9] border-[#E7E6EF] lg:text-[12px] text-[6px] md:text-[12px] lg:h-[28px] h-[13px] w-[30px] md:h-[20px] md:w-[28px] lg:w-[98px] border-[1px] flex items-center justify-center">
                        <option value="Best Match">Best Match</option>
                        <option value="Best Offers">Best Offers</option>
                    </select>
                </div>
                <div className="flex items-center justify-center lg:gap-2 gap-1">
                    <h3 className="lg:text-[16px] text-[8px] md:text-[14px] text-[#3F509E]">View:</h3>
                    <div className="flex items-center justify-center lg:gap-1.5 gap-1">
                        <div><Image src={icon1} alt="icon1"></Image></div>
                        <div><Image src={icon2} alt="icon2"></Image></div>
                    </div>
                </div>
                <div className="lg:h-[30px] lg:w-[162px] h-[12px] w-[20px] md:h-[23px] md:w-[115px] border-[1px] border-[#E7E6EF]"></div>
                            </div>
        </div>
<div className="flex justify-center lg:mt-24 mt-16 ">
        
        <div className="hidden md:flex flex-col gap-8 lg:w-[160px]">
            <div className="flex flex-col gap-3">
                <h1 className="text-[#151875] lg:text-[20px] border-b-2 border-black lg:w-[120px] xl:w-[138px] lg:h-[30px] font-semibold">Product Brand</h1>
                <div className="text-[#7E81A2] lg:text-[16px] flex flex-col gap-2">
                    <div className="flex gap-1 items-center "><Image height={16} width={16}  src={check} alt="check"></Image><p>Coaster Furniture</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16}  src={check} alt="check"></Image><p>Fusion Dot High Fashion</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16}  src={check2} alt="check2"></Image><p>Unique Furnitture Restor</p></div>
                    <div className="flex gap-1  items-center "><Image  height={16} width={16} src={check} alt="check"></Image><p>Dream Furnitture Flipping</p></div>
                    <div className="flex gap-1  items-center "><Image  height={16} width={16}  src={check} alt="check"></Image><p>Young Repurposed</p></div>
                    <div className="flex  gap-1  items-center"><Image  height={16} width={16} src={check} alt="check"></Image><p>Green DIY furniture</p></div>

                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-[#151875] lg:text-[20px] border-b-2 border-black lg:w-[120px] xl:w-[141px] lg:h-[30px] font-semibold">Discount Offer</h1>
                <div className="text-[#7E81A2] lg:text-[16px] flex flex-col gap-2">
                    <div className="flex gap-1  items-center"><Image height={16} width={16} src={check3} alt="check"></Image><p>20% Cashback</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check3} alt="check"></Image><p>5% Cashback Offer</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check3} alt="check2"></Image><p>25% Discount Offer</p></div>

                </div>
            </div>


            <div className="flex flex-col gap-3">
                <h1 className="text-[#151875] lg:text-[20px] border-b-2 border-black lg:w-[100px] xl:w-[114px] lg:h-[30px] font-semibold">Rating Item</h1>
                <div className="text-black lg:text-[12px] flex flex-col gap-2 font-semibold">
                    <div className="flex gap-1  items-center"><Image height={16} width={16} src={check4} alt="check"></Image>{stars()}<p>(2341)</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check5} alt="check"></Image>{stars()}<p>(1726)</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check4} alt="check2"></Image>{stars()}<p>(258)</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check4} alt="check2"></Image>{stars()}<p>(25)</p></div>

                    
                </div>
            </div>
            
            <div className="flex flex-col gap-3">
                <h1 className="text-[#151875] lg:text-[20px] border-b-2 border-black lg:w-[104px] lg:h-[30px] font-semibold">Categories</h1>
                <div className="text-[#7E81A2] lg:text-[16px] flex flex-col gap-2">
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check6} alt="check"></Image><p>Prestashop</p></div>
                    <div className="flex gap-1   items-center"><Image height={16} width={16} src={check6} alt="check"></Image><p>Magento</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check7} alt="check"></Image><p>Bigcommerce</p></div>
                    <div className="flex gap-1   items-center"><Image height={16} width={16} src={check6} alt="check"></Image><p>osCommerce</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check6} alt="check"></Image><p>3dcart</p></div>
                    <div className="flex  gap-1  items-center "><Image height={16} width={16} src={check6} alt="check"></Image><p>Bags</p></div>
                    <div className="flex  gap-1  items-center "><div className="lg:h-[16px] lg:w-[16px]"></div><p>Accessories</p></div>
                    <div className="flex  gap-1  items-center "><div className="lg:h-[16px] lg:w-[16px]"></div><p>Jewellery</p></div>
                    <div className="flex  gap-1  items-center"><Image height={16} width={16} src={check6} alt="check"></Image><p>Watches</p></div>

                </div>
            </div>

<div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
                <h1 className="text-[#151875] lg:text-[20px] border-b-2 border-black lg:w-[105px] lg:h-[30px] font-semibold">Price Filter</h1>
                <div className="text-[#7E81A2] lg:text-[16px] flex flex-col gap-2">
                    <div className="flex gap-1  items-center"><Image height={16} width={16} src={check6} alt="check"></Image><p>$0.00 - $150.00</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check6} alt="check"></Image><p>$150.00 - $350.00</p></div>
                    <div className="flex gap-1  items-center "><Image height={16} width={16} src={check7} alt="check"></Image><p>$150.00 - $504.00</p></div>
                    <div className="flex gap-1 items-center  "><Image height={16} width={16} src={check6} alt="check"></Image><p>$450.00 +</p></div>
                    
                </div>
            </div>
            
            <div className="flex border-[#BCBDDB] border-[1px] lg:h-[31px] lg:w-[203px] items-center pl-2 rounded-[3px]">
                <input className="lg:text-[12px] text-[#1518751A]" type="search" placeholder="$10.00 - 20000$"/><Image className="lg:h-[16px] lg:w-[16px]" src={search} alt="search logo" ></Image>
            </div>

            </div>


            <div className="flex flex-col gap-3">
                <h1 className="text-[#151875] lg:text-[20px] border-b-2 border-black lg:w-[138px] lg:h-[30px] font-semibold">Filter By Color</h1>
                <div className="text-[#7E81A2] lg:text-[15px] grid grid-cols-3 gap-2">
                <div className="flex items-center gap-1"><div className="lg:h-[14px] lg:w-[14px] rounded-full bg-[#5E37FF]"></div><p>Blue</p></div>
                <div className="flex items-center gap-1"><div className="lg:h-[14px] lg:w-[14px] rounded-full bg-[#FF9437]"></div><p>Orange</p></div>
                <div className="flex items-center gap-1"><div className="lg:h-[14px] lg:w-[14px] rounded-full bg-[#FFBF95]"></div><p>Brown</p></div>
                <div className="flex items-center gap-1"><div className="lg:h-[14px] lg:w-[14px] rounded-full bg-[#33D221]"></div><p>Green</p></div>
                <div className="flex items-center gap-1"><div className="lg:h-[14px] lg:w-[14px] rounded-full bg-[#E248FF]"></div><p>Purple</p></div>
                <div className="flex items-center gap-1"><div className="lg:h-[14px] lg:w-[14px] rounded-full bg-[#26CBFF]"></div><p>Sky</p></div>

                </div>
            </div>
        </div>


        <div className="flex flex-col justify-center items-center ">

            <div>{(productData.map((item) => (
                <div className="lg:h-[254px] h-[250px] xl:w-[1141px]  lg:w-[921px] w-[78%] flex flex-col lg:flex-row gap-3 lg:gap-4 items-center justify-center ml-6">
                    <div><Image className="h-[140px] w-[240px]" width={313} height={217} src={item.image} alt={item.name}></Image></div>
                    <div className="flex flex-col lg:gap-3 gap-0.5">
                        <div className="flex items-center lg:gap-6 gap-3">
                            <h1 className="text-[#111C85] lg:text-[19px]  text-[12px] md:text-[14px]  font-semibold">{item.name}</h1>
                            <div className="flex items-center justify-center lg:gap-1 gap-0.5">
                                <div className="lg:h-[12.15px] lg:w-[12.15px] w-[8px] h-[8px] rounded-full bg-[#DE9034]"></div>
                                <div className="lg:h-[12.15px] lg:w-[12.15px] w-[8px] h-[8px] rounded-full bg-[#E60584]"></div>
                                <div className="lg:h-[12.15px] lg:w-[12.15px] w-[8px] h-[8px] rounded-full bg-[#5E37FF]"></div>
                                </div>                        
                            </div>
                            <div className="flex lg:gap-4 gap-2 items-center">
                                <div className="flex lg:text-[15px] text-[10px] md:text-[13px] gap-3"><p className="text-[#111C85]">$26.00</p><p className="text-[#FF2AAA]">$52.00</p></div>
                                <div className="flex gap-0.5 lg:gap-1">
                                    <Image className="h-[12px] w-[12px]" width={13.25} height={13.25} src={starfilled} alt="star filled"></Image>
                                    <Image className="h-[12px] w-[12px]" width={13.25} height={13.25}  src={starfilled} alt="star filled"></Image>
                                    <Image className="h-[12px] w-[12px]" width={13.25} height={13.25} src={starfilled} alt="star filled"></Image>
                                    <Image className="h-[12px] w-[12px]" width={13.25} height={13.25}  src={starfilled} alt="star filled"></Image>
                                    <Image className="h-[12px] w-[12px]" width={13.25} height={13.25}  src={starnotfilled} alt="star not filled"></Image>
                                    </div>
                            </div>
                            <p className="xl:text-[18px] lg:text-[15px] text-[10px] md:text-[13px] text-[#9295AA] lg:h-[46px] lg:w-[391px] xl:w-[591px] w-[455]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <div><Image className="h-[30px] w-[70px]" src={logos} height={34} width={144} alt="logos"></Image></div>
                    </div>
                </div>
            )))}</div>
        </div>
        </div>
        </div>
    )
}