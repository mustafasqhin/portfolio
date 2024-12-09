import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[30px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
               
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">@ 2024 Mustafa Şahin. Tüm hakları saklıdır.</span>    
                       
                    </p>
                        <span className="text-[15px] ml-[6px]">Aixfloria A.Ş</span>    
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Footer