import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { ReactNode } from "react";

type ProjectWrapperProps = {
	url: string;
	children: ReactNode;
};

function ProjectWrapper({ children, url }: ProjectWrapperProps) {
	return (
		<Link href={url}>
			<Card className="w-full border-none shadow-none">
				<CardContent className="p-2 lg:p-4 space-y-4">{children}</CardContent>
			</Card>
		</Link>
	);
}

export { ProjectWrapper };
