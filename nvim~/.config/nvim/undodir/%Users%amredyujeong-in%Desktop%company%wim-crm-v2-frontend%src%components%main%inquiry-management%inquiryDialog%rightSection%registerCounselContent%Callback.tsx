Vim�UnDo� �� ���|�8L}R��OבF���N����   U   d    <div className="flex h-full w-full flex-1 flex-col items-center justify-between space-y-5 pt-5">   E   a                       g��U    _�                     =        ����                                                                                                                                                                                                                                                                                                                                                             g�+:     �               Q   'use client';       !import { useState } from 'react';       Dimport { inquiryDialog, useInquiresHistory } from '@/api/inquiries';   0import { Button } from '@/components/ui/button';   ;import { useInquiryModalDataStore } from '@/store/inquiry';   .import { CALL_STATUS } from '@/types/inquiry';   7import { useQueryClient } from '@tanstack/react-query';   !import { DateTime } from 'luxon';       >import { CustomDateTimePicker } from './CustomDateTimePicker';       export const Callback = () => {     /** Property */   '  const queryClient = useQueryClient();       G  const { inquiryInfo, setCallHistories } = useInquiryModalDataStore();       P  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);       /  const { mutateAsync } = useInquiresHistory();         /** Function */     // 날짜 선택   :  const handleSelectedDate = (date: Date | undefined) => {       if (!date) return;       setSelectedDate(date);     };       9  // 다음 클릭 시, 다시 전화하기 요청 - POST   (  const handleSendSelectedDate = () => {       if (!selectedDate) return;       <    const date = DateTime.fromJSDate(selectedDate).toFormat(         "yyyy-MM-dd'T'HH:mm:ss"       );       %    const inquiryId = inquiryInfo.id;       const mutateData = {         inquiryId: inquiryId,   '      callStatus: CALL_STATUS.CALLBACK,         detail: date       };           mutateAsync(mutateData)         .then(() => {   .        handleRefetchCallHistories(inquiryId);         })   *      .catch((err) => console.error(err));     };       C  const handleRefetchCallHistories = async (inquiryId: number) => {   2    const queryKey = ['inquiryDialog', inquiryId];   /    const data = await queryClient.fetchQuery({         queryKey,   -      queryFn: () => inquiryDialog(inquiryId)       });           if (data) {   +      setCallHistories(data.callHistories);       }     };       
  return (   d    <div className="flex h-full w-full flex-1 flex-col items-center justify-between space-y-5 pt-5">   7      <p className="text-center text-sm text-gray-500">   L        고객님이 원하시는 전화 상담 시간을 입력해주세요   
      </p>       F      <CustomDateTimePicker handleSelectedDate={handleSelectedDate} />             <Button   3        className="h-7 rounded-sm p-0 px-3 text-xs"   (        onClick={handleSendSelectedDate}         >           저장         </Button>   
    </div>     );   };5�5�_�                    1       ����                                                                                                                                                                                                                                                                                                                                                             g�+?     �   0   2   Q            })5��    0                     X                     5�_�                    1   	    ����                                                                                                                                                                                                                                                                                                                                                             g�+A     �   0   2   Q      	      }).5��    0   	                  Y                     5�_�                    1       ����                                                                                                                                                                                                                                                                                                                                                             g�+F     �   0   2   Q            }).then(()5��    0                     `                     �    0                    `                    �    0                    a                    �    0                    a                    �    0                     ^                     �    0                     ]                     �    0                     \                     �    0                     X                     5�_�                    1       ����                                                                                                                                                                                                                                                                                                                                                             g�+X     �   0   2   Q            })5��    0                     X                     5�_�                    1   	    ����                                                                                                                                                                                                                                                                                                                                                             g�+Y     �   0   2   Q      	      }).5��    0   	                  Y                     5�_�                    1       ����                                                                                                                                                                                                                                                                                                                                                             g�+[     �   1   3   R    �   0   3   Q            }).then(()5��    0                     `                     �    0                    e                     �    1                      f                     �    1                     f                    �    1                      f                     5�_�      	              3       ����                                                                                                                                                                                                                                                                                                                                                             g�+^     �   2   4   S            }5��    2                     n                     5�_�      
           	   2        ����                                                                                                                                                                                                                                                                                                                                                             g�+o     �   2   4   S    �   2   3   S    5��    2                      g              H       5�_�   	              
   3       ����                                                                                                                                                                                                                                                                                                                                                             g�+p    �   0   3   T            }).then(() => {    �         O      Dimport { inquiryDialog, useInquiresHistory } from '@/api/inquiries';    �         P      0import { Button } from '@/components/ui/button';    �         Q      ;import { useInquiryModalDataStore } from '@/store/inquiry';    �      	   R      .import { CALL_STATUS } from '@/types/inquiry';    �      
   S      7import { useQueryClient } from '@tanstack/react-query';    �   	      T      !import { DateTime } from 'luxon';    5��    	                      K      "               �                                8               �                          �       /               �                          �       <               �                          w       1               �                         2       E       ;      �    0                   X                    5�_�   
                 @        ����                                                                                                                                                                                                                                                                                                                                                             g�+�     �               T   'use client';       !import { useState } from 'react';       Dimport { inquiryDialog, useInquiresHistory } from '@/api/inquiries';   0import { Button } from '@/components/ui/button';   ;import { useInquiryModalDataStore } from '@/store/inquiry';   .import { CALL_STATUS } from '@/types/inquiry';   7import { useQueryClient } from '@tanstack/react-query';   !import { DateTime } from 'luxon';       >import { CustomDateTimePicker } from './CustomDateTimePicker';       export const Callback = () => {     /** Property */   '  const queryClient = useQueryClient();       G  const { inquiryInfo, setCallHistories } = useInquiryModalDataStore();       P  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);       /  const { mutateAsync } = useInquiresHistory();         /** Function */     // 날짜 선택   :  const handleSelectedDate = (date: Date | undefined) => {       if (!date) return;       setSelectedDate(date);     };       9  // 다음 클릭 시, 다시 전화하기 요청 - POST   (  const handleSendSelectedDate = () => {       if (!selectedDate) return;       <    const date = DateTime.fromJSDate(selectedDate).toFormat(         "yyyy-MM-dd'T'HH:mm:ss"       );       %    const inquiryId = inquiryInfo.id;       const mutateData = {         inquiryId: inquiryId,   '      callStatus: CALL_STATUS.CALLBACK,         detail: date       };           mutateAsync(mutateData)         .then(() => {   .        handleRefetchCallHistories(inquiryId);         })         .then(() => {   G        queryClient.invalidateQueries({ queryKey: ['inquiriesList'] });         })   *      .catch((err) => console.error(err));     };       C  const handleRefetchCallHistories = async (inquiryId: number) => {   2    const queryKey = ['inquiryDialog', inquiryId];   /    const data = await queryClient.fetchQuery({         queryKey,   -      queryFn: () => inquiryDialog(inquiryId)       });           if (data) {   .      setCallHistories(data.combineHistories);       }     };       
  return (   d    <div className="flex h-full w-full flex-1 flex-col items-center justify-between space-y-5 pt-5">   7      <p className="text-center text-sm text-gray-500">   L        고객님이 원하시는 전화 상담 시간을 입력해주세요   
      </p>       F      <CustomDateTimePicker handleSelectedDate={handleSelectedDate} />             <Button   3        className="h-7 rounded-sm p-0 px-3 text-xs"   (        onClick={handleSendSelectedDate}         >           저장         </Button>   
    </div>     );   };5�5�_�                    @        ����                                                                                                                                                                                                                                                                                                                                                             g�,     �               T   'use client';       !import { useState } from 'react';       Dimport { inquiryDialog, useInquiresHistory } from '@/api/inquiries';   0import { Button } from '@/components/ui/button';   ;import { useInquiryModalDataStore } from '@/store/inquiry';   .import { CALL_STATUS } from '@/types/inquiry';   7import { useQueryClient } from '@tanstack/react-query';   !import { DateTime } from 'luxon';       >import { CustomDateTimePicker } from './CustomDateTimePicker';       export const Callback = () => {     /** Property */   '  const queryClient = useQueryClient();       G  const { inquiryInfo, setCallHistories } = useInquiryModalDataStore();       P  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);       /  const { mutateAsync } = useInquiresHistory();         /** Function */     // 날짜 선택   :  const handleSelectedDate = (date: Date | undefined) => {       if (!date) return;       setSelectedDate(date);     };       9  // 다음 클릭 시, 다시 전화하기 요청 - POST   (  const handleSendSelectedDate = () => {       if (!selectedDate) return;       <    const date = DateTime.fromJSDate(selectedDate).toFormat(         "yyyy-MM-dd'T'HH:mm:ss"       );       %    const inquiryId = inquiryInfo.id;       const mutateData = {         inquiryId: inquiryId,   '      callStatus: CALL_STATUS.CALLBACK,         detail: date       };           mutateAsync(mutateData)         .then(() => {   .        handleRefetchCallHistories(inquiryId);         })         .then(() => {   G        queryClient.invalidateQueries({ queryKey: ['inquiriesList'] });         })   *      .catch((err) => console.error(err));     };       C  const handleRefetchCallHistories = async (inquiryId: number) => {   2    const queryKey = ['inquiryDialog', inquiryId];   /    const data = await queryClient.fetchQuery({         queryKey,   -      queryFn: () => inquiryDialog(inquiryId)       });           if (data) {   +      setCallHistories(data.callHistories);       }     };       
  return (   d    <div className="flex h-full w-full flex-1 flex-col items-center justify-between space-y-5 pt-5">   7      <p className="text-center text-sm text-gray-500">   L        고객님이 원하시는 전화 상담 시간을 입력해주세요   
      </p>       F      <CustomDateTimePicker handleSelectedDate={handleSelectedDate} />             <Button   3        className="h-7 rounded-sm p-0 px-3 text-xs"   (        onClick={handleSendSelectedDate}         >           저장         </Button>   
    </div>     );   };5�5�_�                    <   ,    ����                                                                                                                                                                                                                                                                                                                            >           >           v        g�,�     �               T   'use client';       !import { useState } from 'react';       Dimport { inquiryDialog, useInquiresHistory } from '@/api/inquiries';   0import { Button } from '@/components/ui/button';   ;import { useInquiryModalDataStore } from '@/store/inquiry';   .import { CALL_STATUS } from '@/types/inquiry';   7import { useQueryClient } from '@tanstack/react-query';   !import { DateTime } from 'luxon';       >import { CustomDateTimePicker } from './CustomDateTimePicker';       export const Callback = () => {     /** Property */   '  const queryClient = useQueryClient();       G  const { inquiryInfo, setCallHistories } = useInquiryModalDataStore();       P  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);       /  const { mutateAsync } = useInquiresHistory();         /** Function */     // 날짜 선택   :  const handleSelectedDate = (date: Date | undefined) => {       if (!date) return;       setSelectedDate(date);     };       9  // 다음 클릭 시, 다시 전화하기 요청 - POST   (  const handleSendSelectedDate = () => {       if (!selectedDate) return;       <    const date = DateTime.fromJSDate(selectedDate).toFormat(         "yyyy-MM-dd'T'HH:mm:ss"       );       %    const inquiryId = inquiryInfo.id;       const mutateData = {         inquiryId: inquiryId,   '      callStatus: CALL_STATUS.CALLBACK,         detail: date       };           mutateAsync(mutateData)         .then(() => {   .        handleRefetchCallHistories(inquiryId);         })         .then(() => {   G        queryClient.invalidateQueries({ queryKey: ['inquiriesList'] });         })   *      .catch((err) => console.error(err));     };       C  const handleRefetchCallHistories = async (inquiryId: number) => {   2    const queryKey = ['inquiryDialog', inquiryId];   /    const data = await queryClient.fetchQuery({         queryKey,   -      queryFn: () => inquiryDialog(inquiryId)       });           if (data) {   .      setCallHistories(data.combineHistories);       }     };       
  return (   d    <div className="flex h-full w-full flex-1 flex-col items-center justify-between space-y-5 pt-5">   7      <p className="text-center text-sm text-gray-500">   L        고객님이 원하시는 전화 상담 시간을 입력해주세요   
      </p>       F      <CustomDateTimePicker handleSelectedDate={handleSelectedDate} />             <Button   3        className="h-7 rounded-sm p-0 px-3 text-xs"   (        onClick={handleSendSelectedDate}         >           저장         </Button>   
    </div>     );   };5�5�_�                    0        ����                                                                                                                                                                                                                                                                                                                            3           3           V        g�e�     �   0   2   T    5��    0                      P              	       �    0                      P                     5�_�                    1        ����                                                                                                                                                                                                                                                                                                                            4           4           V        g�e�     �   1   3   U    �   1   2   U    5��    1                      Q              H       5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            5           5           V        g�e�     �   4   5          G        queryClient.invalidateQueries({ queryKey: ['inquiriesList'] });5��    4                      �      H               5�_�                    3        ����                                                                                                                                                                                                                                                                                                                            3          3          V       g�e�     �   3   5                })�   2   3   V            })�   4   6   U    5��   2              3       �      	       �      �    3                     �                    5�_�                    3        ����                                                                                                                                                                                                                                                                                                                            3          6          V       g�e�     �   2   6   Q    �   3   4   Q    �   2   3                .then(() => {   
        })         })   *      .catch((err) => console.error(err));5��    2                      �      S               �    2                      �              u       5�_�                    1        ����                                                                                                                                                                                                                                                                                                                            6          6          V       g�e�     �   0   1           5��    0                      P                     5�_�                    2       ����                                                                                                                                                                                                                                                                                                                            5          5          V       g�e�     �         S       5��                          �              3       5�_�                    L        ����                                                                                                                                                                                                                                                                                                                               	                 v       g�e�     �   L   N   U              �   L   N   T    5��    L                      �                     �    L                     �                    �    L                    �                    5�_�                    M       ����                                                                                                                                                                                                                                                                                                                               	                 v       g�e�     �   L   N   U              disa5��    L                      �                     5�_�                    M       ����                                                                                                                                                                                                                                                                                                                               	                 v       g�e�    �         T      0import { Button } from '@/components/ui/button';�         U      2import { SonnerToast } from '@/components/shared';   >import { CustomDateTimePicker } from './CustomDateTimePicker';�         P      Dimport { inquiryDialog, useInquiresHistory } from '@/api/inquiries';    �         Q      0import { Button } from '@/components/ui/button';    �         R      ;import { useInquiryModalDataStore } from '@/store/inquiry';    �      	   S      .import { CALL_STATUS } from '@/types/inquiry';    �      
   T      7import { useQueryClient } from '@tanstack/react-query';    �   	      U      !import { DateTime } from 'luxon';    �         T      >import { CustomDateTimePicker } from './CustomDateTimePicker';    �         U      2import { SonnerToast } from '@/components/shared';    5��                          �      3               �                         n      ?       r       �    	                      K      "               �                                8               �                          �       /               �                          �       <               �                          w       1               �                         2       E       ;      �                          n      3               �                          w               3       5�_�                    F   &    ����                                                                                                                                                                                                                                                                                                                                                             g��1     �   E   G   U      7      <p className="text-center text-sm text-gray-500">5��    E   &                                       5�_�                    F   %    ����                                                                                                                                                                                                                                                                                                                                                             g��2     �   E   G   U      6      <p className="text-center text-s text-gray-500">5��    E   %                                       5�_�                    F   %    ����                                                                                                                                                                                                                                                                                                                                                             g��3     �   E   G   U      7      <p className="text-center text-ss text-gray-500">5��    E   %                                       5�_�                    F   %    ����                                                                                                                                                                                                                                                                                                                                                             g��4     �   E   G   U      6      <p className="text-center text-s text-gray-500">5��    E   %                                     5�_�                    F   &    ����                                                                                                                                                                                                                                                                                                                                                             g��8    �         O      Dimport { inquiryDialog, useInquiresHistory } from '@/api/inquiries';    �         P      2import { SonnerToast } from '@/components/shared';    �         Q      0import { Button } from '@/components/ui/button';    �      	   R      ;import { useInquiryModalDataStore } from '@/store/inquiry';    �      
   S      .import { CALL_STATUS } from '@/types/inquiry';    �   	      T      7import { useQueryClient } from '@tanstack/react-query';    �   
      U      !import { DateTime } from 'luxon';    5��    
                      ~      "               �    	                      F      8               �                                /               �                          �       <               �                          �       1               �                          w       3               �                         2       E       n      5�_�                    E   a    ����                                                                                                                                                                                                                                                                                                                                                             g��H     �   D   F   U      d    <div className="flex h-full w-full flex-1 flex-col items-center justify-between space-y-5 pt-5">5��    D   a                 �                    5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             g��T    �          O      Dimport { inquiryDialog, useInquiresHistory } from '@/api/inquiries';    �         P      2import { SonnerToast } from '@/components/shared';    �         Q      0import { Button } from '@/components/ui/button';    �      	   R      ;import { useInquiryModalDataStore } from '@/store/inquiry';    �      
   S      .import { CALL_STATUS } from '@/types/inquiry';    �   	      T      7import { useQueryClient } from '@tanstack/react-query';    �   
      U      !import { DateTime } from 'luxon';    5��    
                      ~      "               �    	                      F      8               �                                /               �                          �       <               �                          �       1               �                          w       3               �                         2       E       n      5��