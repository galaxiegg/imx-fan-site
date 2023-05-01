import React from "react";

interface AvatarProps {
  name: string,
  email: string,
  avatar: string,
}

export const Avatar = (props: AvatarProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className={"text-right"}>
        <p className="font-bold text-grey-100">{props.name}</p>
        <p className="text-gray-100 text-xs">{props.email}</p>
      </div>
      <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
        <p className="text-white text-xl font-bold">{props.avatar}</p>
      </div>
    </div>
  )
}
