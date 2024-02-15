import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '../common/Pagination';
import CONSTANTS from 'app/scripts/constants';
import PaginationIndia from '../common/PaginationIndia';

export default function ITBenchResumes({
    itbenchhotlist,
    list,
    list_india,
    india_list,
    country
}) {
    const [lists, setList] = useState();
    const [loading, setLoading] = useState(true);
    const [optionsPagination, setOptionsPagination] = useState({
        page: CONSTANTS.PAGINATION_INITIAL_PAGE,
        limit: CONSTANTS.PAGINATION_PAGE_BENCH_SIZE,
        totalResult: 0,
    });
    const { page, limit, total } = optionsPagination; 
    const loadCaseStudies = async () => {
        setLoading(true);
        setList([...list.slice((page - 1) * limit, page * limit)]);
        setOptionsPagination({
        ...optionsPagination,
        totalResults: list.length,
        });
        setLoading(false);
    };
    useEffect(() => {
        loadCaseStudies();
    }, [page, limit, total]);


    // const [listss, setListt] = useState(india_list);
    const [listss, setListt] = useState([]);
    const [loadingg, setLoadingg] = useState(true);
    const [optionsPaginationn, setOptionsPaginationn] = useState({
        pagee: CONSTANTS.PAGINATION_INITIAL_PAGE,
        limitt: CONSTANTS.PAGINATION_PAGE_BENCH_SIZE,
        totalResultt: 0,
    });
    const { pagee, limitt, totall } = optionsPaginationn; 
    const loadCaseStudiess = async () => {
        setLoadingg(true);
        setListt([...list_india.slice((pagee - 1) * limitt, pagee * limitt)]);
        setOptionsPaginationn({
        ...optionsPaginationn,
        totalResultts: list_india.length,
        });
        setLoadingg(false);
    };
    useEffect(() => {
        loadCaseStudiess();
    }, [pagee, limitt, totall]);


  return (
    <>
    <table className="text-center w-[100%] text-left rounded-[10px] overflow-hidden bg-[#F7F8FF] border-[1px] border-[#D9D9D9]">
        <thead className="rounded-[4px 4px 0px 0px] border-[1px] border-[#D9D9D9]">
            <tr>
                <th className={`p-[10px] font-sans font-[600] text-[#170F49] text-[16px]`}>S.No.</th>
                <th className={`p-[10px] font-sans font-[600] text-[#170F49] text-[16px]`}>Role Title/Skill</th>
                <th className={`p-[10px] font-sans font-[600] text-[#170F49] text-[16px]`}>Total Experience (Years)</th>
                <th className={`p-[10px] font-sans font-[600] text-[#170F49] text-[16px]`}>Current Location</th>
                <th className={`p-[10px] font-sans font-[600] text-[#170F49] text-[16px]`}>Relocation Preference</th>
                <th className={`p-[10px] font-sans font-[600] text-[#170F49] text-[16px]`}>Availability</th>
                <th className={`p-[10px] font-sans font-[600] text-[#170F49] text-[16px]`}>Contact</th>
            </tr>
        </thead>
        <tbody className="rounded-[0px 0px 4px 4px] ">
            {country && 
                (
                    <>
                        {country != "ID" && country != "IN" ? (
                            lists.map((item, index) => (
                                item?.attributes?.BenchData?.map((items, ind)=>(
                                    <tr
                                        className="hover:bg-[#FFFFFF] border-[1px] border-[#D9D9D9]"
                                        key={index}
                                    >
                                        <td 
                                            className="lca-table-td text-center"
                                        >{item?.id}</td>
                                        <td className="lca-table-td">{items?.Role_Title}</td>
                                        <td className="lca-table-td">{items?.Total_Experience}</td>
                                        <td className="lca-table-td">{items?.Current_Location}</td>
                                        <td className="lca-table-td">{items?.Relocation_Preference}</td>
                                        <td className="lca-table-td">{items?.Availability}</td>
                                        <td className="lca-table-td text-center cursor-pointer">
                                            <Link href={`mailto:naresh@vlinkinfo.com;marketing@vlinkinfo.com?subject=${`Bench Resource Requirement-${items?.Role_Title}`}`} className='group bg-[#F9F9F9] hover:bg-[#0050D5] inline-block rounded-[4px] px-2 py-1'>
                                                <svg className="mx-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className={`fill-[#0050D5] group-hover:fill-[#fff]`} d="M6.5 5C5.30653 5 4.16193 5.47411 3.31802 6.31802C2.47411 7.16193 2 8.30653 2 9.5V22.5C2 23.6935 2.47411 24.8381 3.31802 25.682C4.16193 26.5259 5.30653 27 6.5 27H25.5C26.6935 27 27.8381 26.5259 28.682 25.682C29.5259 24.8381 30 23.6935 30 22.5V9.5C30 8.30653 29.5259 7.16193 28.682 6.31802C27.8381 5.47411 26.6935 5 25.5 5H6.5ZM28 10.403L16 16.864L4 10.403V9.5C4 8.83696 4.26339 8.20107 4.73223 7.73223C5.20107 7.26339 5.83696 7 6.5 7H25.5C26.163 7 26.7989 7.26339 27.2678 7.73223C27.7366 8.20107 28 8.83696 28 9.5V10.403ZM4 12.674L15.526 18.881C15.6717 18.9594 15.8345 19.0005 16 19.0005C16.1655 19.0005 16.3283 18.9594 16.474 18.881L28 12.674V22.5C28 23.163 27.7366 23.7989 27.2678 24.2678C26.7989 24.7366 26.163 25 25.5 25H6.5C5.83696 25 5.20107 24.7366 4.73223 24.2678C4.26339 23.7989 4 23.163 4 22.5V12.674Z" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ))
                        ) 
                        : 
                        listss.map((item, index) => (
                            item?.attributes?.BenchData?.map((items, ind)=>(
                                <tr
                                    className="hover:bg-[#FFFFFF] border-[1px] border-[#D9D9D9]"
                                    key={index}
                                >
                                    <td 
                                        className="lca-table-td text-center"
                                    >{item?.id}</td>
                                    <td className="lca-table-td">{items?.Role_Title}</td>
                                    <td className="lca-table-td">{items?.Total_Experience}</td>
                                    <td className="lca-table-td">{items?.Current_Location}</td>
                                    <td className="lca-table-td">{items?.Relocation_Preference}</td>
                                    <td className="lca-table-td">{items?.Availability}</td>
                                    <td className="lca-table-td text-center cursor-pointer">
                                        <Link href={`mailto:naresh@vlinkinfo.com;marketing@vlinkinfo.com?subject=${`Bench Resource Requirement-${items?.Role_Title}`}`} className='group bg-[#F9F9F9] hover:bg-[#0050D5] inline-block rounded-[4px] px-2 py-1'>
                                            <svg className="mx-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className={`fill-[#0050D5] group-hover:fill-[#fff]`} d="M6.5 5C5.30653 5 4.16193 5.47411 3.31802 6.31802C2.47411 7.16193 2 8.30653 2 9.5V22.5C2 23.6935 2.47411 24.8381 3.31802 25.682C4.16193 26.5259 5.30653 27 6.5 27H25.5C26.6935 27 27.8381 26.5259 28.682 25.682C29.5259 24.8381 30 23.6935 30 22.5V9.5C30 8.30653 29.5259 7.16193 28.682 6.31802C27.8381 5.47411 26.6935 5 25.5 5H6.5ZM28 10.403L16 16.864L4 10.403V9.5C4 8.83696 4.26339 8.20107 4.73223 7.73223C5.20107 7.26339 5.83696 7 6.5 7H25.5C26.163 7 26.7989 7.26339 27.2678 7.73223C27.7366 8.20107 28 8.83696 28 9.5V10.403ZM4 12.674L15.526 18.881C15.6717 18.9594 15.8345 19.0005 16 19.0005C16.1655 19.0005 16.3283 18.9594 16.474 18.881L28 12.674V22.5C28 23.163 27.7366 23.7989 27.2678 24.2678C26.7989 24.7366 26.163 25 25.5 25H6.5C5.83696 25 5.20107 24.7366 4.73223 24.2678C4.26339 23.7989 4 23.163 4 22.5V12.674Z" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ))
                        }
                    </>
                )
            }
        </tbody>
    </table>
    {country != "ID" && country != "IN" 
    ? 
        (
            <Pagination
                loading={loading}
                paginationOptions={optionsPagination}
                onPagination={setOptionsPagination}
                className="my-6"
            />
        ) 
    : 
        (
            <PaginationIndia
                loading={loadingg}
                paginationOptions={optionsPaginationn}
                onPagination={setOptionsPaginationn}
                className="my-6"
            />
        )
    }
    
    </>
  )
}
