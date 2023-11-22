import React, { useEffect, useState } from 'react';

export default function PaginationComponent({ paginationOptions: { totalResults, page, limit }, onPagination: setState }){

    const [state, setPages] = useState({totalPages: 0 });
    const { totalPages } = state;

    useEffect(() => {
        if (totalResults === 0) return setPages({ totalPages: 0 });
        setPages((values) => {return {...values,totalPages: Math.ceil(totalResults / limit)}});
    }, [totalResults, limit]);

    const sizes = [
        '',
        'd-none d-sm-block',
        'd-none d-sm-block',
    ]

    const calcPages = () => {
        let buttons = [];
        let size = totalPages>1?2:1;
        size = totalPages>=2?2:1;
        
        buttons.push(
            <>
            <li key={`page_${1}`} onClick={()=>backPage()} className={`w-10 h-10 mx-1 inline-flex justify-center items-center text-[${page===1?'#fff':'#000'}] bg-[${page===1?'#62207E':'#CCCCCC'}] rounded-[100%] leading-[26px] cursor-pointer border border-[#eee] page-item ${sizes[1-1]}`}>
            <span disabled={page==1} className={`page-link ${page===1?'bg-light':''}`}>
                {'<'}
            </span>
        </li>
            <li key={`page_${1}`} onClick={()=>pageAtIndex(1)} className={`w-10 h-10 mx-1 inline-flex justify-center items-center text-[${page===1?'#fff':'#000'}] bg-[${page===1?'#62207E':'#CCCCCC'}] rounded-[100%] leading-[26px] cursor-pointer border border-[#eee] page-item ${sizes[1-1]}`}>
                <span disabled={page==1} className={`page-link ${page===1?'bg-light':''}`}>
                    1
                </span>
            </li>
             <li key={`page_${1}`} onClick={()=>nextPage()} className={`w-10 h-10 mx-1 inline-flex justify-center items-center text-[${page===1?'#fff':'#000'}] bg-[${page===1?'#62207E':'#CCCCCC'}] rounded-[100%] leading-[26px] cursor-pointer border border-[#eee] page-item ${sizes[1-1]}`}>
             <span disabled={page==1} className={`page-link ${page===1?'bg-light':''}`}>
                {">"}
             </span>
         </li>
         </>);

        if(totalPages<=3){

            for (let index = 2; index <= totalPages; index++) {
                buttons.push(
                    <li key={`page_${index}`} onClick={()=>pageAtIndex(index)} className={`w-10 h-10 mx-1 inline-flex justify-center items-center text-[${page===index?'#fff':'#000'}] bg-[${page===index?'#62207E':'#CCCCCC'}] rounded-[100%] leading-[26px] cursor-pointer border border-[#eee] page-item ${sizes[index-1]}`}>
                        <span disabled={page==index} className={`page-link ${page==index?'bg-light':''}`}>
                            {index}
                        </span>
                    </li>);
            }
        }

        if(totalPages>3){
            // buttons.push(<li key="ICON_MORE" className="page-item"><span className="page-link"><em className="icon ni ni-more-h" /></span></li>);
            for (let index = 2; index <= totalPages; index++) {
                buttons.push(
                <li key={`page_${index}`} onClick={()=>pageAtIndex(index)} className={`w-10 h-10 mx-1 inline-flex justify-center items-center text-[${page===index?'#fff':'#000'}] bg-[${page===index?'#62207E':'#CCCCCC'}] rounded-[100%] leading-[26px] cursor-pointer border border-[#eee] page-item ${sizes[index-1]}`}>
                    <span disabled={page==index} className={`page-link ${page==index?'bg-light':''}`}>
                        {index}
                    </span>
                </li>)
            }
        }
        return buttons;
    }

    const pageLinks = calcPages();

    const pageAtIndex = index => setState((prev)=>{return {...prev, page: index}});

    const backPage = () => {
        if (page>1) {
            setState((prev) => {return {...prev, page: (page-1) }});
        }else{
            alert("Estas en la primera página");
        }
    }

    const nextPage = () => {
        if (page<totalPages){
            setState((prev) => {return {...prev, page: (page+1) }});
        }else{
        }   
    }

    return <>
    {totalPages>0&&
        <div id='customScrollbar-2' className='py-2' style={{ overflowX: "auto" }}>
            <ul className="flex justify-end" style={{ minWidth: "max-content" }}>
                {pageLinks}
            </ul>
        </div>}
    </>
}
