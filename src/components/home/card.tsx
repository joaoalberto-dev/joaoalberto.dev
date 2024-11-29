import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { ReactNode } from "react";

type HomeCardProps = {
  url: string;
  children: ReactNode;
};

function HomeCard({ children, url }: HomeCardProps) {
  return (
    <Link className="w-full mb-8" href={url}>
      <Card className="w-full border-none shadow-none">
        <CardContent className="p-0 space-y-2 bg-background">
          {children}
        </CardContent>
      </Card>
    </Link>
  );
}

export { HomeCard };
