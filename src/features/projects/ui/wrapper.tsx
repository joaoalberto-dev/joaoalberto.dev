import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { ReactNode } from "react";

type ProjectWrapperProps = {
	url: string;
	children: ReactNode;
};

function ProjectWrapper({ children, url }: ProjectWrapperProps) {
	return (
		<Link className="lg:max-w-[48%] mb-8" href={url}>
			<Card className="w-full border-none shadow-none">
				<CardContent className="p-0 space-y-2">{children}</CardContent>
			</Card>
		</Link>
	);
}

export { ProjectWrapper };
