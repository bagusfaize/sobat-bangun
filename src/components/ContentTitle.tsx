import React from 'react';
import { ContentTitleProps } from "@/types";

export default function ContentTitle({title} : ContentTitleProps) {
  return (
    <div className="text-xl font-semibold my-2">
        {title}
    </div>
  )
}
