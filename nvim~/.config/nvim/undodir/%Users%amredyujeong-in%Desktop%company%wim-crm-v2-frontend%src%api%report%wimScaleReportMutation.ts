Vim�UnDo� ���~5�Z�җ�IveR{D�,�h9�Tq�y��]                                     g��	    _�                             ����                                                                                                                                                                                                                                                                                                                                                  v        g���     �                   �               5��                                         �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        g���     �                  5��                                                  5�_�                       .    ����                                                                                                                                                                                                                                                                                                                               .          <       v   <    g���     �               A  const response = await axiosInstance.post('/inquiries/phone', {5��       .                  �                      5�_�                       .    ����                                                                                                                                                                                                                                                                                                                               .          <       v   <    g���     �               2  const response = await axiosInstance.post('/', {5��       .                  �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       g���     �               9const checkPhoneNumber = async (phoneNumber: string) => {5��                         m                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       g���     �               )const  = async (phoneNumber: string) => {5��                         m                      5�_�                       )    ����                                                                                                                                                                                                                                                                                                                               )          8       v   8    g���     �               F    mutationFn: (phoneNumber: string) => checkPhoneNumber(phoneNumber)�             5��       )                 �                    5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                v       g���     �   
            *export const useCheckPhoneNumber = () => {5��    
                     $                     5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                v       g���     �   
            export const  = () => {5��    
                     $                     5�_�   	              
   
        ����                                                                                                                                                                                                                                                                                                                                                v       g��    �                0import { axiosInstance } from '@/api/intercept';    �               4import { useMutation } from '@tanstack/react-query';    5��                          1       5               �                                  1       f       5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                v       g��     �                  0import { axiosInstance } from '@/api/intercept';   4import { useMutation } from '@tanstack/react-query';       7const wimScaleReport = async (phoneNumber: string) => {   E  const response = await axiosInstance.post('/wim-scale/v3/report', {       phoneNumber     });     return response.data;   };       (export const useWimScaleReport = () => {     return useMutation({   D    mutationFn: (phoneNumber: string) => wimScaleReport(phoneNumber)     });   };5�5��