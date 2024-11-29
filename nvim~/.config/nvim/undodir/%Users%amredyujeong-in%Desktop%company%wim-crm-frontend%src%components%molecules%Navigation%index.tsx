Vim�UnDo� ��}l��Nz�+�)���[�4�����Hl���   �   I  { name: '종합 리포트 결과 다운로드', link: 'total-report' },                             gG�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             gGә    �         �      I  { name: '종합 리포트 결과 다운로드', link: 'total-report' },5��                        �                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             gG�y     �               �   !import { useState } from 'react';       !import { cn } from '@/lib/utils';   -import { useSession } from '@/store/session';   )import { USER_AUTH_ENUM } from '@/types';   ,import { ChevronRight } from 'lucide-react';   5import { Link, useLocation } from 'react-router-dom';       const Links = [   J  // { name: '문의 관리', link: 'inquiry-management/all?select=all' },   F  // { name: '초진 예약 관리', link: 'first-visit-management' },   4  // { name: '고객 관리', link: 'wimmer-list' },   C  // { name: '관리자 페이지', link: 'admin/create-account' },   6  { name: 'WIM-I 결과 다운로드', link: 'wimi' },   B  { name: '윔스케일 결과 다운로드', link: 'wim-scale' },   I  { name: '통합 리포트 결과 다운로드', link: 'total-report' },   8  // { name: '구글시트 WEB', link: 'google-sheet' },   (  { name: 'Marketing UTM', link: 'utm' }   ];       const nestedLinks = [     {       name: 'Back-office',       children: [         {   !        name: '회원 리스트',   &        url: 'back-office/member-list'         },         {   (        name: 'WIM 매니저 리스트',   '        url: 'back-office/manager-list'         },         {   (        name: '관리자 계정 관리',            url: 'back-office/admin'         }       ]     }   ];       !export const Navigation = () => {   %  const { pathname } = useLocation();   $  const { roleName } = useSession();       H  const [isOpenToggle, setIsOpenToggle] = useState<string | null>(null);       *  const hanldeToggle = (name: string) => {        if (isOpenToggle === name) {         setIsOpenToggle(null);       } else {         setIsOpenToggle(name);       }     };       
  return (   m    <section className="flex flex-1 flex-col items-start border-b border-t border-black px-[16px] py-[10px]">   $      <ul className="flex flex-col">   (        {Links.map(({ name, link }) => {             if (   5            roleName === USER_AUTH_ENUM.ROLE_ADMIN ||   =            window.location.hostname.includes('localhost') ||   1            !name.includes('관리자 페이지')             ) {               return (   <              <Link to={link} key={name} className={'B20M'}>                   <li                      className={cn(   C                    'py-[14px] text-slate-600 hover:text-wim-main',                       {   9                      'text-wim-main': pathname.includes(   7                        link === 'admin/create-account'   $                          ? '/admin'   ?                          : link.includes('inquiry-management')   2                            ? 'inquiry-management'   "                            : link                         )                       }                     )}                   >                     {name}                   </li>                 </Link>               );             }                 return null;           })}       2        {nestedLinks.map(({ name, children }) => {             return (   -            <div className="py-4" key={name}>                 <button   2                onClick={() => hanldeToggle(name)}                   className={cn(   U                  'B20M flex items-center space-x-3 text-slate-600 hover:text-black',                     {   7                    'text-black': isOpenToggle === name                     }                   )}                 >                   <ChevronRight                     size={16}   3                  className={cn('transition-all', {   6                    'rotate-90': isOpenToggle === name                     })}                   />                   <p>{name}</p>                 </button>       4              {isOpenToggle === name && children ? (   *                <ul className="ml-8 pt-3">   4                  {children.map(({ name, url }) => {                       return (                         <li   !                        key={url}   &                        className={cn(   b                          'B20M py-[7px] text-slate-600 hover:cursor-pointer hover:text-wim-main',                             {   C                            'text-wim-main': pathname.includes(url)                             }                           )}                         >   <                        <Link to={url}>&#8208; {name}</Link>                         </li>                       );                     })}                   </ul>                 ) : null}               </div>             );           })}         </ul>       </section>     );   };5�5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             gG�~    �         �      I  { name: '종합 리포트 결과 다운로드', link: 'total-report' },5��                        �                    �                         �                     �                        �                    �                         �                     �                        �                    5��