Vim�UnDo� ]�ŚH$4nU��V�r`laѮ�ϕ �6��l              	                       g{�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             g{��     �                =======5��                                                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             g{��     �                <<<<<<< Updated upstream5��                          ^                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             g{��     �                >>>>>>> Stashed changes5��                          �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        g{��     �                <<<<<<< Updated upstream   $        <div className="flex-[0.3]">             <HistoryStack />           </div>   =======5��                          �      p               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        g{��     �                >>>>>>> Stashed changes5��                          .                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        g{��     �                (import { Calendar } from 'lucide-react';   !import { DateTime } from 'luxon';5��                          ]      K               5�_�                            ����                                                                                                                                                                                                                                                                                                                                       S           V        g{��     �             :   const HistoryStack = () => {   
  return (   >    <div className="flex h-full w-full flex-col items-center">   %      <div className="h-full w-full">   =        <div className="w-full bg-gray-100 p-2">history</div>   R        <div className="flex h-full w-full flex-col gap-1 border border-gray-300">   E          {HISTORY_DATA.map(({ id, author, content, createdAt }) => (               <div                 key={id}   F              className="flex w-full justify-between bg-[#F3F8F2] p-2"               >   *              <div className="flex gap-2">   A                <p className="text-[13px] font-bold">{author}</p>   8                <p className="text-[12px]">{content}</p>                 </div>       8              <p className="text-[11px]">{createdAt}</p>               </div>             ))}           </div>         </div>             <CommonDialog            trigger={'추가하기'}           headTitle="Memo"   $        contentClassName="w-[500px]"           content={   L          <div className="flex w-full flex-col items-center justify-center">   .            <Textarea className="h-[200px]" />   C            <Button className="mt-[24px] px-[50px]">확인</Button>             </div>   	        }         />   
    </div>     );   };       const HISTORY_DATA = [     {       id: '1',       author: '정혜수',   -    content: '윤정희 고객님 예민함',       createdAt: '10:10'     },     {       id: '2',       author: '정혜수',   -    content: '김동일 고객님 예민함',       createdAt: '10:10'     },     {       id: '3',       author: '정혜수',   *    content: '노기훈 고객님 신남',       createdAt: '10:10'     }   ];   =======5��           :                                   5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                  V        g{��     �                <<<<<<< Updated upstream5��                                               5�_�      
           	   ,        ����                                                                                                                                                                                                                                                                                                                                                  V        g{��     �   +   ,          >>>>>>> Stashed changes5��    +                      �                     5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                       +           V        g{�     �                    #const RoomDashboardHeader = () => {   !  const nowDate = DateTime.now();       
  return (       <>   #      <div className="flex gap-10">           <p>룸 현황</p>   1        <div className="flex items-center gap-2">   I          <Calendar className="h-5 w-5" /> {String(nowDate).slice(0, 10)}           </div>         </div>         <div className="bg-main">   3        <p className="bg-inherit pl-10 text-white">   D          WIM 다이어트 센터 청담본점 | 기기관리 현황           </p>         </div>       </>     );   };5��                                �              5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                  V        g{�     �                4import { Textarea } from '@/components/ui/textarea';5��                          �       5               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        g{�     �                0import { Button } from '@/components/ui/button';5��                          �       1               5�_�                       	    ����                                                                                                                                                                                                                                                                                                                               	                 v       g{�     �               Bimport { CommonDialog, ContentHeader } from '@/components/shared';5��       	                  g                      5�_�                       	    ����                                                                                                                                                                                                                                                                                                                               	                 v       g{�     �               6import { , ContentHeader } from '@/components/shared';5��       	                  g                      5�_�                            ����                                                                                                                                                                                                                                                                                                                               	                 v       g{�    �                ]import { RoomDashboardContent } from '@/components/main/room-dashboard/RoomDashboardContent';    �               5import {  ContentHeader } from '@/components/shared';    �               Uimport { RoomHistoryStack } from '@/components/main/room-dashboard/RoomHistoryStack';    5��                          �       V               �                          ^       6               �                                  ^       �       5�_�                            ����                                                                                                                                                                                                                                                                                                                               	                 v       g{�    �                ]import { RoomDashboardContent } from '@/components/main/room-dashboard/RoomDashboardContent';    �               Uimport { RoomHistoryStack } from '@/components/main/room-dashboard/RoomHistoryStack';    �               4import { ContentHeader } from '@/components/shared';    5��                          �       5               �                          ^       V               �                                  ^       �       5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                         %       V   %    g{��     �                2      <div className="h-full flex-[0.3] bg-white">           <RoomHistoryStack />         </div>5��                                ]               5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                         %       V   %    g{��     �             5��                                        	       �                                               5�_�                            ����                                                                                                                                                                                                                                                                                                                                         %       V   %    g{��     �             �             5��                                        ]       5�_�                           ����                                                                                                                                                                                                                                                                                                                                         %       V   %    g{��    �               2      <div className="h-full flex-[0.3] bg-white">           <RoomHistoryStack />         </div>�                ]import { RoomDashboardContent } from '@/components/main/room-dashboard/RoomDashboardContent';    �               Uimport { RoomHistoryStack } from '@/components/main/room-dashboard/RoomHistoryStack';    �               4import { ContentHeader } from '@/components/shared';    5��                          �       5               �                          ^       V               �                                  ^       �       �                             J       P       5�_�                     	        ����                                                                                                                                                                                                                                                                                                                                         %       V   %    g{�     �                  ]import { RoomDashboardContent } from '@/components/main/room-dashboard/RoomDashboardContent';   Uimport { RoomHistoryStack } from '@/components/main/room-dashboard/RoomHistoryStack';   4import { ContentHeader } from '@/components/shared';       -export default function RoomDashboardPage() {   
  return (       <div className="content">         <div className="pb-3">           <ContentHeader />         </div>   9      <div className="flex h-[calc(100dvh-115px)] gap-3">            <div className="flex-1">   "          <RoomDashboardContent />           </div>       4        <div className="h-full flex-[0.3] bg-white">             <RoomHistoryStack />           </div>         </div>   
    </div>     );   }5�5��