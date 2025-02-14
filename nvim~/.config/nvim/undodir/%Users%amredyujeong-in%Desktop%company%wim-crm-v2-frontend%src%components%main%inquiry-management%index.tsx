Vim�UnDo� JHɯ��m��̘OB�t.���o�����P   �                                   g��E    _�                             ����                                                                                                                                                                                                                                                                                                                O   4       F   -       F   -       v   -    g�S_     �                 'use client';       ,import { useEffect, useState } from 'react';       Fimport { useInquiriesList, useInquiryDeposit } from '@/api/inquiries';   import {     CommonPagination,     CommonSelect,     CommonTable   } from '@/components/shared';   0import { Button } from '@/components/ui/button';   .import { Input } from '@/components/ui/input';   6import { useSelectedRowStore } from '@/store/inquiry';   Iimport { InquiriesListData, InquiryStatusType } from '@/types/inquiries';   import {     getCoreRowModel,     getFilteredRowModel,     getPaginationRowModel,     getSortedRowModel,     useReactTable   } from '@tanstack/react-table';   -import { DateRange } from 'react-day-picker';       2import { InquiryColumns } from './InquiryColumns';   0import { InquiryDialog } from './inquiryDialog';   4import { MultiDatePicker } from './multiDatePicker';   8import { SendMessageDialog } from './sendMessageDialog';       /export const InquiryManagementContent = () => {     /* Mount Option */   4  const [isMounted, setIsMounted] = useState(false);       H  const { selectedRowUser, setSelectedRowUser, setAllSelectedRowUser } =       useSelectedRowStore();         /* Query List Data */   N  const [inquiryListData, setInquiryListData] = useState<InquiriesListData[]>(       []     );       9  /* Table Row Click 시 문의 다이얼로그 오픈 */   :  const [isOpenDialog, setIsOpenDialog] = useState(false);   P  const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);       #  /* Query params resource state */   0  const [pagination, setPagination] = useState({       pageIndex: 0,       pageSize: 10     });   3  const [selectedDate, setSelectedDate] = useState<   ,    { from: string; to: string } | undefined     >(undefined);   5  const [searchValue, setSearchValue] = useState('');   3  const [inputValue, setInputValue] = useState('');   5  const [inquiryStatus, setInquiryStatus] = useState<   !    InquiryStatusType | undefined     >(undefined);         /* Get Query */   .  const { data, refetch } = useInquiriesList({       page: pagination.pageIndex,       size: pagination.pageSize,   "    startDate: selectedDate?.from,       endDate: selectedDate?.to,       name: searchValue,        inquiryStatus: inquiryStatus     });       ,  // 예약금 입금 여부 수정 mutation   ?  const { mutate: inquiryDepositMutate } = useInquiryDeposit();         /* Function */   2  const handlePaginationPage = (page: number) => {       setPagination((prev) => ({         ...prev,         pageIndex: page       }));     };       2  const handlePaginationSize = (size: number) => {       setPagination((prev) => ({         ...prev,         pageSize: size       }));     };       >  const handleSelectDate = (value: DateRange | undefined) => {   #    if (value?.from && value?.to) {   .      const toKSTISOString = (date: Date) => {   O        const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000); // UTC+9   2        return kstDate.toISOString().slice(0, 10);         };              const transformedDates = {   )        from: toKSTISOString(value.from),   $        to: toKSTISOString(value.to)         };   (      setSelectedDate(transformedDates);       } else {   !      setSelectedDate(undefined);       }     };       /  const handleInputValue = (value: string) => {       setInputValue(value);     };       #  const handleSearchClick = () => {       setSearchValue(inputValue);     };       H  const handleStatusChange = (value: InquiryStatusType | undefined) => {   "    if (value === inquiryStatus) {   "      setInquiryStatus(undefined);       } else {         setInquiryStatus(value);       }     };       7  const handleOpenDialog = (row: boolean | number) => {   %    setIsOpenDialog((prev) => !prev);       2    if (!isOpenDialog && typeof row == 'number') {   /      // 다이얼로그를 오픈하는 경우         setSelectedRow(row);       } else {   2      // 다이얼로그를 클로즈하는 경우          setSelectedRow(undefined);       }     };         /* Inquiry Table */     const table = useReactTable({        data: inquiryListData ?? [],       columns: InquiryColumns,   '    getCoreRowModel: getCoreRowModel(),   3    getPaginationRowModel: getPaginationRowModel(),   +    getSortedRowModel: getSortedRowModel(),   /    getFilteredRowModel: getFilteredRowModel(),   &    onPaginationChange: setPagination,       manualPagination: true,       state: {         pagination       },       meta: {         inquiryStatus,         handleStatusChange,         inquiryDepositMutate,         selectedRowUser,         setSelectedRowUser,         setAllSelectedRowUser       }     });         /* Effect */     useEffect(() => {       if (data) {   5      setInquiryListData(data?.data.inquiries ?? []);       }     }, [data]);         useEffect(() => {       setIsMounted(true);   	  }, []);         useEffect(() => {       refetch();     }, [       inquiryStatus,       searchValue,       selectedDate?.from,       selectedDate?.to,       pagination.pageIndex,       pagination.pageSize     ]);         useEffect(() => {       setPagination((prev) => ({         ...prev,         pageIndex: 0       }));     }, [       inquiryStatus,       searchValue,       selectedDate?.from,       selectedDate?.to,       pagination.pageSize     ]);         /* Hydrate Error */     if (!isMounted) return null;         /* Render */   
  return (   )    <div className="flex flex-col gap-2">   3      <div className="flex w-full justify-between">   $        <div className="flex gap-3">              <div className="flex">               <Input   8              placeholder="이름을 검색해주세요"                  value={inputValue}   @              onChange={(e) => handleInputValue(e.target.value)}   I              onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}   2              className="w-[200px] rounded-r-none"               />   K            <Button onClick={handleSearchClick} className="rounded-l-none">                 검색               </Button>             </div>       N          <MultiDatePicker handleSelectDate={{ handler: handleSelectDate }} />           </div>       $        <div className="flex gap-3">             <SendMessageDialog />                 <InquiryDialog               open={isOpenDialog}   8            onChangeOpen={{ handler: handleOpenDialog }}   %            selectedRow={selectedRow}             />                 <CommonSelect   !            className="w-[130px]"   C            onValueChange={(value) => handlePaginationSize(+value)}               defalutValue={'10'}   +            placeholder={'10개씩 보기'}               data={[   @              { id: '1', value: '10', name: '10개씩 보기' },   @              { id: '2', value: '30', name: '30개씩 보기' },   @              { id: '3', value: '50', name: '50개씩 보기' },   A              { id: '4', value: '100', name: '100개씩 보기' }               ]}             />           </div>         </div>       *      <div className="relative space-y-2">   V        <div className="scroll-bar-hide h-[calc(100vh-13rem)] overflow-scroll border">             <CommonTable               table={table}   &            handler={handleOpenDialog}   :            headerClassName="h-12 p-0 text-xs text-center"   9            cellClassName="px-0 py-4 text-xs text-center"             />           </div>       N        <p className="z-1 absolute -bottom-[1.2rem] left-0 text-xs font-bold">   3          {`선택 : ${selectedRowUser.length}건 /   /          ${data?.data.totalElements ?? 0}건`}           </p>         </div>             <CommonPagination   (        pageIndex={pagination.pageIndex}   -        lastPages={data?.data.lastPages ?? 1}   <        handlePagination={{ handler: handlePaginationPage }}         />   
    </div>     );   };5�5�_�                            ����                                                                                                                                                                                                                                                                                                                O   4       F   -       F   -       v   -    g��<     �               �   "use client";       ,import { useEffect, useState } from "react";       Fimport { useInquiriesList, useInquiryDeposit } from "@/api/inquiries";   Rimport { CommonPagination, CommonSelect, CommonTable } from "@/components/shared";   0import { Button } from "@/components/ui/button";   .import { Input } from "@/components/ui/input";   6import { useSelectedRowStore } from "@/store/inquiry";   Iimport { InquiriesListData, InquiryStatusType } from "@/types/inquiries";   �import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";   -import { DateRange } from "react-day-picker";       2import { InquiryColumns } from "./InquiryColumns";   6import { InquiryDialog } from "./InquiryDialog/index";   4import { MultiDatePicker } from "./multiDatePicker";   8import { SendMessageDialog } from "./sendMessageDialog";       /export const InquiryManagementContent = () => {     /* Mount Option */   4  const [isMounted, setIsMounted] = useState(false);       _  const { selectedRowUser, setSelectedRowUser, setAllSelectedRowUser } = useSelectedRowStore();         /* Query List Data */   R  const [inquiryListData, setInquiryListData] = useState<InquiriesListData[]>([]);       9  /* Table Row Click 시 문의 다이얼로그 오픈 */   :  const [isOpenDialog, setIsOpenDialog] = useState(false);   P  const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);       #  /* Query params resource state */   0  const [pagination, setPagination] = useState({       pageIndex: 0,       pageSize: 10,     });   h  const [selectedDate, setSelectedDate] = useState<{ from: string; to: string } | undefined>(undefined);   5  const [searchValue, setSearchValue] = useState("");   3  const [inputValue, setInputValue] = useState("");   _  const [inquiryStatus, setInquiryStatus] = useState<InquiryStatusType | undefined>(undefined);         /* Get Query */   .  const { data, refetch } = useInquiriesList({       page: pagination.pageIndex,       size: pagination.pageSize,   "    startDate: selectedDate?.from,       endDate: selectedDate?.to,       name: searchValue,   !    inquiryStatus: inquiryStatus,     });       ,  // 예약금 입금 여부 수정 mutation   ?  const { mutate: inquiryDepositMutate } = useInquiryDeposit();         /* Function */   2  const handlePaginationPage = (page: number) => {       setPagination((prev) => ({         ...prev,         pageIndex: page,       }));     };       2  const handlePaginationSize = (size: number) => {       setPagination((prev) => ({         ...prev,         pageSize: size,       }));     };       >  const handleSelectDate = (value: DateRange | undefined) => {   #    if (value?.from && value?.to) {   .      const toKSTISOString = (date: Date) => {   O        const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000); // UTC+9   2        return kstDate.toISOString().slice(0, 10);         };              const transformedDates = {   )        from: toKSTISOString(value.from),   %        to: toKSTISOString(value.to),         };   (      setSelectedDate(transformedDates);       } else {   !      setSelectedDate(undefined);       }     };       /  const handleInputValue = (value: string) => {       setInputValue(value);     };       #  const handleSearchClick = () => {       setSearchValue(inputValue);     };       H  const handleStatusChange = (value: InquiryStatusType | undefined) => {   "    if (value === inquiryStatus) {   "      setInquiryStatus(undefined);       } else {         setInquiryStatus(value);       }     };       7  const handleOpenDialog = (row: boolean | number) => {   %    setIsOpenDialog((prev) => !prev);       2    if (!isOpenDialog && typeof row == "number") {   /      // 다이얼로그를 오픈하는 경우         setSelectedRow(row);       } else {   2      // 다이얼로그를 클로즈하는 경우          setSelectedRow(undefined);       }     };         /* Inquiry Table */     const table = useReactTable({        data: inquiryListData ?? [],       columns: InquiryColumns,   '    getCoreRowModel: getCoreRowModel(),   3    getPaginationRowModel: getPaginationRowModel(),   +    getSortedRowModel: getSortedRowModel(),   /    getFilteredRowModel: getFilteredRowModel(),   &    onPaginationChange: setPagination,       manualPagination: true,       state: {         pagination,       },       meta: {         inquiryStatus,         handleStatusChange,         inquiryDepositMutate,         selectedRowUser,         setSelectedRowUser,         setAllSelectedRowUser,       },     });         /* Effect */     useEffect(() => {       if (data) {   5      setInquiryListData(data?.data.inquiries ?? []);       }     }, [data]);         useEffect(() => {       setIsMounted(true);   	  }, []);         useEffect(() => {       refetch();   t  }, [inquiryStatus, searchValue, selectedDate?.from, selectedDate?.to, pagination.pageIndex, pagination.pageSize]);         useEffect(() => {       setPagination((prev) => ({         ...prev,         pageIndex: 0,       }));   ^  }, [inquiryStatus, searchValue, selectedDate?.from, selectedDate?.to, pagination.pageSize]);         /* Hydrate Error */     if (!isMounted) return null;         /* Render */   
  return (   )    <div className="flex flex-col gap-2">   3      <div className="flex w-full justify-between">   $        <div className="flex gap-3">              <div className="flex">               <Input   8              placeholder="이름을 검색해주세요"                  value={inputValue}   @              onChange={(e) => handleInputValue(e.target.value)}   I              onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}   2              className="w-[200px] rounded-r-none"               />   K            <Button onClick={handleSearchClick} className="rounded-l-none">                 검색               </Button>             </div>       N          <MultiDatePicker handleSelectDate={{ handler: handleSelectDate }} />           </div>       $        <div className="flex gap-3">             <SendMessageDialog />       v          <InquiryDialog open={isOpenDialog} onChangeOpen={{ handler: handleOpenDialog }} selectedRow={selectedRow} />                 <CommonSelect   !            className="w-[130px]"   C            onValueChange={(value) => handlePaginationSize(+value)}               defalutValue={"10"}   +            placeholder={"10개씩 보기"}               data={[   @              { id: "1", value: "10", name: "10개씩 보기" },   @              { id: "2", value: "30", name: "30개씩 보기" },   @              { id: "3", value: "50", name: "50개씩 보기" },   B              { id: "4", value: "100", name: "100개씩 보기" },               ]}             />           </div>         </div>       *      <div className="relative space-y-2">   V        <div className="scroll-bar-hide h-[calc(100vh-13rem)] overflow-scroll border">   �          <CommonTable table={table} handler={handleOpenDialog} headerClassName="h-12 p-0 text-xs text-center" cellClassName="px-0 py-4 text-xs text-center" />           </div>       N        <p className="z-1 absolute -bottom-[1.2rem] left-0 text-xs font-bold">   3          {`선택 : ${selectedRowUser.length}건 /   /          ${data?.data.totalElements ?? 0}건`}           </p>         </div>       �      <CommonPagination pageIndex={pagination.pageIndex} lastPages={data?.data.lastPages ?? 1} handlePagination={{ handler: handlePaginationPage }} />   
    </div>     );   };5�5�_�                    �   #    ����                                                                                                                                                                                                                                                                                                                O   4       F          F          v       g��X     �   �   �   �      9            cellClassName="px-0 py-4 text-xs text-center"5��    �   #                 ?                    5�_�                    �   #    ����                                                                                                                                                                                                                                                                                                                O   4       F          F          v       g��Y    �         �      Fimport { useInquiriesList, useInquiryDeposit } from '@/api/inquiries';    �         �      import {     CommonPagination,     CommonSelect,     CommonTable   } from '@/components/shared';    �   
      �      0import { Button } from '@/components/ui/button';    �         �      .import { Input } from '@/components/ui/input';    �         �      6import { useSelectedRowStore } from '@/store/inquiry';    �         �      6import { InquiryStatusType } from '@/types/inquiries';    �         �      import {     getCoreRowModel,     getFilteredRowModel,     getPaginationRowModel,     getSortedRowModel,     useReactTable   } from '@tanstack/react-table';    �         �      -import { DateRange } from 'react-day-picker';    �         �      2import { InquiryColumns } from './InquiryColumns';    �         �      0import { InquiryDialog } from './inquiryDialog';    �         �      4import { MultiDatePicker } from './multiDatePicker';    �         �      8import { SendMessageDialog } from './sendMessageDialog';    5��                                9               �                          �      5               �                          �      1               �                         k      3       �       �                          <      .               �                          �      �               �                          t      7               �                          =      7               �                                /               �    
                      �       1               �                          �       Y               �                         =       G       -      5�_�                    �   #    ����                                                                                                                                                                                                                                                                                                                O   4       F          F          v       g��_     �   �   �   �      9            cellClassName="px-0 py-2 text-xs text-center"5��    �   #                 ?                    5�_�                    �   #    ����                                                                                                                                                                                                                                                                                                                O   4       F          F          v       g��`    �         �      Fimport { useInquiriesList, useInquiryDeposit } from '@/api/inquiries';    �         �      import {     CommonPagination,     CommonSelect,     CommonTable   } from '@/components/shared';    �   
      �      0import { Button } from '@/components/ui/button';    �         �      .import { Input } from '@/components/ui/input';    �         �      6import { useSelectedRowStore } from '@/store/inquiry';    �         �      6import { InquiryStatusType } from '@/types/inquiries';    �         �      import {     getCoreRowModel,     getFilteredRowModel,     getPaginationRowModel,     getSortedRowModel,     useReactTable   } from '@tanstack/react-table';    �         �      -import { DateRange } from 'react-day-picker';    �         �      2import { InquiryColumns } from './InquiryColumns';    �         �      0import { InquiryDialog } from './inquiryDialog';    �         �      4import { MultiDatePicker } from './multiDatePicker';    �         �      8import { SendMessageDialog } from './sendMessageDialog';    5��                                9               �                          �      5               �                          �      1               �                         k      3       �       �                          <      .               �                          �      �               �                          t      7               �                          =      7               �                                /               �    
                      �       1               �                          �       Y               �                         =       G       -      5�_�                    �        ����                                                                                                                                                                                                                                                                                                                O   4       F          F          v       g��i     �   �   �   �      :            headerClassName="h-12 p-0 text-xs text-center"5��    �                                         5�_�      	              �        ����                                                                                                                                                                                                                                                                                                                O   4       F          F          v       g��j    �         �      Fimport { useInquiriesList, useInquiryDeposit } from '@/api/inquiries';    �         �      import {     CommonPagination,     CommonSelect,     CommonTable   } from '@/components/shared';    �   
      �      0import { Button } from '@/components/ui/button';    �         �      .import { Input } from '@/components/ui/input';    �         �      6import { useSelectedRowStore } from '@/store/inquiry';    �         �      6import { InquiryStatusType } from '@/types/inquiries';    �         �      import {     getCoreRowModel,     getFilteredRowModel,     getPaginationRowModel,     getSortedRowModel,     useReactTable   } from '@tanstack/react-table';    �         �      -import { DateRange } from 'react-day-picker';    �         �      2import { InquiryColumns } from './InquiryColumns';    �         �      0import { InquiryDialog } from './inquiryDialog';    �         �      4import { MultiDatePicker } from './multiDatePicker';    �         �      8import { SendMessageDialog } from './sendMessageDialog';    5��                                9               �                          �      5               �                          �      1               �                         k      3       �       �                          <      .               �                          �      �               �                          t      7               �                          =      7               �                                /               �    
                      �       1               �                          �       Y               �                         =       G       -      5�_�      
           	   �        ����                                                                                                                                                                                                                                                                                                                O   4       F          F          v       g��     �   �   �   �      !            className="w-[130px]"5��    �                      #                     5�_�   	              
   �   $    ����                                                                                                                                                                                                                                                                                                                O   4       F          F          v       g��    �   �   �   �      &            className="w-[130px] h-10"�         �      Fimport { useInquiriesList, useInquiryDeposit } from '@/api/inquiries';    �         �      import {     CommonPagination,     CommonSelect,     CommonTable   } from '@/components/shared';    �   
      �      0import { Button } from '@/components/ui/button';    �         �      .import { Input } from '@/components/ui/input';    �         �      6import { useSelectedRowStore } from '@/store/inquiry';    �         �      6import { InquiryStatusType } from '@/types/inquiries';    �         �      import {     getCoreRowModel,     getFilteredRowModel,     getPaginationRowModel,     getSortedRowModel,     useReactTable   } from '@tanstack/react-table';    �         �      -import { DateRange } from 'react-day-picker';    �         �      2import { InquiryColumns } from './InquiryColumns';    �         �      0import { InquiryDialog } from './inquiryDialog';    �         �      4import { MultiDatePicker } from './multiDatePicker';    �         �      8import { SendMessageDialog } from './sendMessageDialog';    5��                                9               �                          �      5               �                          �      1               �                         k      3       �       �                          <      .               �                          �      �               �                          t      7               �                          =      7               �                                /               �    
                      �       1               �                          �       Y               �                         =       G       -      �    �                                        5�_�   
                 �       ����                                                                                                                                                                                                                                                                                                                O   4       �          �          v       g��     �   �   �   �      &            className="h-10 w-[130px]"5��    �                                          5�_�                    �       ����                                                                                                                                                                                                                                                                                                                O   4       �          �          v       g��    �         �      Fimport { useInquiriesList, useInquiryDeposit } from '@/api/inquiries';    �         �      import {     CommonPagination,     CommonSelect,     CommonTable   } from '@/components/shared';    �   
      �      0import { Button } from '@/components/ui/button';    �         �      .import { Input } from '@/components/ui/input';    �         �      6import { useSelectedRowStore } from '@/store/inquiry';    �         �      6import { InquiryStatusType } from '@/types/inquiries';    �         �      import {     getCoreRowModel,     getFilteredRowModel,     getPaginationRowModel,     getSortedRowModel,     useReactTable   } from '@tanstack/react-table';    �         �      -import { DateRange } from 'react-day-picker';    �         �      2import { InquiryColumns } from './InquiryColumns';    �         �      0import { InquiryDialog } from './inquiryDialog';    �         �      4import { MultiDatePicker } from './multiDatePicker';    �         �      8import { SendMessageDialog } from './sendMessageDialog';    5��                                9               �                          �      5               �                          �      1               �                         k      3       �       �                          <      .               �                          �      �               �                          t      7               �                          =      7               �                                /               �    
                      �       1               �                          �       Y               �                         =       G       -      5�_�                     �        ����                                                                                                                                                                                                                                                                                                                O   4       �          �          v       g��D     �               �   'use client';       ,import { useEffect, useState } from 'react';       Fimport { useInquiriesList, useInquiryDeposit } from '@/api/inquiries';   import {     CommonPagination,     CommonSelect,     CommonTable   } from '@/components/shared';   0import { Button } from '@/components/ui/button';   .import { Input } from '@/components/ui/input';   6import { useSelectedRowStore } from '@/store/inquiry';   6import { InquiryStatusType } from '@/types/inquiries';   import {     getCoreRowModel,     getFilteredRowModel,     getPaginationRowModel,     getSortedRowModel,     useReactTable   } from '@tanstack/react-table';   -import { DateRange } from 'react-day-picker';       2import { InquiryColumns } from './InquiryColumns';   0import { InquiryDialog } from './inquiryDialog';   4import { MultiDatePicker } from './multiDatePicker';   8import { SendMessageDialog } from './sendMessageDialog';       /export const InquiryManagementContent = () => {     /* Property */   H  const { selectedRowUser, setSelectedRowUser, setAllSelectedRowUser } =       useSelectedRowStore();       9  /* Table Row Click 시 문의 다이얼로그 오픈 */   :  const [isOpenDialog, setIsOpenDialog] = useState(false);   P  const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);       #  /* Query params resource state */   0  const [pagination, setPagination] = useState({       pageIndex: 0,       pageSize: 10     });   3  const [selectedDate, setSelectedDate] = useState<   ,    { from: string; to: string } | undefined     >(undefined);   5  const [searchValue, setSearchValue] = useState('');   3  const [inputValue, setInputValue] = useState('');   5  const [inquiryStatus, setInquiryStatus] = useState<   !    InquiryStatusType | undefined     >(undefined);         // 문의 관리 조회 query   .  const { data, refetch } = useInquiriesList({       page: pagination.pageIndex,       size: pagination.pageSize,   "    startDate: selectedDate?.from,       endDate: selectedDate?.to,       name: searchValue,        inquiryStatus: inquiryStatus     });       ,  // 예약금 입금 여부 수정 mutation   ?  const { mutate: inquiryDepositMutate } = useInquiryDeposit();         /* Function */   2  const handlePaginationPage = (page: number) => {       setPagination((prev) => ({         ...prev,         pageIndex: page       }));     };       2  const handlePaginationSize = (size: number) => {       setPagination((prev) => ({         ...prev,         pageSize: size       }));     };       >  const handleSelectDate = (value: DateRange | undefined) => {   #    if (value?.from && value?.to) {   .      const toKSTISOString = (date: Date) => {   F        const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);   2        return kstDate.toISOString().slice(0, 10);         };              const transformedDates = {   )        from: toKSTISOString(value.from),   $        to: toKSTISOString(value.to)         };   (      setSelectedDate(transformedDates);       } else {   !      setSelectedDate(undefined);       }     };       #  const handleSearchClick = () => {       setSearchValue(inputValue);     };       H  const handleStatusChange = (value: InquiryStatusType | undefined) => {   "    if (value === inquiryStatus) {   "      setInquiryStatus(undefined);       } else {         setInquiryStatus(value);       }     };       7  const handleOpenDialog = (row: boolean | number) => {   %    setIsOpenDialog((prev) => !prev);       2    if (!isOpenDialog && typeof row == 'number') {   /      // 다이얼로그를 오픈하는 경우         setSelectedRow(row);       } else {   2      // 다이얼로그를 클로즈하는 경우          setSelectedRow(undefined);       }     };         /* Inquiry Table */     const table = useReactTable({   %    data: data?.data.inquiries ?? [],       columns: InquiryColumns,   '    getCoreRowModel: getCoreRowModel(),   3    getPaginationRowModel: getPaginationRowModel(),   +    getSortedRowModel: getSortedRowModel(),   /    getFilteredRowModel: getFilteredRowModel(),   &    onPaginationChange: setPagination,       manualPagination: true,       state: {         pagination       },       meta: {         inquiryStatus,         handleStatusChange,         inquiryDepositMutate,         selectedRowUser,         setSelectedRowUser,         setAllSelectedRowUser       }     });         /** LifeCycle */     useEffect(() => {       refetch();     }, [       inquiryStatus,       searchValue,       selectedDate?.from,       selectedDate?.to,       pagination.pageSize     ]);         useEffect(() => {       setPagination((prev) => ({         ...prev,         pageIndex: 0       }));     }, [       inquiryStatus,       searchValue,       selectedDate?.from,       selectedDate?.to,       pagination.pageSize     ]);         /* Render */   
  return (   )    <div className="flex flex-col gap-2">   3      <div className="flex w-full justify-between">   $        <div className="flex gap-3">              <div className="flex">               <Input   8              placeholder="이름을 검색해주세요"                  value={inputValue}   =              onChange={(e) => setInputValue(e.target.value)}   I              onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}   2              className="w-[200px] rounded-r-none"               />   K            <Button onClick={handleSearchClick} className="rounded-l-none">                 검색               </Button>             </div>       N          <MultiDatePicker handleSelectDate={{ handler: handleSelectDate }} />           </div>       $        <div className="flex gap-3">             <SendMessageDialog />                 <InquiryDialog               open={isOpenDialog}   8            onChangeOpen={{ handler: handleOpenDialog }}   %            selectedRow={selectedRow}             />                 <CommonSelect   !            className="w-[130px]"   C            onValueChange={(value) => handlePaginationSize(+value)}               defalutValue={'10'}   +            placeholder={'10개씩 보기'}               data={[   @              { id: '1', value: '10', name: '10개씩 보기' },   @              { id: '2', value: '30', name: '30개씩 보기' },   @              { id: '3', value: '50', name: '50개씩 보기' },   A              { id: '4', value: '100', name: '100개씩 보기' }               ]}             />           </div>         </div>       *      <div className="relative space-y-2">   V        <div className="scroll-bar-hide h-[calc(100vh-13rem)] overflow-scroll border">             <CommonTable               table={table}   &            handler={handleOpenDialog}   :            headerClassName="h-10 p-0 text-xs text-center"   9            cellClassName="px-0 py-3 text-xs text-center"             />           </div>       N        <p className="z-1 absolute -bottom-[1.2rem] left-0 text-xs font-bold">   3          {`선택 : ${selectedRowUser.length}건 /   /          ${data?.data.totalElements ?? 0}건`}           </p>         </div>             <CommonPagination   (        pageIndex={pagination.pageIndex}   -        lastPages={data?.data.lastPages ?? 1}   <        handlePagination={{ handler: handlePaginationPage }}         />   
    </div>     );   };5�5��