import { Button, Label, Select } from 'flowbite-react';
import React, { Fragment, useState } from 'react';
import ButtonModal from '../common/ButtonModal';
import CloudIcon from "./../../../public/icons/cloud-icons.png";

const ModalSubscribeNewsletter =({isOpen = false, setIsOpen})=> {
   

    return (<Fragment>
                <ButtonModal
                    isOpen={isOpen}
                    toggle={setIsOpen}
                    buttonText="newsletter"
                    header={{
                        className: "bg-[#f5f7f8]",
                        content: <span className='text-[#002856]'>Subscribe to our newsletter & stay updated</span>,
                    }}
                    body={{
                        content: (<div className="space-y-6 px-3">
                                    <div className="flex flex-col space-y-2">
                                        <input placeholder='Your Name*' type="email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <input placeholder='Phone Number*' type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <input placeholder='Email Address*' type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <label className='text-blue-700'>If using multiple keywords, insert ‘or’ or ‘and’ between words for best results (e.g. Java or Oracle)</label>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <input placeholder='Select Job Designation*' type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div id="content" className="flex flex-col space-y-2">
                                        <div className='flex flex-row mb-3'>
                                            <div className='flex-1 mr-3'>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="countries" value="LOCATION"/>
                                                </div>
                                                <Select id="countries" required={true}>
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>France</option>
                                                    <option>Germany</option>
                                                </Select>
                                            </div>
                                            <div className='flex-1 ml-3'>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="countries" value=" ." className='text-white'/>
                                                </div>
                                                <input placeholder='Enter Zip Code' className="h-[42px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                                            </div>
                                        </div>
                                        <div className='flex flex-row mb-3'>
                                            <div className='flex flex-1 flex-row mr-3'>
                                                <div className='flex-1'>
                                                    <Select 
                                                        multiple 
                                                        id="customScrollbar" 
                                                        required={true} 
                                                        style={{ minHeight: "180px"}}>
                                                        {[  
                                                            "Select  City (Choose Multiple)",
                                                            "British Columbia", 
                                                            "New Brunswic", 
                                                            "Nunavut", 
                                                            "Yukon", 
                                                            "Arizona"
                                                        ].map((item, i)=>
                                                            <option disabled={i==0} key={i} style={{ 
                                                                height: "35px", 
                                                                padding: '10px'
                                                            }}>{item}</option>
                                                        )}
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className='flex flex-1 flex-col ml-3'>
                                                <div className='flex-1 mb-5'>
                                                    <input placeholder='Select With In Miles' className="h-[42px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                                                </div>
                                                <div className='flex-1'>
                                                    <Select 
                                                        multiple 
                                                        id="customScrollbar" 
                                                        required={true} 
                                                        style={{ minHeight: "180px"}}>
                                                        {[  
                                                            "Frequency (Choose Multiple)",
                                                            "Daily", 
                                                            "Weekly",
                                                            "Monthly",
                                                            "Quarterly",
                                                            "Yearly",
                                                        ].map((item, i)=>
                                                            <option disabled={i==0} key={i} style={{ 
                                                                height: "35px", 
                                                                padding: '10px'
                                                            }}>{item}</option>
                                                        )}
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                    }}
                    footer={{
                        className: "border-none",
                        content: (<div className="flex-1 justify-center px-8">
                                    <Button onClick={()=>setIsOpen(false)} size={"lg"} className={`bg-[#62207E] px-4 py-2 w-full hover:bg-[#62207E]`}>
                                        SUBMIT
                                    </Button>
                                </div>)
                    }}
                />
            </Fragment>

        );
}

export default ModalSubscribeNewsletter;