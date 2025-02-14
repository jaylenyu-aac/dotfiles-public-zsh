Vim�UnDo� ��f/�d-i6�}�+-�}� VD�/���ȠǲX   )   }) => {   !                          g��    _�                             ����                                                                                                                                                                                                                                                                                                                                                  v        g���     �                   �               5��                   B                            5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       g��      �         C      type CommonDialogProps = {     openState?: boolean;     onOpenChange?: () => void;     dialogClassName?: string;   '  trigger?: 'string' | React.ReactNode;   L  triggerVariant?: 'outline' | 'default' | 'destructive' | 'ghost' | 'link';     triggerClassName?: string;     contentClassName?: string;     headerClassName?: string;     headTitle?: string;     headDesc?: string;     content: React.ReactNode;   };5��                         �       �      �      5�_�                           ����                                                                                                                                                                                                                                                                                                                            (                    v       g��     �         C      export const CommonDialog = ({     openState,     onOpenChange,     dialogClassName,   
  trigger,     triggerVariant = 'default',     triggerClassName,     contentClassName,     headerClassName,     headTitle,     headDesc,   	  content   }: CommonDialogProps) => {5��                        �      �               5�_�                           ����                                                                                                                                                                                                                                                                                                                               1                 v       g��     �         7      $export const CommonDialog = ({) => {5��                         �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                      '          V       g��     �                  const renderTrigger = () => {   &    if (typeof trigger === 'string') {         return (   F        <Button variant={triggerVariant} className={triggerClassName}>             {trigger}           </Button>         );       }           return trigger;     };5��                          �      �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       g���     �         ,      #export const CommonDialog = () => {5��                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       g���     �         ,      export const Dialog = () => {5��                         �                     5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                V       g���     �         ,      // type CommonDialogProps = {   //   openState?: boolean;   //   onOpenChange?: () => void;   //   dialogClassName?: string;   *//   trigger?: 'string' | React.ReactNode;   O//   triggerVariant?: 'outline' | 'default' | 'destructive' | 'ghost' | 'link';   //   triggerClassName?: string;   //   contentClassName?: string;   //   headerClassName?: string;   //   headTitle?: string;   //   headDesc?: string;   //   content: React.ReactNode;   // };5��                         �       �      �      5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                         
       v   
    g���     �         ,      type CommonDialogProps = {5��                         �                      5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                         
       v   
    g���     �         ,      type DialogProps = {5��                         �                      5�_�   
                    $    ����                                                                                                                                                                                                                                                                                                                                                v       g���     �         .        �         -    �         ,      *export const CounselReservDialog = () => {5��       $                  w                     �       %                  x                     �                          y                     �                          y                     �                         }                     �                         |                     �                        {                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       g���     �         .        open5��                                              �                         �                     �                        �                     �                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       g���     �          /        onO5��                         �                     �                         �                     �                        �                     �                          �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       g���     �                  dialogClassName?: string;   '  trigger?: 'string' | React.ReactNode;   L  triggerVariant?: 'outline' | 'default' | 'destructive' | 'ghost' | 'link';     triggerClassName?: string;5��                          !      �               5�_�                             ����                                                                                                                                                                                                                                                                                                                                       "          V       g���     �                 9      <DialogTrigger className={dialogClassName} asChild>           {renderTrigger()}         </DialogTrigger>5��                          7      k               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V       g���     �         *        �         )    5��                          �                     �                         �                     5�_�                       	    ����                                                                                                                                                                                                                                                                                                                            !          !          V       g���     �         *      	  content5��       	                  �                     �                         �                     �                        �                     �                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                            "          "          V       g���     �         +        hea5��                                              �                                              �                                             �                                              �                                              �                                            �                                              �                                              �                                            5�_�                           ����                                                                                                                                                                                                                                                                                                                            #          #          V       g���     �         ,        hea5��                                              �                                              �                                             �                                              �                                               �                                              �                                            5�_�                           ����                                                                                                                                                                                                                                                                                                                            $          $          V       g���     �          -        head5��                         "                     �                         '                     �                        '                     �                         *                     5�_�                           ����                                                                                                                                                                                                                                                                                                                            %          %          V       g���     �          .        con5��                         -                     �       	                  1                     5�_�                    !       ����                                                                                                                                                                                                                                                                                                                            %          %          V       g��     �       "   .      }) => {5��                          4                     5�_�                   !       ����                                                                                                                                                                                                                                                                                                                                                v       g��     �       "   .      }:) => {�   !   "   .    5��                          5                     5�_�                     "        ����                                                                                                                                                                                                                                                                                                                                                v       g��    �          *          'use client';�         ,           }:CounselReservDialogProps) => {    �         &      0import { Button } from '@/components/ui/button';    �         .   	   import {   	  Dialog,     DialogContent,     DialogDescription,     DialogHeader,     DialogTitle,     DialogTrigger    } from '@/components/ui/dialog';    5��                          A       �               �                                1       x       �                      !   �      "       !       �                                                  5�_�                    !       ����                                                                                                                                                                                                                                                                                                                            (          (          V       g��     �   !   "   .    �   !   "   .      9      <DialogTrigger className={dialogClassName} asChild>           {renderTrigger()}         </DialogTrigger>5��    !                      <              k       5��