"use client";

import { LoopingClip } from "./components/LoopingClip";
import { FEATURES } from "./constants";

export function FeaturesSection() {
	return (
		<section
			id="features"
			className="relative px-4 py-16 sm:px-8 sm:py-20 lg:px-[30px] lg:py-24"
		>
			<div className="mx-auto max-w-7xl">
				<div className="space-y-16 sm:space-y-20 lg:space-y-24">
					{FEATURES.map((feature, index) => {
						const textOnRight = index % 2 === 1;
						return (
							<div
								key={feature.title}
								className="grid grid-cols-1 items-center gap-8 sm:gap-10 xl:grid-cols-2 xl:gap-16"
							>
								<div className={textOnRight ? "xl:order-1" : "xl:order-2"}>
									<LoopingClip src={feature.video} label={feature.title} />
								</div>
								<div
									className={`space-y-6 ${
										textOnRight
											? "xl:order-2 xl:text-right"
											: "xl:order-1"
									}`}
								>
									<div className="space-y-4">
										<span className="font-mono text-sm tracking-[0.5px] text-muted-foreground">
											{feature.tag}
										</span>
										<h3 className="text-balance text-2xl font-medium tracking-[-0.5px] text-foreground sm:text-3xl lg:text-4xl">
											{feature.title}
										</h3>
									</div>
									<p
										className={`max-w-[500px] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg ${
											textOnRight ? "xl:ml-auto" : ""
										}`}
									>
										{feature.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
