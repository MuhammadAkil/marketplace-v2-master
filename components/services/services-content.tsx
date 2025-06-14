"use client"

import { useState } from "react"
import { Badge, Filter } from 'lucide-react'
import * as Switch from '@radix-ui/react-switch'
import Image from "next/image"

interface Service {
    id: string
    title: string
    status: "Not Yet Published" | "Publishing" | "Hidden"
    price: number
    orders: number
    isActive: boolean
}

const services: Service[] = [
    {
        id: "1",
        title: "I can complete an announcer-stylet",
        status: "Not Yet Published",
        price: 200,
        orders: 15,
        isActive: true,
    },
    {
        id: "2",
        title: "I can complete an announcer-stylet",
        status: "Not Yet Published",
        price: 200,
        orders: 15,
        isActive: false,
    },
    {
        id: "3",
        title: "I can complete an announcer-stylet",
        status: "Publishing",
        price: 200,
        orders: 15,
        isActive: true,
    },
    {
        id: "4",
        title: "I can complete an announcer-stylet",
        status: "Publishing",
        price: 200,
        orders: 15,
        isActive: false,
    },
    {
        id: "5",
        title: "I can complete an announcer-stylet",
        status: "Hidden",
        price: 200,
        orders: 15,
        isActive: true,
    },
    {
        id: "6",
        title: "I can complete an announcer-stylet",
        status: "Hidden",
        price: 200,
        orders: 15,
        isActive: false,
    },
    {
        id: "7",
        title: "I can complete an announcer-stylet",
        status: "Hidden",
        price: 200,
        orders: 15,
        isActive: true,
    },
    {
        id: "8",
        title: "I can complete an announcer-stylet",
        status: "Hidden",
        price: 200,
        orders: 15,
        isActive: false,
    },
]

