import "outstatic/outstatic.css";

import { Outstatic } from "outstatic";
import { OstClient } from "outstatic/client";

export default async function Page({ params }: { params: { ost: string[] } }) {
  const ostData = await Outstatic();

  return (
    <div className="fixed inset-0 min-h-[100dvh]">
      <OstClient ostData={ostData} params={params} />
    </div>
  )
}
