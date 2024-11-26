import { ReactNode } from "react";

type BasicPageLayoutProps = {
  mainContent: ReactNode;
  sideContent: ReactNode;
};

function BasicPageLayout({ mainContent, sideContent }: BasicPageLayoutProps) {
  return (
    <div className="flex flex-col pb-8 lg:grid lg:grid-cols-2 lg:place-content-center lg:gap-4 xl:max-w-screen-lg xl:mx-auto">
      <div className="mt-[300px] lg:fixed lg:col-span-1 lg:ml-8">
        {mainContent}
      </div>
      <div className="lg:col-start-2 lg:col-span-1">{sideContent}</div>
    </div>
  );
}

export { BasicPageLayout };
