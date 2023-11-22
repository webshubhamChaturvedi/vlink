const Tools = ({ item ,index }) => {
    return (
        <div key={index} className="sm:col-span-1 col-span-2 bg-[#ffffff] py-4 px-6 rounded-[15px] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.13)]">
        <h4 className="font-sans text-[25px] font-[600] text-[#000000] mb-5">{item?.title} </h4>
        <ul>
            {item?.section8_detail && item?.section8_detail.map((tools,index)=>{
                return(
                    <li key={index} className="inline-flex pr-3 pb-3 font-sans text-[14px] font-[400]"><img src="/img/dataAnalytics/circle-check.svg" alt="Vlink Circle" className="mr-2"/>{tools?.title}</li>
                )
            })}
</ul>
    </div>
    );
  };
  
  export default Tools;
  