export function ServicesContent() {
    const [isChangeMode, setIsChangeMode] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
    const [servicesState, setServicesState] = useState(services)
    const [flashId, setFlashId] = useState(null);


    const handleDeleteClick = (id: string) => {
        setSelectedServiceId(id)
        setShowDeleteModal(true)
    }

    const handleDeleteConfirm = () => {
        if (selectedServiceId) {
            setServicesState(servicesState.filter((s) => s.id !== selectedServiceId))
            console.log(`Deleting service with id: ${selectedServiceId}`)
            setShowDeleteModal(false)
            setSelectedServiceId(null)
        }
    }

    const handleCancelDelete = () => {
        setShowDeleteModal(false)
        setSelectedServiceId(null)
    }
    const handleClick = (id: any) => {
        setFlashId(id);
        setSelectedCardId(id);

        setTimeout(() => {
            setFlashId(null);
        }, 1000);
    };



    const handleToggleActive = (id: string, checked: boolean) => {
        setServicesState(servicesState.map((s) =>
            s.id === id ? { ...s, isActive: checked } : s
        ))
    }

    return (
			<div className="mt-12 space-b-3">
				{/* Header */}
				<div className="flex items-center justify-between">
					<h1 className="text-lg font-medium leading-8 text-gray-800">My Services</h1>
                <button className="border rounded-lg" onClick={() => setIsChangeMode(!isChangeMode)}>
						<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 8C0 3.58172 3.58172 0 8 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H8C3.58172 36 0 32.4183 0 28V8Z" fill="#F5F7FA" />
							<path
								d="M10.5 22.5H15.75V24H10.5V22.5ZM10.5 17.25H17.25V18.75H10.5V17.25ZM10.5 12H25.5V13.5H10.5V12ZM24.5055 18.7687L25.3725 18.4755L26.1225 19.7745L25.4355 20.3783C25.522 20.7882 25.522 21.2118 25.4355 21.6217L26.1225 22.2255L25.3725 23.5245L24.5055 23.2313C24.198 23.5087 23.832 23.7225 23.4293 23.8538L23.25 24.75H21.75L21.57 23.853C21.1719 23.7229 20.8056 23.5109 20.4945 23.2305L19.6275 23.5245L18.8775 22.2255L19.5645 21.6217C19.478 21.2118 19.478 20.7882 19.5645 20.3783L18.8775 19.7745L19.6275 18.4755L20.4945 18.7687C20.802 18.4912 21.168 18.2775 21.5707 18.1462L21.75 17.25H23.25L23.43 18.147C23.832 18.2775 24.198 18.492 24.5055 18.7695V18.7687ZM22.5 22.5C22.8978 22.5 23.2794 22.342 23.5607 22.0607C23.842 21.7794 24 21.3978 24 21C24 20.6022 23.842 20.2206 23.5607 19.9393C23.2794 19.658 22.8978 19.5 22.5 19.5C22.1022 19.5 21.7206 19.658 21.4393 19.9393C21.158 20.2206 21 20.6022 21 21C21 21.3978 21.158 21.7794 21.4393 22.0607C21.7206 22.342 22.1022 22.5 22.5 22.5Z"
								fill="#525866"
							/>
						</svg>
					</button>
				</div>
				<hr className="my-5 border-t-2 border-gray-200" />

				{/* Services List */}
				<div className="space-y-3">
					{servicesState.map((service) => (
                        <div key={service.id}
                            onClick={() => handleClick(service.id)} className={`rounded-lg pe-6 hover:bg-gray-100 transform transition-all duration-500 ${flashId === service.id ? "bg-blue-100" : "bg-white"}`}
                        >
                            <div className="flex items-center justify-between space-x-3 mb-6">
								{/* Service Image */}
								<div className="flex-shrink-0">
                                    <Image width={148} height={83} src="/images/my-service.jpg" alt="Preview" className="rounded-xl object-cover" />
								</div>

								{/* Service Info */}
                                <div className="flex-1 flex-col gap-4">
                                    <h3 className="font-medium text-[#0E121B] text-[20px] leading-7 mb-4">{service.title}</h3>
                                    <span className="text-[#525866] text-center bg-[#F2F5F8] font-medium px-2 text-[12px] leading-4 rounded-lg py-1">{service.status}</span>
								</div>

								<div className="flex items-center gap-6">
									{/* Price */}
                                    <div className="text-center flex flex-col gap-2 min-w-[80px]">
                                        <div className="font-normal leading-6 h-[24px] text-[#0E121B] text-[16px]">¥{service.price}</div>
                                        <div className="text-[12px] font-normal leading-4 text-[#525866]">Price</div>
									</div>

									{/* Orders */}
                                    <div className="text-center flex flex-col gap-2 min-w-[80px]">
                                        <div className="font-normal leading-6 text-[#0E121B] text-[16px]">{service.orders}</div>
                                        <div className="text-[12px] font-normal leading-4 text-[#525866]">Orders</div>
									</div>

									{/* Switch and Delete Icon (visible in change mode) */}
									{isChangeMode && (
                                        <div className="flex items-center justify-end gap-2 min-w-[142px] h-6 min-h-6">
                                            <Switch.Root checked={service.isActive} onCheckedChange={(checked) => handleToggleActive(service.id, checked)} className={`w-[32px] h-[20px] rounded-full outline-none cursor-pointer transition-colors duration-200 ${service.isActive ? "bg-black" : "bg-gray-400 opacity-50 cursor-not-allowed"}`} disabled={false}>
                                                <Switch.Thumb className="block w-[14px] h-[14px] bg-white rounded-full transition-transform duration-200 translate-x-1 data-[state=checked]:translate-x-[15px] flex items-center justify-center">
                                                    <div className="w-[6px] h-[6px] bg-black rounded-full" />
                                                </Switch.Thumb>
                                            </Switch.Root>

                                            <span className="text-[14px] font-normal leading-5 text-[#0E121B] w-12">Display</span>
                                            <button onClick={() => handleDeleteClick(service.id)} className="p-[2px] focus:outline-none">
												<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M13.75 6H17.5V7.5H16V17.25C16 17.4489 15.921 17.6397 15.7803 17.7803C15.6397 17.921 15.4489 18 15.25 18H4.75C4.55109 18 4.36032 17.921 4.21967 17.7803C4.07902 17.6397 4 17.4489 4 17.25V7.5H2.5V6H6.25V3.75C6.25 3.55109 6.32902 3.36032 6.46967 3.21967C6.61032 3.07902 6.80109 3 7 3H13C13.1989 3 13.3897 3.07902 13.5303 3.21967C13.671 3.36032 13.75 3.55109 13.75 3.75V6ZM14.5 7.5H5.5V16.5H14.5V7.5ZM7.75 9.75H9.25V14.25H7.75V9.75ZM10.75 9.75H12.25V14.25H10.75V9.75ZM7.75 4.5V6H12.25V4.5H7.75Z"
														fill="#525866"
													/>
												</svg>
											</button>
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Delete Confirmation Modal */}
				{showDeleteModal && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
						<div className="bg-white gap-3 rounded-xl p-5">
							<div className="flex flex-col justify-center align-top gap-3 pb-4 rounded-lg min-w-[360px] shadow-lg">
								<p className="text-label-sm font-normal text-[#525866]">Are you sure you want to delete it?</p>
								<div className="max-w-[344px] text-red-600 text-sm p-2 bg-[#FFEBEC] rounded-lg flex items-center">
									<span className="mr-1">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 14C4.6862 14 2 11.3138 2 8C2 4.6862 4.6862 2 8 2C11.3138 2 14 4.6862 14 8C14 11.3138 11.3138 14 8 14ZM7.4 9.8V11H8.6V9.8H7.4ZM7.4 5V8.6H8.6V5H7.4Z" fill="#FB3748" />
										</svg>
									</span>{" "}
									This operation cannot be reversed.
								</div>
							</div>
							<hr className="h-[2px] bg-[#E1E4EA] mt-2 mb-3" />
							<div className="flex justify-between w-full gap-2 pt-4">
								<button onClick={handleDeleteConfirm} className="border border-red-500 w-full min-w-1/2 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 focus:outline-none">
									Delete
								</button>
								<button onClick={handleCancelDelete} className="border w-full min-w-1/2 border-[#E1E4EA] text-[#525866] px-4 py-2 rounded-lg hover:bg-gray-200 focus:outline-none">
									Cancel
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		);
}
