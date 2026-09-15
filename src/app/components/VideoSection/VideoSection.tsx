"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { newVideoProgressState, reportVideoProgress } from "@/lib/analytics/video-progress";

const VIDEO_SRC = "/videos/houdry-walkthrough.mp4";
const VIDEO_POSTER = "/videos/houdry-walkthrough.jpg";
const VIDEO_TITLE = "Houdry walkthrough";

function PlayIcon({ className = "" }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.2-6.5a1 1 0 0 0 0-1.7L9.53 4.65A1 1 0 0 0 8 5.5Z" />
		</svg>
	);
}

export function VideoSection() {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const progressRef = useRef<ReturnType<typeof newVideoProgressState> | null>(null);
	progressRef.current ??= newVideoProgressState();
	const progress = progressRef.current;

	return (
		<section id="see-it" className="relative px-4 py-16 sm:px-8 sm:py-20 lg:px-[30px] lg:py-24">
			<div className="mx-auto max-w-7xl">
				<div className="max-w-3xl text-left select-none">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
						See it in action
					</h2>
					<p className="mt-3 text-base text-muted-foreground">
						The full walkthrough, with voice-over.
					</p>
				</div>

				<div className="relative mx-auto mt-12 w-full">
					<div
						data-testid="video-frame"
						className="relative aspect-video overflow-hidden bg-black"
					>
						{playing ? (
							<video
								ref={videoRef}
								src={VIDEO_SRC}
								poster={VIDEO_POSTER}
								autoPlay
								controls
								playsInline
								preload="auto"
								className="absolute inset-0 h-full w-full object-contain"
								aria-label={VIDEO_TITLE}
								onTimeUpdate={(event) => {
									const player = event.currentTarget;
									reportVideoProgress(progress, player.currentTime, player.duration);
								}}
								onEnded={() => {
									reportVideoProgress(progress, 1, 1);
								}}
							/>
						) : (
							<button
								type="button"
								onClick={() => {
									track("video_started", { video: "demo", placement: "see_it" });
									setPlaying(true);
								}}
								aria-label={`Play video: ${VIDEO_TITLE}`}
								className="group absolute inset-0 cursor-pointer"
							>
								<Image
									src={VIDEO_POSTER}
									alt="Still from the Houdry walkthrough"
									fill
									sizes="(min-width: 1280px) 1280px, 100vw"
									className="object-cover"
								/>
								<span className="absolute inset-0 grid place-items-center">
									<PlayIcon className="h-14 w-14 translate-x-[3px] text-white transition-transform duration-200 group-hover:scale-110 sm:h-16 sm:w-16" />
								</span>
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
