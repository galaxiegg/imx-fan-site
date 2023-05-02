import React from "react";
import {Link} from "react-router-dom";
import {PencilIcon} from "@heroicons/react/24/outline";
import {BasePanel} from "./base-panel";

export interface InfoPanelData {
  label: string;
  value: string;
}

interface InfoPanelProps {
  title: string
  panelData?: InfoPanelData[]
  editLink?: string
}

export function InfoPanel(props: InfoPanelProps) {
  const data: InfoPanelData[] = props.panelData ? props.panelData : [];

  return (
    <BasePanel className="flex justify-between">
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-1 pt-1">{props.title}</h2>
        {data.map((item: InfoPanelData, index: number) => (
          <div key={`info-panel-item-${index}`}>
            <p className="text-xs font-bold mb-1">{item.label}</p>
            <p className="text-xs mb-4">{item.value}</p>
          </div>
          )
        )}
      </div>
      {props.editLink && <div>
        <Link to={props.editLink!} className="inline-block border border-gray-300 p-2 rounded-md">
          <PencilIcon className="w-5 h-5"/>
        </Link>
      </div>}
    </BasePanel>
  );
}
