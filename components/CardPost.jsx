'use client'

import Image from "next/image";
import React from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
function CardPost({ title, description, nameuser,...props }) {
  const router = useRouter()
  return (
    <ul className="flex flex-col mt-3 mb-3 p-2 " role="list">
      <li className="flex flex-row">
        <div className="flex-none min-w-0  mr-3">
          <img
            className="h-12 w-12  rounded-full object-cover self-center"
            src={`https://xsgames.co/randomusers/assets/avatars/male/${nameuser}.jpg`}
            width={60}
            height={60}
            alt="Foto de  perfil"
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold leading-6 text-gray-900">
            {title}
          </h4>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {nameuser}
          </p>
          <p className="text-sm leading-6 text-gray-900">{description}</p>
          <div className="flex flex-row-reverse gap-2 mt-2">
            <span className="text-xs leading-6 ">{props.lengtComments}</span>
            <ChatBubbleLeftIcon 
            className="h-6 w-6 text-gray-400 cursor-pointer" 
            onClick={() => {router.push(`/posts/details/${nameuser}`)}}
            />
          </div>
        </div>
      </li>
    </ul>
  );
}

export default CardPost;
